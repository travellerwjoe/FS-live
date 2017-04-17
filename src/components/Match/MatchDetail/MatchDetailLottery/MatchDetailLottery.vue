<template>
    <div class="match-detail-lottery">
        <Nav-Tab @change="changeView" :theme="2">
            <Tab :index="0" :value="'MatchLotteryStats'">统计</Tab>
            <Tab :index="1" :value="'MatchLotteryExpert'">专家</Tab>
            <Tab :index="2" :value="'MatchLotteryFollow'">关注</Tab>
        </Nav-Tab>
        <keep-alive>
            <component :is="view" class="match-detail-view"></component>
        </keep-alive>
    </div>
</template>
<style lang="stylus">
</style>
<script>
    import MatchLotteryStats from './MatchLotteryStats'
    import MatchLotteryExpert from './MatchLotteryExpert'
    import MatchLotteryFollow from './MatchLotteryFollow'
    export default {
        data() {
            return {
                view: 'MatchLotteryStats'
            }
        },
        components: {
            MatchLotteryStats,
            MatchLotteryExpert,
            MatchLotteryFollow
        },
        methods: {
            changeView(activeIndex, activeValue) {
                this.view = activeValue
            }
        }
    }
</script>