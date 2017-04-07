<template>
    <div class="match-status-text">
        <span :class="color">{{finalStatus}}</span>
    </div>
</template>
<style lang="stylus">

</style>
<script>
    export default {
        props: {
            status: {
                type: [Number, String],
                required: true
            },
            overtime: {
                type: [Number, String]
            }
        },
        computed: {
            color() {
                if (this.status === '未') return 'color-main'
                if (this.status === '全') return 'color-grey'
                return 'color-red'
            },
            finalStatus() {
               if (parseInt(this.status)) {
                   return this.status + (parseInt(this.overtime) ? '+' + this.overtime : '') + "'"
               }
               return this.status
            }
        }
    }
</script>