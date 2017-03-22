<template>
    <transition name="fade" mode="out-in" appear>
        <div class="goaling-notice-board" v-if="goalingItem">
            <div class="goaling-league">{{goalingItem.league.fn}}</div>
            <div class="goaling-host">{{goalingItem.host.name}}</div>
            <div class="goaling-guest">{{goalingItem.guest.name}}</div>
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
    import { PUSH_TO_GOALING_QUEUE } from '@/store/mutation-types'
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
                // goalingItem: null
            }
        },
        methods: {
            // notifyGoaling() {
            //     const goalingQueue = this.$store.state.goalingQueue
            //     console.log('pushed')
            //     console.log(this.$store.state.goalingQueue)
            //     const hasGoaling = !!(goalingQueue && goalingQueue.length)
            //     if (hasGoaling) {
            //         this.goalingItem = goalingQueue.shift()
            //         console.log(this.$store.state.goalingQueue)
            //         this.$store.dispatch('shiftFromGoalingQueue')
            //     }
            //     console.log('jjjj')
            //     setTimeout(() => {
            //         this.goalingItem = null
            //         setTimeout(() => {
            //             if (hasGoaling) {
            //                 this.notifyGoaling()
            //             }
            //         }, 1000)
            //     }, 3000)
            // }
            ...mapActions([
                'notifyGoaling'
            ])
        },
        // computed: {
        //     // goalingQueue() {
        //     //     return this.$store.state.goalingQueue.slice(0)
        //     // }
        //     ...mapState([
        //         'goalingItem'
        //     ])
        // },
        computed: mapState([
            'goalingItem'
        ]),
        mounted() {
            // this.notifyGoaling()
            // this.$store.subscribe((mutation, state) => {
            //     console.log(mutation)
            //     if (mutation.type === PUSH_TO_GOALING_QUEUE) {
            //         this.notifyGoaling()
            //     }
            // })
        }
    }
</script>