<template>
    <div class="match-status-board">
        <div class="match-status-board-top">
            <div class="match-host">
                <div class="match-team">罗马</div>
                <div class="match-team-info">
                    <span class="match-yellow-card">1</span>
                    <span class="match-red-card">1</span>
                    <span class="match-corner">1</span>
                    <span class="match-odds color-grey">初：-0.25/3/10</span>
                </div>
            </div>
            <div class="match-score-area">
                <div class="match-score color-orange"> 2-0 </div>
                <div class="match-time color-red">86'</div>
            </div>
            <div class="match-guest">
                <div class="match-team">尤文图斯</div>
                <div class="match-team-info">
                    <span class="match-yellow-card">1</span>
                    <span class="match-red-card">1</span>
                    <span class="match-corner">2</span>
                    <span class="match-odds color-main">即：0/2.5/9</span>
                </div>
            </div>
        </div>
        <div class="match-status-board-bottom">
            <Match-Time-Bar></Match-Time-Bar>
            <Match-Status-Bar-Box></Match-Status-Bar-Box>
        </div>
    </div>
</template>
<style lang="stylus" scoped>   
@require '../../../stylus/vars'
    .match-status-board
        background:$mainBgBlackColor
        height:12rem
        color:#fff
        font-size:.7rem
        padding:.5rem
        .match-status-board-top
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
                    width:120px
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
                div
                    padding:.3rem 0
                    text-align:center
                    &:first-of-type
                        border-bottom:1px solid #666
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
        .match-status-board-bottom
            margin-top:.5rem
</style>
<script>
    import MatchTimeBar from '../MatchTimeBar'
    import MatchStatusBarBox from './MatchStatusBarBox'
    export default{
        components: {
            MatchTimeBar,
            MatchStatusBarBox
        },
        mounted () {

        }
    }
</script>
