<template>
    <div class="live">
        <Match-List :list="live"></Match-List>
        <!--<Goaling-Notice-Board :goaling="goaling" ></Goaling-Notice-Board>-->
        <!--<keep-alive>
            <component :is="currentView"></component>
        </keep-alive>-->
    </div>
</template>
<style lang="stylus">
    .live 
        height:100%
</style>
<script>
    import MatchList from './Match'
    import GoalingNoticeBoard from './GoalingNoticeBoard'
    import { mapActions, mapGetters } from 'vuex'
    import utils from '@/utils'
    export default {
        data() {
            return {
                goalFlag: ['g', 'hg', 'gg', 'p', 'hp', 'gp', 'hw', 'gw'], // 进球标识
                currentView: 'GoalingNoticeBoard'
            }
        },
        render: function (createElement, context) {
          return createElement(GoalingNoticeBoard)  
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
                'addToGoalingQueue'
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
                                    goaling: match.goaling.host || false
                                },
                                guest: {
                                    name: match.guest.n,
                                    goaling: match.goaling.guest || false
                                },
                                occurTime: null
                            }
                            for (let i = match.events_graph.events.length - 1; i >= 0; i--) {
                                const thisEvent = match.events_graph.events[i]
                                if (this.goalFlag.indexOf(thisEvent.t) >= 0) {
                                    console.log(this)
                                    goalingItem.occurTime = parseInt(thisEvent.status) || 0
                                    this.addToGoalingQueue(goalingItem)
                                    break
                                }
                            }
                        }
                    }
                }
            }
        },
        computed: {
            ...mapGetters([
                'live'
            ])
        },
        watch: {
            '$store.state.Live.live': 'watchGoaling',
            '$store.state.Live.goalingQueue': {
                handler: (goaling, preGoaling) => {
                    console.log(goaling)
                },
                deep: true
            }
        },
        mounted() {
            this.fetchLive()
            this.listenVisibility()
            setInterval(() => {
                this.currentView = this.currentView ? null : 'GoalingNoticeBoard'
            }, 3000)
        },
        updated() {
            // console.log(this.$store.state.match.live)
        }
    }

</script>