<template>
    <div class="live">
        <Match-List :list="live"></Match-List>
    </div>
</template>
<style lang="stylus">
    .live 
        height:100%
</style>
<script>
    import MatchList from './Match'
    import { mapActions, mapGetters } from 'vuex'
    import utils from '@/utils'
    export default {
        props: ['league'],
        components: {
            MatchList
        },
        methods: {
            ...mapActions([
                'fetchLive',
                'socketDisconnect',
                'socketConnect'
            ]),
            listenVisibility() {
                utils.visibility(() => {
                    this.socketConnect()
                }, () => {
                    this.socketDisconnect()
                })
            }
        },
        computed: {
            ...mapGetters([
                'live'
            ])
        },
        watch: {
            '$store.state.match.live': (live, preLive) => {
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
                        if (match.rd.hg !== preMatch.rd.hg) {
                            match.goaling.host = true
                        } else if (match.rd.gg !== preMatch.rd.gg) {
                            match.goaling.guest = true
                        }
                    }
                }
            }
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