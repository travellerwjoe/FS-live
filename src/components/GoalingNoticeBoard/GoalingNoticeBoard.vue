<template>
    <div class="goaling-notice-board">
        <!--<div class="goaling-league">{{goaling.league.fn}}</div>
        <div class="goaling-host">{{goaling.host.name}}</div>
        <div class="goaling-guest">{{goaling.guest.name}}</div>-->
    </div>
</template>
<style lang="stylus">
    .goaling-notice-board
        width:15rem
        height:5rem
        background:orange
        position:fixed
        bottom:10%
        margin:auto
        left:0
        right:0
        z-index:100
        border-radius:10px
</style>
<script>
    export default {
        props: ['goaling']
    }
</script>