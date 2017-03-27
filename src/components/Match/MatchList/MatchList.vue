<template>
    <div class="match-list">
        <match-league v-for="(item,key) in list" :key="key" :league="item"></match-league>
    </div>
</template>
<style lang="stylus">
@require '../../../stylus/vars'
.match-list 
    background-color:$mainColor
    min-height:100%
</style>
<script>
    import MatchLeague from '../MatchLeague'
    export default {
        components: {
            MatchLeague
        },
        props: ['list']
    }

</script>