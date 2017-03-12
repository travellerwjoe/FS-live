<template>
    <div class="match-league-title">
        <span class="match-icon icon">
            <img class="icon" :src="`/static/images/country/${league.ci}.png`">
        </span>
        <span class="match-type">{{league.fn}}</span>
    </div>
</template>
<style lang="stylus">
    .match-league-title
        background:#fafafa
        text-align:left
        padding:.25rem .5rem
        font-size:.8rem
        
        .match-type
            margin-left:.2rem
</style>
<script>
    export default {
        props: ['league']
    }
</script>