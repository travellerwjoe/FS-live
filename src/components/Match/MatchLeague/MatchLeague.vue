<template>
    <div class="match-league">
        <match-league-title :league="league.league"></match-league-title>
        <match-item v-for="(item,index) in league.matches" :key="item.id" :match="item"></match-item>
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
        mounted () {

        },
        props: ['league']
    }
</script>
