<template>
    <div class="match-time-bar">
        <div class="match-time-bar-bg1"></div>
        <div class="match-time-bar-bg2" :style="{width:(event.status/event.ml*100)>=100?'100%':(event.status/event.ml*100)+'%'}"></div>
        <!--<div class="match-time-bar-bg2" :style="{width:time=='全'?'100%':time=='半'?'50%':(time/90*100)>=100?'100%':(time/90*100)+'%'}"></div>-->
        <template v-for="n in event.ml/5/2">
            <span class="match-time-line match-time-line-10min"></span>
            <span class="match-time-line match-time-line-5min"></span>
        </template>
        <span class="match-HT-icon icon-small"></span>
        <template v-for="(item,index) in event.events">
            <span :class="['match-event','icon-small',getEventClasses(item.t)]" :title="item.content" :style="{left:(item.status/event.ml*100)>=100?'100%':Math.floor((item.status/event.ml*100))+'%'}"></span>
        </template>
    </div>
</template>
<style lang="stylus">
    .match-time-bar 
        position: relative;
        height: .75rem;
        width: 100%;
        border: 1px solid #2d353c;
        top:-.15rem
        display:flex
        align-items:flex-end

        .match-time-bar-bg1
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background:transparent
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
            transition:all .5s
            // border-right: 1px solid #2d7d68;
        .match-time-line
            // position: absolute;
            // bottom: 0;
            width: 0;
            z-index: 3;
            border-left: 1px solid #2d353c;
            opacity: .7;
            flex:1
            &:first-of-type
                border-left:0
        .match-time-line-5min
            height:.2rem
        .match-time-line-10min
            height:.35rem
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
            bottom:-.18rem
            margin-left:-.5rem
            z-index:100
        .match-host-goal
            background-image:url('/static/images/event-hg.png')
        .match-host-goal-cancel
            background-image:url('/static/images/event-hgc.png')
        .match-host-miss-penalty
            background-image:url('/static/images/event-hmp.png')
        .match-host-penalty
            background-image:url('/static/images/event-hp.png')
        .match-host-wulong
            background-image:url('/static/images/event-hw.png')
        .match-guest-goal
            background-image:url('/static/images/event-gg.png')
        .match-guest-goal-cancel
            background-image:url('/static/images/event-ggc.png')
        .match-guest-miss-penalty
            background-image:url('/static/images/event-gmp.png')
        .match-guest-penalty
            background-image:url('/static/images/event-gp.png')
        .match-guest-wulong
            background-image:url('/static/images/event-gw.png')
        .match-event-rc
            background-image:url('/static/images/event-rc.png')
        .match-host-corner
            background-image:url('/static/images/event-h-corner.png')
            bottom:.35rem
        .match-guest-corner
            background-image:url('/static/images/event-g-corner.png')
            bottom:.35rem
        .match-goal
            background-image:url('/static/images/event-g.png')
        .match-goal-cancel
            background-image:url('/static/images/event-gc.png')
        .match-miss-penalty
            background-image:url('/static/images/event-mp.png')
        .match-penalty
            background-image:url('/static/images/event-p.png')
        
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
                    'match-host-wulong': type === 'hw',
                    'match-guest-goal': type === 'gg',
                    'match-guest-goal-cancel': type === 'ggc',
                    'match-guest-miss-penalty': type === 'gmp',
                    'match-guest-penalty': type === 'gp',
                    'match-guest-wulong': type === 'gw',
                    'match-event-rc': type === 'hrc' || type === 'grc' || type === 'rc',
                    'match-host-corner': type === 'hc',
                    'match-guest-corner': type === 'gc',
                    'match-goal': type === 'g',
                    'match-goal-cancel': type === 'ggc',
                    'match-miss-penalty': type === 'mp',
                    'match-penalty': type === 'p'
                }
            }
        },
        // props: ['time', 'events'],
        props: ['event'],
        mounted () {
        }
    }
</script>