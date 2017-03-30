<template>
    <div class="match-status-bar-box">
        <div class="match-status-bar-row">
            <Match-Status-Bar title="危险进攻" :statusL="50" :statusR="62"></Match-Status-Bar>
            <Match-Status-Bar title="射正球门" :statusL="6" :statusR="3"></Match-Status-Bar>
        </div>
        <div class="match-status-bar-row">
            <Match-Status-Bar title="进攻" :statusL="80" :statusR="85"></Match-Status-Bar>
            <Match-Status-Bar title="射偏球门" :statusL="12" :statusR="8"></Match-Status-Bar>
        </div>
        <div class="match-status-bar-row">
            <Match-Status-Bar title="球权" :statusL="80" :statusR="85" :show-percent="true"></Match-Status-Bar>
        </div>
    </div>
</template>
<style lang="stylus">
.match-status-bar-box
    // height:6rem
    margin-top:.4rem
    .match-status-bar-row
        display:flex
        flex-wrap:wrap
        height:2.5rem
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