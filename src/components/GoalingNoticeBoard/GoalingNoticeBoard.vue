<template>
    <transition name="fade" mode="out-in" appear>
        <div class="goaling-notice-board" v-if="goaling">
            <div class="goaling-league">{{goaling.league.fn}}</div>
            <div class="goaling-host">{{goaling.host.name}}</div>
            <div class="goaling-guest">{{goaling.guest.name}}</div>
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
</style>
<script>
    export default {
        props: ['goaling'],
        data() {
            return {
                currentView: 'GoalingNoticeBoard'
            }
        },
        methods: {
            switchView() {
                setTimeout(() => {
                    // this.currentView = this.currentView ? null : 'GoalingNoticeBoard'
                    // setTimeout(() => {
                    //     this.currentView = 'GoalingNoticeBoard'
                    //     this.switchView()
                    // }, 1000)
                    this.goaling = null
                }, 3000)
            }
        },
        mounted() {
            this.switchView()
            console.log(this.$store)
        }
    }
</script>