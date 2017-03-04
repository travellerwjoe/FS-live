<template>
    <div class="match-time-bar">
        <div class="match-time-bar-bg1"></div>
        <div class="match-time-bar-bg2"></div>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-time-line match-time-line-10min"></span>
        <span class="match-time-line match-time-line-5min"></span>
        <span class="match-HT-icon icon-small"></span>
    </div>
</template>
<style lang="stylus">
    .match-time-bar 
        position: relative;
        top: 3px;
        height: .7rem;
        width: 100%;
        border: 1px solid #2d353c;
        margin:-.1rem 0 .4rem 0
        .match-time-bar-bg1
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            // background: #666;
            // background: -moz-linear-gradient(top,#666,#444 100%);
            // background: -webkit-gradient(linear,0 0,0 100%,from(#666),to(#444));
        .match-time-bar-bg2
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width:50%;
            height: 100%;
            background: #288267;
            background: -moz-linear-gradient(top,#288267,#105541 100%);
            background: -webkit-gradient(linear,0 0,0 100%,from(#288267),to(#105541));
            border-right: 1px solid #2d7d68;
        .match-time-line
            position: absolute;
            bottom: 0;
            width: 0;
            z-index: 3;
            border-left: 1px solid #2d353c;
            opacity: .7;
            width:5%
        .match-time-line-5min
            height:.2rem
        .match-time-line-10min
            height:.35rem
        for num in (1..18)
            .match-time-line:nth-of-type({num})
                left:num * (100/18) %
        .match-HT-icon
            background-image:url('/static/images/icon-HT.png')
            position:absolute
            z-index:5
            left:50%
            margin-left:-.35rem
            height:.7rem
            width:.7rem
</style>
<script>
    export default {

    }
</script>