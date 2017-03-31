<template>
    <div class="match-detail">
        <App-Header title="欧洲冠军杯"></App-Header>
        <Match-Status-Board :data="matchDetail.race" v-if="matchDetail.race">
            <Match-Time-Bar :event="matchDetail.events_graph?matchDetail.events_graph:{}" v-if="matchDetail.race.status!=='未'"></Match-Time-Bar>
            <Match-Status-Bar-Box :data="matchDetail.race_plus"></Match-Status-Bar-Box>
        </Match-Status-Board>
        <Nav-Tab @change="changeView">
            <Tab :index="0">直播</Tab>
            <Tab :index="1">分析</Tab>
            <Tab :index="2">指数</Tab>
            <Tab :index="3">四合一</Tab>
            <Tab :index="4">竞猜</Tab>
            <Tab :index="5">评论</Tab>
        </Nav-Tab>
        <Nav-Tab @change="changeView" :theme="2">
            <Tab :index="0">事件直播</Tab>
            <Tab :index="1">双方阵容</Tab>
            <Tab :index="2">攻防走势</Tab>
            <Tab :index="3">视频直播</Tab>
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
    import AppHeader from '@/components/AppHeader'
    import MatchStatusBoard from './MatchStatusBoard'
    import MatchTimeBar from '../MatchTimeBar'
    import MatchStatusBarBox from './MatchStatusBarBox'
    import {NavTab, Tab} from '@/components/NavTab'
    import MatchDetailLive from './MatchDetailLive'
    import { mapActions, mapGetters } from 'vuex'
    export default{
        components: {
            AppHeader,
            MatchStatusBoard,
            MatchTimeBar,
            MatchStatusBarBox,
            NavTab,
            Tab,
            MatchDetailLive
        },
        data() {
            return {
                view: 'MatchDetailLive',
                matchID: this.$route.query.match_id
            }
        },
        mounted () {
            this.fetchMatchDetail(this.matchID)
        },
        computed: {
            ...mapGetters([
                'matchDetail'
            ])
        },
        methods: {
            ...mapActions([
                'fetchMatchDetail'
            ]),
            changeView(activeIndex, activeValue) {
                console.log(activeIndex, activeValue)
            }
        }
    }
</script>
