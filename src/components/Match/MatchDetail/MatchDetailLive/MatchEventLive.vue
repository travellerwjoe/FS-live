<template>
    <div class="match-event-live">
        <ul class="match-event-live-list" v-if="events.length">
            <li v-for="event in events">
                <Match-Event-icon :type="event.t"></Match-Event-icon>
                {{event.content}}
            </li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .match-event-live
        .match-event-live-list
            li
                text-align:left
                font-size:.7rem
                padding:.5rem 0
                white-space:nowrap
                overflow:hidden
                text-overflow:ellipsis
                &:nth-of-type(2n)
                    background-color:#fff
                &:nth-of-type(2n+1)
                    background-color:#eff3f6
        .icon-small
            margin:0 5px
</style>
<script>
    import { mapGetters } from 'vuex'
    import MatchEventIcon from '@/components/Match/MatchEventIcon'
    export default {
        computed: {
            ...mapGetters([
                'matchDetail'
            ]),
            events() {
                return this.matchDetail.race ? this.matchDetail.race.events : []
            }
        },
        components: {
            MatchEventIcon
        },
        methods: {

        }
    }
</script>