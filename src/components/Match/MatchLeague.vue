<template>
    <div class="match-list">
        <match-title></match-title>
        <match-item></match-item>
        <match-item></match-item>
        <match-item></match-item>
    </div>
</template>
<style lang="stylus">
    .match-list
        background-color:#2F8162
        min-height:100%
</style>
<script>
    import MatchItem from './MatchItem'
    import MatchTitle from './MatchTitle'
    export default{
        components: {
            MatchItem,
            MatchTitle
        },
        mounted () {
            
        }
    }
</script>
