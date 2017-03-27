<template>
    <div class="match-status-bar-box">
        <Match-Status-Bar title="危险进攻" :statusL="50" :statusR="62"></Match-Status-Bar>
        <Match-Status-Bar title="射正球门" :statusL="6" :statusR="3"></Match-Status-Bar>
        <Match-Status-Bar title="进攻" :statusL="80" :statusR="85"></Match-Status-Bar>
        <Match-Status-Bar title="射偏球门" :statusL="12" :statusR="8"></Match-Status-Bar>
    </div>
</template>
<style lang="stylus">
    .match-status-bar-box
        display:flex
        flex-wrap:wrap
        height:4.5rem
        // margin:0 -.5rem
</style>
<script>
    import MatchStatusBar from './MatchStatusBar'
    export default {
        components: {
            MatchStatusBar
        }
    }
</script>