<template>
    <div class="match-detail">
        <App-Header :title="matchDetail.race.league.name" v-if="matchDetail.race"></App-Header>
        <Match-Status-Board :data="matchDetail.race" v-if="matchDetail.race">
            <Match-Status-Title :data="raceData" slot="top"></Match-Status-Title>
            <Match-Time-Bar :event="matchDetail.events_graph?matchDetail.events_graph:{}" v-if="matchDetail.race.status!=='未'" slot="bottom"></Match-Time-Bar>
            <Match-Status-Bar-Box :data="matchDetail.race_plus" slot="bottom"></Match-Status-Bar-Box>
        </Match-Status-Board>
        <Nav-Tab @change="changeView">
            <Tab :index="0" :value="'MatchDetailLive'">直播</Tab>
            <Tab :index="1">分析</Tab>
            <Tab :index="2" :value="'MatchDetailIndex'">指数</Tab>
            <Tab :index="3" :value="'MatchDetailSP'">四合一</Tab>
            <Tab :index="4" :value="'MatchDetailLottery'">竞猜</Tab>
            <Tab :index="5" :value="'MatchDetailComment'">评论</Tab>
        </Nav-Tab>
        <div class="match-detail-views">
            <keep-alive>
                <component :is="view">
                </component>
            </keep-alive>
        </div>
    </div>
</template>
<style lang="stylus">
</style>
<script>
    import { MatchStatusBoard, MatchStatusTitle, MatchStatusBarBox } from './MatchStatusBoard'
    import MatchTimeBar from '../MatchTimeBar'
    import MatchDetailLive from './MatchDetailLive'
    import MatchDetailIndex from './MatchDetailIndex'
    import MatchDetailSP from './MatchDetailSP'
    import MatchDetailLottery from './MatchDetailLottery'
    import MatchDetailComment from './MatchDetailComment'
    import { mapActions, mapGetters } from 'vuex'
    import utils from '@/utils'
    export default{
        components: {
            MatchStatusBoard,
            MatchStatusTitle,
            MatchTimeBar,
            MatchStatusBarBox,
            MatchDetailLive,
            MatchDetailIndex,
            MatchDetailSP,
            MatchDetailLottery,
            MatchDetailComment
        },
        data() {
            return {
                view: 'MatchDetailLive',
                matchID: this.$route.query.match_id
            }
        },
        mounted () {
            this.fetchMatchDetail(this.matchID)
            // this.listenVisibility()
            console.log('appendpopstate')
            // window.onpopstate = this.onpopstate
        },
        destroyed () {
            window.removeEventListener('popstate', this.onpopstate)  
        },
        computed: {
            ...mapGetters([
                'matchDetail'
            ]),
            raceData() {
                const race = this.matchDetail.race
                if (this.matchDetail.race_data) race.race_data = this.matchDetail.race_data

                race.race_running = {
                    rangfen_handicap: this.matchDetail.sp.rangfen.length && this.matchDetail.sp.rangfen[0].handicap,
                    daxiao_handicap: this.matchDetail.sp.daxiao.length && this.matchDetail.sp.daxiao[0].handicap,
                    corner_handicap: this.matchDetail.sp.corner.length && this.matchDetail.sp.corner[0].handicap
                }
                
                return race
            }
        },
        methods: {
            ...mapActions([
                'fetchMatchDetail',
                'socketConnect',
                'socketDisconnect'
            ]),
            changeView(activeIndex, activeValue) {
                this.view = activeValue
            },
            listenVisibility() {
                utils.visibility(() => {
                    console.log(this.socketConnect)
                    this.socketConnect({
                        event: 'fetchMatchDetail',
                        args: this.matchID
                    })
                }, () => {
                    this.socketDisconnect()
                })
            },
            onpopstate(event) {
                console.log(event)
                console.log('xxxxxonpopstatefff')
            }
        }
    }
</script>
