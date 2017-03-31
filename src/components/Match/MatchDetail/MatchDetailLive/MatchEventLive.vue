<template>
    <div class="match-event-live">
        <ul class="match-event-live-list">
            <li>
                <i class="icon-small match-host-goal"></i>
                天气：雨
            </li>
            <li>
                <i class="icon-small match-host-goal"></i>
                天气：雨
            </li>
            <li>
                <i class="icon-small match-host-goal"></i>
                天气：雨
            </li>
        </ul>
    </div>
</template>
<style lang="stylus">
    .match-event-live
        .match-event-live-list
            li
                text-align:left
                font-size:.7rem
                padding:.5rem 0
                &:nth-of-type(2n)
                    background-color:#fff
                &:nth-of-type(2n+1)
                    background-color:#eff3f6
</style>
<script>
    export default {

    }
</script>