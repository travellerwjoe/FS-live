<template>
    <div class="live">
        <Match-List :list="live"></Match-List>
        <Goaling-Notice-Board></Goaling-Notice-Board>
        <!-- <component :is="currentView"></component>-->
    </div>
</template>
<style lang="stylus">
    .live 
        height:100%
    .fade-enter-active, .fade-leave-active 
        transition: opacity .5s
    .fade-enter, .fade-leave-active
        opacity: 0
</style>
<script>
    import MatchList from './Match/'
    import GoalingNoticeBoard from './GoalingNoticeBoard'
    import { mapActions, mapGetters } from 'vuex'
    import utils from '@/utils'
    export default {
        data() {
            return {
                goalFlag: ['g', 'hg', 'gg', 'p', 'hp', 'gp', 'hw', 'gw'], // 进球标识
                currentView: 'GoalingNoticeBoard',
                goalingList: [],
                goalingItem: null
            }
        },
        components: {
            MatchList,
            GoalingNoticeBoard
        },
        methods: {
            ...mapActions([
                'fetchLive',
                'socketDisconnect',
                'socketConnect',
                'pushToGoalingQueue'
            ]),
            listenVisibility() {
                utils.visibility(() => {
                    this.socketConnect()
                }, () => {
                    this.socketDisconnect()
                })
            },
            watchGoaling(live, preLive) {
                const liveObj = {}
                const preLiveObj = {}
                // 将数组转换成以比赛id为key的对象
                live.forEach((item, index) => {
                    liveObj[item.id] = item
                })
                preLive.forEach((item, index) => {
                    preLiveObj[item.id] = item
                })

                // 遍历并与上次live比较是否有进球
                for (const key in liveObj) {
                    const match = liveObj[key]
                    const preMatch = preLiveObj[key]
                    if (!match || !preMatch) {
                        return
                    }
                    if (match.rd && preMatch.rd) {
                        match.goaling = {}
                        let hasGoaling = false
                        
                        if (match.rd.hg !== preMatch.rd.hg) {
                            match.goaling.host = true
                            hasGoaling = true
                        } else if (match.rd.gg !== preMatch.rd.gg) {
                            match.goaling.guest = true
                            hasGoaling = true
                        }

                        if (hasGoaling) {
                            const goalingItem = {
                                league: match.league,
                                host: {
                                    name: match.host.n,
                                    score: match.rd.hg,
                                    goaling: match.goaling.host || false
                                },
                                guest: {
                                    name: match.guest.n,
                                    score: match.rd.gg,
                                    goaling: match.goaling.guest || false
                                },
                                occurTime: null,
                                event: null
                            }
                            for (let i = match.events_graph.events.length - 1; i >= 0; i--) {
                                const thisEvent = match.events_graph.events[i]
                                if (this.goalFlag.indexOf(thisEvent.t) >= 0) {
                                    goalingItem.occurTime = parseInt(thisEvent.status) || 0
                                    goalingItem.event = thisEvent.t
                                    this.pushToGoalingQueue(goalingItem)
                                    break
                                }
                            }
                        }
                    }
                }
            }
            // notifyGoaling() {
            //     console.log(goaling)
            //     this.goalingList = goaling.slice(0)
            //     this.goalingItem = this.goalingList.shift()
            // }
        },
        computed: {
            ...mapGetters([
                'live'
            ])
        },
        watch: {
            '$store.state.Live.live': 'watchGoaling'
            // '$store.state.Live.goalingQueue': {
            //     handler: 'notifyGoaling',
            //     deep: true
            // }
        },
        mounted() {
            this.fetchLive()
            this.listenVisibility()
        },
        updated() {
            // console.log(this.$store.state.match.live)
        }
    }

</script>