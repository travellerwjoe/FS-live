<template>
    <transition name="fade" mode="out-in" appear v-if="goalingItem">
        <div class="goaling-notice-board">
            <div class="goaling-league">
                {{goalingItem.league.fn}}
                <span class="goaling-time color-red">{{goalingItem.occurTime}}'</span>
            </div>
            <div :class="['goaling-host',{'color-red':goalingItem.host.goaling}]">
                <div class="goaling-team">
                    <span class="goaling-team-name">{{goalingItem.host.name}}</span>
                    <span v-if="goalingItem.host.goaling">({{getGoalingEventStr(goalingItem.event)}})</span>
                </div>
                <b class="goaling-score">{{goalingItem.host.score}}</b>
            </div>
            <div :class="['goaling-guest',{'color-red':goalingItem.guest.goaling}]">
                <div class="goaling-team">
                    <span class="goaling-team-name">{{goalingItem.guest.name}}</span>
                    <span v-if="goalingItem.guest.goaling">({{getGoalingEventStr(goalingItem.event)}})</span>
                </div>
                <b class="goaling-score">{{goalingItem.guest.score}}</b>
            </div>
        </div>

    </transition>
</template>
<style lang="stylus">
    .goaling-notice-board
        width:15rem
        height:5rem
        background:#f6cb1c
        position:fixed
        bottom:10%
        margin:auto
        left:0
        right:0
        z-index:100
        border-radius:10px
        border:3px solid #d69811
        
        .goaling-league
            padding:.2rem
            font-size:.95rem
        .goaling-time
            font-size:.5rem
        .goaling-host,.goaling-guest
            display:flex
            font-size:.9rem
            justify-content:space-between
            padding:.15rem 1rem
            .goaling-team
                width:80%
                text-align:left
            .goaling-team-name
                display:inline-block
                max-width:70%
                white-space: nowrap
                text-overflow: ellipsis
                overflow: hidden
                vertical-align:top
</style>
<script>
    import utils from '@/utils'
    export default {
        data() {
            return {
                goalingItem: null
            }
        },
        methods: {
            watchAndNotifyGoaling() {
                const hasGoaling = !!this.goalingQueue.length
                this.goalingItem = this.goalingQueue.shift()
                if (this.goalingItem) {
                    utils.notify(`${this.goalingItem.league.fn} - ${this.goalingItem.occurTime}'`, {
                        icon: `/static/images/event-${this.goalingItem.event}-hd.png`,
                        body: (() => {
                            const goalingItem = this.goalingItem
                            let hostStr = `（${goalingItem.host.score}）` + goalingItem.host.name + (goalingItem.host.goaling ? ` --- ${this.getGoalingEventStr(goalingItem.event)}` : '')
                            let guestStr = `（${goalingItem.guest.score}）` + goalingItem.guest.name + (goalingItem.guest.goaling ? ` --- ${this.getGoalingEventStr(goalingItem.event)}` : '')

                            return `${hostStr}\n${guestStr}`
                        })()
                    })
                }
                setTimeout(() => {
                    this.goalingItem = null
                    hasGoaling && this.$store.dispatch('shiftFromGoalingQueue')
                    setTimeout(() => {
                        this.watchAndNotifyGoaling()
                    }, 1000)
                }, 3000)
            },
            getGoalingEventStr(event) {
                switch (event) {
                    case 'g':
                    case 'hg':
                    case 'gg': return '进球'
                    case 'p':
                    case 'hp':
                    case 'gp': return '点球'
                    case 'hw':
                    case 'gw': return '乌龙球'
                    case 'hgc':
                    case 'ggc': return '进球取消'
                    default: return '进球'
                }
            }
        },
        computed: {
            goalingQueue() {
                return [...this.$store.state.goalingQueue]
            }
        },
        mounted() {
            this.watchAndNotifyGoaling()
        }
    }

</script>