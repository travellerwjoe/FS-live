<template>
    <div class="match-list">
        <match-league v-for="(item,key) in list" :key="key" :league="item"></match-league>
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
        data() {
            return {
                live: []
            }
        },
        components: {
            MatchLeague
        },
        methods: {
            // fomartData() {
            //     if (!this.live.length) return this.live
            //     const liveObj = {}
            //     this.live.forEach((item, index) => {
            //         const leagueID = item.league && item.league.i
            //         if (!leagueID) return
            //         if (!liveObj[leagueID]) liveObj[leagueID] = { league: {}, matches: [] }
            //         liveObj[leagueID].league = item.league
            //         liveObj[leagueID].matches.push(item)
            //     })
            //     return liveObj
            // },
            ...mapActions([
                'fetchLive'
            ])
        },
        computed: {
            list() {
                if (!this.live.length) return this.live
                const liveObj = {}
                this.live.forEach((item, index) => {
                    const leagueID = item.league && item.league.i
                    if (!leagueID) return
                    if (!liveObj[leagueID]) liveObj[leagueID] = { league: {}, matches: [] }
                    liveObj[leagueID].league = item.league
                    liveObj[leagueID].matches.push(item)
                })
                return liveObj
            }
            // ...mapGetters([
            //     'live'
            // ])
        },
        mounted() {
            // this.fetchLive()
            this.socket.on('live', function(res) {
                console.log('xxxxx')
                this.live = res.rs
            }.bind(this))
            this.socket.emit('fetchLive')
        }
    }

</script>