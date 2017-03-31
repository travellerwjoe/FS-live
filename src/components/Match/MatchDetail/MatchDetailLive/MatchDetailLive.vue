<template>
    <div class="match-detail-live">
        <keep-alive>
            <component :is="view"></component>
        </keep-alive>
        <!--<MatchEventLive></MatchEventLive>-->
    </div>
</template>
<style lang="stylus">
    
</style>
<script>
    import MatchEventLive from './MatchEventLive'
    export default {
        data() {
            return {
                view: 'MatchEventLive'
            }
        },
        components: {
            MatchEventLive
        },
        methods: {
            
        },
        computed: {
            
        },
        mounted() {
            
        }
    }
</script>