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
                transition:width .3s
            .match-statusR-bar
                background:$mainColor
                transition:width .3s

</style>
<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            title: {
                type: String
            },
            statusL: {
                type: [Number, String]
            },
            statusR: {
                type: [Number, String]
            },
            showPercent: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            statusLPer() {
                const statusL = parseInt(this.statusL)
                const statusR = parseInt(this.statusR)
                return statusL / (statusL + statusR) * 100
            },
            statusRPer() {
                const statusL = parseInt(this.statusL)
                const statusR = parseInt(this.statusR)
                return statusR / (statusL + statusR) * 100
            }
        }
    }
</script>