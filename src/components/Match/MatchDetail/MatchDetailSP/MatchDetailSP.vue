<template>
    <div class="match-detail-sp">
        <Nav-Tab @change="changeView" :theme="2">
            <Tab :index="0" :value="'MatchSPBet'">胜平负</Tab>
            <Tab :index="1" :value="'MatchSPHandicap'">让球</Tab>
            <Tab :index="2" :value="'MatchSPSizeOfBall'">大小球</Tab>
            <Tab :index="3" :value="'MatchSPCorner'">角球</Tab>
        </Nav-Tab>
        <keep-alive>
            <component :is="view" class="match-detail-view"></component>
        </keep-alive>
        <!--<Match-SP-List :sp="SPdata"></Match-SP-List>-->
    </div>
</template>
<style lang="stylus">
    .trend-up
        background-color:#d8eee1
        &::after
            content:'↑'
    .trend-down
        background-color:#fdd6d7
        &::after
            content:'↓'
</style>
<script>
    import MatchSPBet from './MatchSPBet'
    import MatchSPHandicap from './MatchSPHandicap'
    import MatchSPSizeOfBall from './MatchSPSizeOfBall'
    import MatchSPCorner from './MatchSPCorner'
    // import MatchSPList from './MatchSPList'
    // import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                view: 'MatchSPBet'
                // SPdata: this.SPbet
            }
        },
        components: {
            MatchSPBet,
            MatchSPHandicap,
            MatchSPSizeOfBall,
            MatchSPCorner
            // MatchSPList
        },
        // computed: {
        //     ...mapGetters([
        //         'matchDetail'
        //     ]),
        //     SPbet() {
        //         return this.matchDetail.sp ? this.matchDetail.sp.bet : []
        //     },
        //     SPHandicap() {
        //         return this.matchDetail.sp ? this.matchDetail.sp.rangfen : []
        //     },
        //     SPSizeOfBall() {
        //         return this.matchDetail.sp ? this.matchDetail.sp.daxiao : []
        //     },
        //     SPCorner() {
        //         return this.matchDetail.sp ? this.matchDetail.sp.corner : []
        //     }
        // },
        methods: {
            changeView(activeIndex, activeValue) {
                this.view = activeValue
                // console.log(activeValue)
                // this.SPdata = activeValue
            },
            getActiveClass(value, nextValue) {
                if (value !== nextValue && value && nextValue) {
                    return ['bg-red', 'color-white']
                }
                return ''
            },
            getTrendClass(item, nextItem) {
                if (+item.trend === 100) {
                    return ''
                } else if (item.trend <= 0 && nextItem.trend >= 0 && item.trend < nextItem.trend) {
                    return ['trend-down']
                } else if (item.trend >= 0 && nextItem.trend <= 0 && item.trend > nextItem.trend) {
                    return ['trend-up']
                } else {
                    return ''
                }
            }
        }
    }
</script>