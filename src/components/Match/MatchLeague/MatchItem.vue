<template>
    <div class="match" @click="handleClick">
        <div :class="['match-time','match-col',{'color-main':match.status==='未','color-grey':match.status==='全'}]">{{parseInt(match.status)?match.status+"'":match.status}}</div>
        <div class="match-score match-col" v-if="match.status!=='未'">
            <div class="match-host-score">{{match.rd?match.rd.hg:0}}</div>
            <div class="match-soccer-icon icon-small"></div>
            <div class="match-guest-score">{{match.rd?match.rd.gg:0}}</div>
        </div>
        <div class="match-corner match-col" v-if="match.status!=='未'">
            <div class="match-host-corner">{{match.rd?match.rd.hc:0}}</div>
            <div class="match-corner-icon icon-small"></div>
            <div class="match-guest-corner">{{match.rd?match.rd.gc:0}}</div>
        </div>
        <div class="match-main match-col">
            <div class="match-host">
                <span :class="['match-team',{'match-goaling':match.goaling && match.goaling.host}]">{{match.host.n}}</span>
                <span class="match-yellow-card" v-if="match.rd && parseInt(match.rd.hy)">{{match.rd.hy}}</span>
                <span class="match-red-card" v-if="match.rd && parseInt(match.rd.hr)">{{match.rd.hr}}</span>
                <span class="match-odds color-main" v-if="match.status!=='未' && match.f_ld">即: {{match.f_ld.hrf||'-'}}/{{match.f_ld.hdx||'-'}}/{{match.f_ld.hcb||'-'}}</span>
                <span class="match-start-time color-main" v-if="match.status==='未'">{{match.rtime}}</span>
            </div>
            <!--<match-time-bar :time="match.status" :events="match.events_graph?match.events_graph.events:[]" v-if="match.status!=='未'"></match-time-bar>-->
            <match-time-bar :event="match.events_graph?match.events_graph:{}" v-if="match.status!=='未'"></match-time-bar>
            <div class="match-guest">
                <span :class="['match-team',{'match-goaling':match.goaling && match.goaling.guest}]">{{match.guest.n}}</span>
                <span class="match-yellow-card" v-if="match.rd && parseInt(match.rd.gy)">{{match.rd.gy}}</span>
                <span class="match-red-card" v-if="match.rd && parseInt(match.rd.gr)">{{match.rd.gr}}</span>
                <span class="match-odds" v-if="match.sd">初: {{match.sd.f.hrf||'-'}}/{{match.sd.f.hdx||'-'}}/{{match.sd.f.hcb||'-'}}</span>
            </div>
        </div>
        <div class="match-action match-col">
            <div class="match-fav">
                <span class="match-fav-hollow-icon icon"></span>
            </div>
        </div>
    </div>
</template>
<style lang="stylus">
    .match-col
        display:inline-block
        border-left:1px solid #eee
        border-rigth:1px solid #eee
        &:first-of-type
            border-left:0
        &:last-of-type
            border-left:0
            border-right:0
    .match
        background:#fff
        height:4.5rem
        border-bottom:1px solid #eee
        font-size:.8rem
        display:flex
        .match-time
            flex:2
            margin:auto   
            color:red
        .match-score,.match-corner
            flex:1.2
            background:#fafafa
            font-weight:bold
            display:flex
            flex-direction:column
            
            div
                flex:1
                line-height:1.85rem
            .icon-small
                max-height:1rem
                margin:auto
        .match-corner
            font-weight:normal
        .match-main
            flex:12
            text-align:left
            padding:.3rem
            color:#000
            align-content: space-around
            flex-wrap:wrap
            display:flex
            
            >div
                width:100%  
            .match-yellow-card,.match-red-card
                display:inline-block
                width:.8rem
                height:1rem
                color:#fff
                text-align:center
                vertical-align:super
            .match-yellow-card
                background: #EDBB24;
                background: -moz-linear-gradient(top,#F4DA1A,#EDBB24 100%);
                background: -webkit-gradient(linear,0 0,0 100%,from(#F4DA1A),to(#EDBB24));
            .match-red-card
                background: #C51313;
                background: -moz-linear-gradient(top,#E93333,#C51313 100%);
                background: -webkit-gradient(linear,0 0,0 100%,from(#E93333),to(#C51313));
            .match-odds,.match-start-time
                float:right
                font-size:.6rem
            .match-team
                display: inline-block
                max-width: 120px
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis

        .match-action
            flex:2
            margin:auto
        
        .match-soccer-icon
            background-image:url('/static/images/icon-soccer.png')
            margin:.4rem 0
        .match-corner-icon
            background-image:url('/static/images/icon-corner.png')
            margin:.4rem 0
        .match-fav-icon
            background-image:url('/static/images/icon-fav.png')
        .match-fav-hollow-icon 
            background-image:url('/static/images/icon-fav-hollow.png')

        .match-goaling
            background-color:yellow
            color:red
</style>
<script>
    import MatchTimeBar from '../MatchTimeBar'
    export default {
        components: {
            MatchTimeBar
        },  
        methods: {
            handleClick() {
                this.$emit('click')
            }
        },
        mounted () {
            
        },
        updated () {
        
        },
        props: ['match']
    }
</script>