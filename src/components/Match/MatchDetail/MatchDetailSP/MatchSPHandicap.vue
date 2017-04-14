<template>
    <div class="match-sp-bet">
        <table class="table">
            <tbody>
                <tr>
                    <td width="10%"><i class="icon-small match-time-icon"></i></td>
                    <td width="10%"><i class="icon-small match-soccer-icon"></i></td>
                    <td width="20%">主队</td>
                    <td width="20%">让球</td>
                    <td width="20%">客队</td>
                    <td width="20%">时间</td>
                </tr>
                <tr v-for="(item,index) in sp">
                    <td class="color-red">{{item.passed_sec|formatMatchTime}}</td>
                    <td :class="$parent.getActiveClass(item.host_goal,sp[index+1>=sp.length?sp.length-1:index+1].host_goal)||$parent.getActiveClass(item.guest_goal,sp[index+1>=sp.length?sp.length-1:index+1].guest_goal)">{{item.host_goal}}:{{item.guest_goal}}</td>
                    <td :class="$parent.getTrendClass(item,sp[index+1>=sp.length?sp.length-1:index+1])">{{item.host_sp||'-'}}</td>
                    <td :class="$parent.getActiveClass(item.handicap,sp[index+1>=sp.length?sp.length-1:index+1].handicap)">{{item.handicap||'-'}}</td>
                    <td>{{item.guest_sp||'-'}}</td>
                    <td>{{item.add_time*1000|formatDateTime('hh:mm',true)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="stylus">
</style>
<script>
    import { mapGetters } from 'vuex'
    import { formatMatchTime, formatDateTime } from '@/filters'
    export default {
        computed: {
            ...mapGetters([
                'matchDetail'
            ]),
            sp() {
                return this.matchDetail.sp ? this.matchDetail.sp.rangfen : []
            }
        },
        filters: {
            formatMatchTime,
            formatDateTime
        }
    }
</script>