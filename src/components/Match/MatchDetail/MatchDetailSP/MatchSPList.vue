<template>
    <div class="match-sp-bet">
        <table class="table">
            <tbody>
                <tr>
                    <td><i class="icon-small match-time-icon"></i></td>
                    <td><i class="icon-small match-soccer-icon"></i></td>
                    <td>胜</td>
                    <td>平</td>
                    <td>负</td>
                    <td>时间</td>
                </tr>
                <tr v-for="item in sp">
                    <td class="color-red">{{item.passed_sec|formatMatchTime}}'</td>
                    <td>{{item.host_goal}}:{{item.guest_goal}}</td>
                    <td>{{item.host_sp||'-'}}</td>
                    <td>{{item.tie_sp||'-'}}</td>
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
            ])
            // sp() {
            //     return this.matchDetail.sp ? this.matchDetail.sp.bet : []
            // }
        },
        props: ['sp'],
        filters: {
            formatMatchTime,
            formatDateTime
        },
        mounted () {
            console.log(this.sp)
        }
    }
</script>