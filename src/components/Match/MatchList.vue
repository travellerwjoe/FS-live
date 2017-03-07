<template>
    <div class="match-list">
        <match-league v-for="item in live" :key="item.id"></match-league>
    </div>
</template>
<style lang="stylus">
    .match-list 
        background-color:#2F8162 
        min-height:100%
</style>
<script>
    import MatchLeague from './MatchLeague'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        components: {
            MatchLeague
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