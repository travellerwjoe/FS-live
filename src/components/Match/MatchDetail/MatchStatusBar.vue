<template>
    <div class="match-status-bar-area">
        <div class="match-status-bar-desc">
            <div class="match-status-l">{{showPercent ? Math.round(statusLPer) + '%': statusL}}</div>
            <div class="match-status-bar-title">{{title}}</div>
            <div class="match-status-r">{{showPercent ? Math.round(statusRPer) + '%': statusR}}</div>
        </div>
        <div class="match-status-bar">
            <div class="match-statusL-bar" :style="{width:statusLPer + '%'}"></div>
            <div class="match-statusR-bar" :style="{width:statusRPer + '%'}"></div>
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
        data() {
            return {
                statusLPer: this.statusL / (this.statusL + this.statusR) * 100,
                statusRPer: this.statusR / (this.statusL + this.statusR) * 100
            }
        },
        props: {
            title: {
                type: String
            },
            statusL: {
                type: Number
            },
            statusR: {
                type: Number
            },
            showPercent: {
                type: Boolean,
                default: false
            }
        }
    }
</script>