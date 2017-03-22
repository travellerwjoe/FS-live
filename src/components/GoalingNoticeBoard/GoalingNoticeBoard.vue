<template>
    <transition name="fade" mode="out-in" appear>
        <div class="goaling-notice-board">
            <div class="goaling-league">
                {{goalingItem.league.fn}}
                <span class="goaling-time color-red">{{goalingItem.occurTime}}'</span>
            </div>
            <div :class="['goaling-host',{'color-red':goalingItem.host.goaling}]">
                <div class="goaling-team">
                    <span class="goaling-team-name">{{goalingItem.host.name}}</span>
                    <span v-if="goalingItem.host.goaling">(进球)</span>
                </div>
                <div class="goaling-score">{{goalingItem.host.score}}</div>
            </div>
            <div :class="['goaling-guest',{'color-red':goalingItem.guest.goaling}]">
                <div class="goaling-team">
                    <span class="goaling-team-name">{{goalingItem.guest.name}}</span>
                    <span v-if="goalingItem.guest.goaling">(进球)</span>
                </div>
                <div class="goaling-score">{{goalingItem.guest.score}}</div>
            </div>
        </div>

    </transition>
</template>
<style lang="stylus">
    .goaling-notice-board
        width:15rem
        height:5rem
        background:orange
        position:fixed
        bottom:10%
        margin:auto
        left:0
        right:0
        z-index:100
        border-radius:10px
        
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
                setTimeout(() => {
                    this.goalingItem = null
                    hasGoaling && this.$store.dispatch('shiftFromGoalingQueue')
                    setTimeout(() => {
                        this.watchAndNotifyGoaling()
                    }, 1000)
                }, 3000)
            }
        },
        computed: {
            goalingQueue () {
                return [...this.$store.state.goalingQueue]
            }
        },
        mounted() {
            this.watchAndNotifyGoaling()
        }
    }
</script>