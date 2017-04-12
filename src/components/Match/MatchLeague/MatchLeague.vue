<template>
    <div class="match-league">
        <match-league-title :league="league.league"></match-league-title>
        <match-item v-for="(item,index) in league.matches" :key="item.id" :match="item" @click="link('Match',{match_id:item.id})"></match-item>
    </div>
</template>
<style lang="stylus">
</style>
<script>
    import MatchItem from './MatchItem'
    import MatchLeagueTitle from './MatchLeagueTitle'
    export default{
        components: {
            MatchItem,
            MatchLeagueTitle
        },
        methods: {
            link(url, query) {
                this.$router.push({path: url, query: query})
            }
        },
        mounted () {

        },
        props: ['league']
    }
</script>
