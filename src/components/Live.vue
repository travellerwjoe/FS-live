<template>
    <div class="live">
        <Match-List :list="live"></Match-List>
    </div>
</template>
<style lang="stylus">
    .live
        height:100%
</style>
<script>
    import MatchList from './Match'
    import { mapActions, mapGetters } from 'vuex'
    import utils from '@/utils'
    export default {
        props: ['league'],
        components: {
            MatchList
        },
        methods: {
            ...mapActions([
                'fetchLive',
                'socketDisconnect',
                'socketConnect'
            ]),
            listenVisibility() {
                utils.visibility(() => {
                    this.socketConnect()
                }, () => {
                    this.socketDisconnect()
                })  
            }
        },
        computed: {
            ...mapGetters([
                'live'  
            ])
        },
        mounted() {
             this.fetchLive()
             this.listenVisibility()
        }
    }
</script>