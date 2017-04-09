<template>
    <div class="nav-tab" :class="{'nav-tab-theme2':theme === 2}">
        <slot></slot>
        <div class="nav-tab-link-highlight" ref="highlight"></div>
    </div>
</template>
<style lang="stylus">
@require '../../stylus/vars'
.nav-tab
    display:flex
    justify-content:space-around
    background:#eff3f6
    position:relative
    &.nav-tab-theme2
        background:#fff
        border:1px solid $mainColor
        border-radius:5px
        margin:.3rem
        .nav-tab-link
            color:$mainColor
            &.nav-tab-link-active
                color:#fff
                // background:$mainColor
        .nav-tab-link-highlight
            height:100%
    .nav-tab-link
        flex:1
        padding:.4rem 0
        color:#999
        font-size:.8rem
        &.nav-tab-link-active
            color:$mainColor
            z-index:2
    .nav-tab-link-highlight
        height:1px
        background:$mainColor
        position:absolute
        left:0
        bottom:0
        transition:transform .3s
</style>
<script>
    export default {
        data() {
            return {
                activeIndex: this.index,
                activeValue: this.value
            }
        },
        props: {
            index: {
                type: Number,
                default: 0
            },
            value: {
                // type: [Object, Array, String],
                default: () => {
                    return {}
                }
            },
            theme: {
                type: Number,
                default: 1
            }
        },
        methods: {
            handleTabClick(index, value) {
                if (index === this.activeIndex) return
                this.activeIndex = index
                this.activeValue = value
                this.$emit('change', this.activeIndex, this.activeValue)
            },
            updateHighlightStyle() { 
                const el = this.$refs.highlight
                const len = this.$children.length
                el.style.width = len > 0 ? (100 / len).toFixed(4) + '%' : '100%'
                el.style.transform = `translate3d(${this.activeIndex * 100}%, 0, 0)`
            }
        },
        computed: {
            
        },
        watch: {
            activeIndex: 'updateHighlightStyle'
        },
        mounted () {
            this.updateHighlightStyle()  
        }
    }
</script>