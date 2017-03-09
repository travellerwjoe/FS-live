<template>
    <div class="match-time-bar">
        <div class="match-time-bar-bg1"></div>
        <div class="match-time-bar-bg2" :style="{width:time=='全'?'100%':time=='半'?'50%':(time/90*100)>=100?'100%':(time/90*100)+'%'}"></div>
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
        <template v-for="(item,index) in events">
            <span :class="['match-event','icon-small',getEventClasses(item.t)]" :title="item.content" :style="{left:(item.status/90*100)>=100?'100%':(item.status/90*100)+'%'}"></span>
            <!--<span class="match-event match-goal match-host-goal icon-small" :title="item.content" :style="{left:(item.status/90*100)>=100?'100%':(item.status/90*100)+'%'}"></span>-->
        </template>
    </div>
</template>
<style lang="stylus">
    .match-time-bar 
        position: relative;
        height: .7rem;
        width: 100%;
        border: 1px solid #2d353c;
        top:-.15rem
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
            width:0%;
            height: 100%;
            background: #288267;
            background: -moz-linear-gradient(top,#288267,#105541 100%);
            background: -webkit-gradient(linear,0 0,0 100%,from(#288267),to(#105541));
            // border-right: 1px solid #2d7d68;
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
        
        .match-event
            position:absolute
            bottom:-.15rem
            margin-left:-.5rem
        .match-host-goal
            background-image:url('/static/images/icon-hg.png')
        .match-host-goal-cancel
            background-image:url('/static/images/icon-hgc.png')
        .match-host-miss-penalty
            background-image:url('/static/images/icon-hmp.png')
        .match-host-penalty
            background-image:url('/static/images/icon-hp.png')
        .match-guest-goal
            background-image:url('/static/images/icon-gg.png')
        .match-guest-goal-cancel
            background-image:url('/static/images/icon-ggc.png')
        .match-guest-miss-penalty
            background-image:url('/static/images/icon-gmp.png')
        .match-guest-penalty
            background-image:url('/static/images/icon-gp.png')
        .match-event-rc
            background-image:url('/static/images/icon-rc.png')
        .match-host-corner
            background-image:url('/static/images/icon-hc.png')
            bottom:.35rem
        .match-guest-corner
            background-image:url('/static/images/icon-gc.png')
            bottom:.35rem
        
</style>
<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            getEventClasses(type) {
                return {
                    'match-host-goal': type === 'hg',
                    'match-host-goal-cancel': type === 'hgc',
                    'match-host-miss-penalty': type === 'hmp',
                    'match-host-penalty': type === 'hp',
                    'match-guest-goal': type === 'gg',
                    'match-guest-goal-cancel': type === 'ggc',
                    'match-guest-miss-penalty': type === 'gmp',
                    'match-guest-penalty': type === 'mgp',
                    'match-event-rc': type === 'hrc' || type === 'grc',
                    'match-host-corner': type === 'hc',
                    'match-guest-corner': type === 'gc'
                }
            }
        },
        props: ['time', 'events'],
        mounted () {
        }
    }
</script>