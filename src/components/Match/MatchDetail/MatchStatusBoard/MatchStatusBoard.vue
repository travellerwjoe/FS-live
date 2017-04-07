<template>
    <div class="match-status-board">
        <div class="match-status-board-top">
            <slot name="top"></slot>
        </div>
        <div class="match-status-board-bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
<style lang="stylus" scoped>   
@require '../../../../stylus/vars'
    .match-status-board
        background:$mainBgBlackColor
        // height:12rem
        color:#fff
        font-size:.7rem
        padding:.5rem
        .match-status-board-bottom
            margin-top:.5rem
</style>
<script>
    export default{
        components: {

        },
        props: ['data'],
        mounted () {

        }
    }
</script>
