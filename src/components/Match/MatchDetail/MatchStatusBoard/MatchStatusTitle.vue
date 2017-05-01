<template>
    <div class="match-status-title">
        <div class="match-host">
            <div class="match-team">{{data.host.name}} <span class="match-team-rank" v-if="data.host_pm">[{{data.host_pm}}]</span></div>
            <div class="match-team-info">
                <span class="match-yellow-card" v-if="data.race_data.host_yellowcard > 0">{{data.race_data.host_yellowcard}}</span>
                <span class="match-red-card" v-if="data.race_data.host_redcard > 0">{{data.race_data.host_redcard}}</span>
                <span class="match-corner">{{data.race_data.host_corner}}</span>
                <span class="match-odds color-grey">初:{{data.race_start.rangfen_handicap | formatHandicap}}/{{data.race_start.daxiao_handicap | formatHandicap}}/{{data.race_start.corner_handicap | formatHandicap}}</span>
            </div>
        </div>
        <div class="match-score-area">
            <div class="match-score color-orange"> {{data.race_data.host_goal}}-{{data.race_data.guest_goal}} </div>
            <!--<div class="match-time color-red">{{data.status}}'</div>-->
            <Match-Status-Text :status="data.status" :overtime="data.ss_ta"></Match-Status-Text>
        </div>
        <div class="match-guest">
            <div class="match-team"><span class="match-team-rank" v-if="data.guest_pm">[{{data.guest_pm}}]</span> {{data.guest.name}}</div>
            <div class="match-team-info">
                <span class="match-yellow-card" v-if="data.race_data.guest_yellowcard > 0">{{data.race_data.guest_yellowcard}}</span>
                <span class="match-red-card" v-if="data.race_data.guest_redcard > 0">{{data.race_data.guest_redcard}}</span>
                <span class="match-corner">{{data.race_data.guest_corner}}</span>
                <span class="match-odds color-main" v-if="data.status !=='全'">即：{{data.race_running.rangfen_handicap | formatHandicap}}/{{data.race_running.daxiao_handicap | formatHandicap}}/{{data.race_running.corner_handicap | formatHandicap}}</span>
                <span class="match-start-time" :class="{'color-main':data.status === '未','color-grey':data.status === '全'}" v-if="data.status === '未' || data.status === '全'">{{data.race_time*1000 | formatDateTime('yyyy-MM-dd hh:mm',true)}}</span>
            </div>
        </div>
    </div>
</template>
<style lang="stylus">
.match-status-title
    display:flex
    justify-content:space-between
    padding-bottom:.3rem
    border-bottom:1px solid #666
    .match-host,.match-guest
        display:flex
        flex-direction:column
        flex:3
        .match-team-info
            display:flex
            span
                margin:.2rem
        .match-team
            padding-bottom:.3rem
            text-align:left
            width:130px
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
    .match-guest
        .match-team-info
            flex-direction:row-reverse
        .match-team
            text-align:right
            align-self:flex-end
    .match-score-area
        flex:1
        background:rgba(255,255,255,0.15)
        border-bottom-left-radius:3px
        border-bottom-right-radius:3px
        position:relative
        top:-.5rem
        .match-score
            border-bottom:1px solid #666
        div
            padding:.3rem 0
            text-align:center
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
</style>
<script>
    import MatchStatusText from '../../MatchStatusText'
    import {formatHandicap, formatDateTime} from '@/filters'
    export default {
        components: {
            MatchStatusText
        },
        filters: {
            formatHandicap,
            formatDateTime
        },
        props: ['data']
    }
</script>