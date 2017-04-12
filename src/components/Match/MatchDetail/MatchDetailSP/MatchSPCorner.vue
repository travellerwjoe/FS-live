<template>
    <div class="match-sp-bet">
        <table class="table">
            <tbody>
                <tr>
                    <td width="10%"><i class="icon-small match-time-icon"></i></td>
                    <td width="10%"><i class="icon-small match-corner-icon"></i></td>
                    <td width="20%">高于</td>
                    <td width="20%">角球</td>
                    <td width="20%">低于</td>
                    <td width="20%">时间</td>
                </tr>
                <tr v-for="(item,index) in sp">
                    <td class="color-red">{{item.passed_sec|formatMatchTime}}</td>
                    <td :class="getActiveClass(item.host_corner,sp[index+1>=sp.length?sp.length-1:index+1].host_corner)||getActiveClass(item.guest_corner,sp[index+1>=sp.length?sp.length-1:index+1].guest_corner)">{{item.host_corner}}:{{item.guest_corner}}</td>
                    <td>{{item.up_sp||'-'}}</td>
                    <td :class="getActiveClass(item.handicap,sp[index+1>=sp.length?sp.length-1:index+1].handicap)">{{item.handicap||'-'}}</td>
                    <td>{{item.low_sp||'-'}}</td>
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
                return this.matchDetail.sp ? this.matchDetail.sp.corner : []
            }
        },
        methods: {
            getActiveClass(item, nextItem) {
                if (item !== nextItem && item && nextItem) {
                    return ['bg-red', 'color-white']
                }
                return ''
            }  
        },
        filters: {
            formatMatchTime,
            formatDateTime
        }
    }
</script>