<template>
    <header class="app-header">
        <div class="left">
            <i class="icon icon-back"></i>
        </div>
        <div class="app-header-title">{{title}}</div>
        <div class="right">
        </div>
    </header>
</template>
<style lang="stylus">
    @require '../../stylus/vars'
    .app-header
        background-color:$mainColor
        height:3rem
        color: #fff
        position:relative
        display:flex
        align-items:center
        .app-header-title
            position:absolute
            margin:auto
            left:0
            right:0
</style>
<script>
    export default{
        props: {
            title: {
                type: String
            }
        },
        mounted () {

        }
    }
</script>
