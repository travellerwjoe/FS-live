<template>
    <div class="match-detail-live">
        <Nav-Tab @change="changeView" :theme="2">
            <Tab :index="0" :value="'MatchEventLive'">事件直播</Tab>
            <Tab :index="1" :value="'MatchLineup'">双方阵容</Tab>
            <Tab :index="2">攻防走势</Tab>
            <Tab :index="3">视频直播</Tab>
        </Nav-Tab>
        <keep-alive>
            <component :is="view" class="match-detail-view"></component>
        </keep-alive>
        <!--<MatchEventLive></MatchEventLive>-->
    </div>
</template>
<style lang="stylus">
</style>
<script>
    import MatchEventLive from './MatchEventLive'
    import MatchLineup from './MatchLineup'
    export default {
        data() {
            return {
                view: 'MatchEventLive'
            }
        },
        components: {
            MatchEventLive,
            MatchLineup
        },
        methods: {
            changeView(activeIndex, activeValue) {
                this.view = activeValue
            }
        },
        computed: {
            
        },
        mounted() {
            
        }
    }
</script>