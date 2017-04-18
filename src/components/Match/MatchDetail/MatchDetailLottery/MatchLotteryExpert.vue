<template>
    <div class="match-lottery-expert">
        <ul>
            <li v-for="item in jingcai" :class="['match-lottery-result', getLotteryResultClass(item.jieguo)]">
                <div :class="['match-lottery-type',getLotteryTypeClass(item.type)]">
                </div>
                <ul class="match-lottery-detail">
                    <li>类型：{{item.type | getLotteryType}}({{item.yazhu_coin}}积分)</li>
                    <li>内容：{{item | getLotteryContent }}</li>
                    <li>收费：<span class="color-red line-through">{{item.shoufei_coin}}球币</span><span class="match-lottery-reason" v-if="item.reason">有分析</span></li>
                </ul>
                <div class="match-lottery-user">
                    <div class="match-lottery-user-img">
                        <img :src="item.user.photo_url" alt="">
                    </div>
                    <div class="match-lottery-user-info">
                        <div class="match-lottery-user-name color-main">{{item.user.username}}</div>
                        <div class="match-lottery-user-addtime color-grey">{{item.add_time*1000 | formatDateTime('hh:mm',true)}}</div>
                    </div>
                    <div class="match-lottery-user-ranking">
                        {{item.user | getUserRanking}}
                        <span class="match-lottery-result match-lottery-result-win"></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .match-lottery-expert
        >ul
            >li
                padding:.5rem
                display:flex
                border-bottom:1px solid #eee
                >div
                    flex:1
                >ul
                    flex:4
                
                .match-lottery-detail
                    font-size:.6rem
                    text-align:left
                    padding-left:.5rem
                    .match-lottery-reason
                        background-color:orangered
                        color:#fff
                        padding:.15rem .4rem
                        border-radius:4px
                        font-size:.6rem
                        margin-left:.5rem
                        position:relative
                        &:before
                            border-right:.35rem solid orangered
                            border-top:.35rem solid transparent
                            border-bottom:.35rem solid transparent
                            content:''
                            display:inline-block
                            position:absolute
                            left:-.28rem
                            top:.28rem
                .match-lottery-user
                    flex:2
                    position:relative
                    font-size:.6rem
                    .match-lottery-user-img
                        width:1.5rem
                        height:1.5rem
                        position:absolute
                        right:0
                        border-radius:100%
                        overflow:hidden
                        img
                            width:100%
                            height:100%
                    .match-lottery-user-info
                        position:absolute
                        right:1.6rem
                        top:-.1rem
                        white-space:nowrap
                        text-align:right
                    .match-lottery-user-ranking
                        position:absolute
                        bottom:0
                        right:0
                        white-space:nowrap
                    
</style>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return {
                matchID: this.$route.query.match_id,
                page: 1
            }
        },
        methods: {
            ...mapActions([
                'fetchLotteryWithExpert'
            ]),
            getLotteryTypeClass(type) {
                return `match-lottery-${type.replace(/half_|_/g, '')}`
            },
            getLotteryResultClass(result) {
                const obj = {
                    '-10': 'lose',
                    '10': 'win',
                    '-5': 'lose-half',
                    '5': 'lose',
                    '0': 'even',
                    '-50': 'cancel'
                    // '-100': 'running'
                }   
                console.log(obj[result])
                return `match-lottery-result-${obj[result]}`
            }
        },
        computed: {
            ...mapGetters([
                'lotteryWithExpert'
            ]),
            jingcai() {
               return this.lotteryWithExpert.jingcai ? this.lotteryWithExpert.jingcai : []
            }
        },
        filters: {
            getLotteryType(type) {
                switch (type) {
                    case 'win_lose': return '全场 - 胜平负'
                    case 'half_win_lose': return '半场 - 胜平负'
                    case 'rangfen': return '全场 - 让球'
                    case 'half_rangfen': return '半场 - 让球'
                    case 'daxiao': return '全场 - 大小球'
                    case 'half_daxiao': return '半场 - 大小球'
                    case 'corner': return '全场 - 角球'
                    case 'half_corner': return '半场 - 角球'
                    default:
                        return '未知'
                }
            },
            getUserRanking(user) {
                let type
                let period
                if (!user.bangdan_type) {
                    return ''
                }

                if (user.bangdan_is_inplay) {
                    type = '滚球'
                } else {
                    type = '初盘'
                }

                if (user.bangdan_type) {
                    if (user.bangdan_type.indexOf('month') >= 0) {
                        period = '月榜'
                    } else if (user.bangdan_type.indexOf('week') >= 0) {
                        period = '周榜'
                    } else if (user.bangdan_type.indexOf('quarter') >= 0) {
                        period = '季榜'
                    }
                }

                return `${type}${period}第${user.bangdan_order}名`
            },
            getLotteryContent(lottery) {
                const obj = {
                    rangfen: {
                        gt: `主队 ${getLotteryHandicap(lottery.pankou, lottery.yazhu)} (${lottery.peilv})`,
                        lt: `客队 ${getLotteryHandicap(lottery.pankou, lottery.yazhu)} (${lottery.peilv})`
                    },
                    win_lose: {
                        gt: `主胜 (${lottery.peilv})`,
                        eq: `平局 (${lottery.peilv})`,
                        lt: `客胜 (${lottery.peilv})`
                    },
                    daxiao: {
                        gt: `大于 ${lottery.pankou} (${lottery.peilv})`,
                        lt: `小于 ${lottery.pankou} (${lottery.peilv})`
                    },
                    corner: {
                        gt: `高于 ${lottery.pankou} (${lottery.peilv})`,
                        lt: `低于 ${lottery.pankou} (${lottery.peilv})`
                    }
                }

                function getLotteryHandicap(pankou, yazhu) {
                    if (yazhu !== 'lt') {
                        return pankou
                    }
                    if (pankou.indexOf('+') >= 0) {
                        return pankou.replace(/\+/g, '-')
                    } else if (pankou.indexOf('-') >= 0) {
                        return pankou.replace(/-/g, '+')
                    } else {
                        return pankou
                    }
                }

                return obj[lottery.type.replace('half_', '')][lottery.yazhu]
            }         
        },
        mounted () {
            this.fetchLotteryWithExpert({
                matchID: this.matchID,
                page: this.page
            })
        }
    }
</script>