<template>
    <div class="match-lineup">
        <ul class="match-lineup-list list">
            <li>首发阵容</li>
            <li v-for="n in lineups.host.length">
                <div class="match-lineup-host">
                    <MatchEventIcon v-for="(event,index) in lineups.host[n-1].events" :type="event.t" :key="index"></MatchEventIcon>
                    {{lineups.host[n-1].name}}
                </div>
                <div class="match-lineup-guest">
                    {{lineups.guest[n-1].name}}
                    <MatchEventIcon v-for="(event,index) in lineups.guest[n-1].events" :type="event.t" :key="index"></MatchEventIcon>
                </div>
            </li>
        </ul>
        <ul class="match-lineup-bench-list list">
            <li>替补阵容</li>
            <li v-for="n in Math.max(bench.host.length,bench.guest.length)">
                <div class="match-lineup-host">
                    <template v-if="bench.host[n-1]">
                        <MatchEventIcon v-for="(event,index) in bench.host[n-1].events" :type="event.t" :key="index"></MatchEventIcon>
                        {{bench.host[n-1].name}}
                    </template>
                </div>
                <div class="match-lineup-guest">
                    <template v-if="bench.guest[n-1]">
                        {{bench.guest[n-1].name}}
                        <MatchEventIcon v-for="(event,index) in bench.guest[n-1].events" :type="event.t" :key="index"></MatchEventIcon>
                    </template>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .match-lineup
        .list
            li
                display:flex
                padding:0   
                &:first-of-type
                    padding:.5rem    
                div
                    flex:1
                    padding:.3rem 
                .match-lineup-host
                    text-align:right
                    border-right:1px solid #eff3f6
                    // margin:-.5rem 0
</style>
<script>
    import { mapGetters } from 'vuex'
    import MatchEventIcon from '@/components/Match/MatchEventIcon'
    export default {
        components: {
            MatchEventIcon
        },
        computed: {
            ...mapGetters([
                'matchDetail'
            ]),
            lineups() {
                let host = []
                let guest = []
                if (this.matchDetail.lineups.length) {
                   host = this.matchDetail.lineups.host.slice(0, 11)
                   guest = this.matchDetail.lineups.guest.slice(0, 11)
                }
                return {
                    host: host,
                    guest: guest
                }
            },
            bench() {
                let host = []
                let guest = []
                if (this.matchDetail.lineups.length) {
                   host = this.matchDetail.lineups.host.slice(11)
                   guest = this.matchDetail.lineups.guest.slice(11)
                }
                return {
                    host: host,
                    guest: guest
                }
            }
        },
        mounted () {

        }
    }
</script>