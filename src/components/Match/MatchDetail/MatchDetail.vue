<template>
    <div class="match-detail">
        <App-Header title="欧洲冠军杯"></App-Header>
        <Match-Status-Board></Match-Status-Board>
    </div>
</template>
<style lang="stylus">
</style>
<script>
    import AppHeader from '@/components/AppHeader'
    import MatchStatusBoard from './MatchStatusBoard'
    export default{
        components: {
            AppHeader,
            MatchStatusBoard
        },
        mounted () {

        }
    }
</script>
