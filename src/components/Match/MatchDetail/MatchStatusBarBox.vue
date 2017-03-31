<template>
    <div class="match-status-bar-box">
        <div class="match-status-bar-row">
            <Match-Status-Bar title="危险进攻" :statusL="data.host_danger" :statusR="data.guest_danger"></Match-Status-Bar>
            <Match-Status-Bar title="射正球门" :statusL="data.host_shotongoal" :statusR="data.guest_shotongoal"></Match-Status-Bar>
        </div>
        <div class="match-status-bar-row">
            <Match-Status-Bar title="进攻" :statusL="data.host_attack" :statusR="data.guest_attack"></Match-Status-Bar>
            <Match-Status-Bar title="射偏球门" :statusL="data.host_shotoffgoal" :statusR="data.guest_shotoffgoal"></Match-Status-Bar>
        </div>
        <div class="match-status-bar-row">
            <Match-Status-Bar title="球权" :statusL="data.host_qiuquan" :statusR="data.guest_qiuquan" :show-percent="true"></Match-Status-Bar>
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
        props: ['data'],
        components: {
            MatchStatusBar
        }
    }
</script>