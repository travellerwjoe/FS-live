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
            <!--<span :class="['match-event','icon-small',getEventClasses(item.t)]" :title="item.content" :style="{left:(item.status/event.ml*100)>=100?'100%':Math.floor((item.status/event.ml*100))+'%'}"></span>-->
            <Match-Event-Icon class="match-event" :title="item.content" :type="item.t" :style="{left:(item.status/event.ml*100)>=100?'100%':Math.floor((item.status/event.ml*100))+'%'}"></Match-Event-Icon>
        </template>
    </div>
</template>
<style lang="stylus">
@require '../../../stylus/vars'
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
            // background: -moz-linear-gradient(top,#288267,#105541 100%);
            background: -moz-linear-gradient(top,$mainColor,#105541 100%);
            background: -webkit-gradient(linear,0 0,0 100%,from($mainColor),to(#105541));
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
        .match-host-corner
            bottom:.35rem
        .match-guest-corner
            bottom:.35rem
</style>
<script>
    import MatchEventIcon from '@/components/Match/MatchEventIcon'
    export default {
        data() {
            return {
                
            }
        },
        components: {
          MatchEventIcon  
        },
        methods: {
        },
        // props: ['time', 'events'],
        props: {
            event: {
                type: Object,
                default: function() { 
                    return {
                        status: null,
                        events: [],
                        ml: 90
                    }
                }
            }
        },
        mounted () {
        }
    }
</script>