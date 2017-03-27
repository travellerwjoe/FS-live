<template>
    <div class="match-status-bar-area">
        <div class="match-status-bar-desc">
            <div class="match-status-l">{{statusL}}</div>
            <div class="match-status-bar-title">{{title}}</div>
            <div class="match-status-r">{{statusR}}</div>
        </div>
        <div class="match-status-bar">
            <div class="match-statusL-bar" :style="{width:statusL/(statusL+statusR)*100 + '%'}"></div>
            <div class="match-statusR-bar" :style="{width:statusR/(statusL+statusR)*100 + '%'}"></div>
        </div>
    </div>
</template>
<style lang="stylus">
@require '../../../stylus/vars'
    .match-status-bar-area
        width:50%
        padding:0 .3rem
        // margin-bottom:.7rem
        flex:1 0 45%
        .match-status-bar-desc
            display:flex
            justify-content:space-between
            margin-bottom:.3rem
        .match-status-bar
            width:100%
            background:black
            height:.3rem
            display:flex
            div
                width:100%
                height:100%
            .match-statusL-bar
                background:$orangeColor
            .match-statusR-bar
                background:$mainColor

</style>
<script>
    export default {
        props: {
            title: {
                type: String
            },
            statusL: {
                type: Number
            },
            statusR: {
                type: Number
            }
        }
    }
</script>