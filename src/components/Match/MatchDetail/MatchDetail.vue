<template>
    <div class="match-detail">
        <App-Header title="欧洲冠军杯"></App-Header>
        <Match-Status-Board></Match-Status-Board>
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
        <keep-alive>
            <componet :is="view">

            </componet>
        </keep-alive>
    </div>
</template>
<style lang="stylus">
</style>
<script>
    import AppHeader from '@/components/AppHeader'
    import MatchStatusBoard from './MatchStatusBoard'
    import {NavTab, Tab} from '@/components/NavTab'
    import MatchEventLive from './MatchEventLive'
    export default{
        components: {
            AppHeader,
            MatchStatusBoard,
            NavTab,
            Tab,
            MatchEventLive
        },
        data() {
            return {
                view: 'MatchEventLive'
            }
        },
        mounted () {

        },
        methods: {
            changeView(activeIndex, activeValue) {
                console.log(activeIndex, activeValue)
            }
        }
    }
</script>
