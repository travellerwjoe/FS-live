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
    export default {
        props: ['league'],
        components: {
            MatchList
        },
        methods: {
            ...mapActions([
                'fetchLive'
            ])
        },
        computed: {
            ...mapGetters([
                'live'
            ])
        },
        mounted() {
            this.fetchLive()
        }
    }
</script>