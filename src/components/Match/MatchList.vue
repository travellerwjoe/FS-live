<template>
    <div class="match-list">
        <match-league></match-league>
        <match-league></match-league>
    </div>
</template>
<style lang="stylus">
    .match-list
        background-color:#2F8162
        min-height:100%
</style>
<script>
    import MatchLeague from './MatchLeague'
    export default{
        components: {
            MatchLeague
        },
        mounted () {
            
        }
    }
</script>
