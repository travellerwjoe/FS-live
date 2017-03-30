<template>
    <div :class="['nav-tab-link',{'nav-tab-link-active':active}]" @click="tabClick">
        <slot></slot>
    </div>
</template>
<style lang="stylus">
    
</style>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            index: {
                type: Number,
                default: 0
            },
            value: {
                type: [Object, Array],
                default: () => {
                    return {}
                }
            }
            // active: {
            //     type: Boolean,
            //     default: false
            // }
        },
        methods: {
            tabClick() {
                this.$parent.handleTabClick && this.$parent.handleTabClick(this.index, this.value)
                this.$emit('click')
            }
        },
        computed: {
          active() {
            return this.index === this.$parent.activeIndex
          }  
        },
        watch: {
            active(cur, prev) {
                if (cur === prev) return
                if (cur) this.$emit('active')
            }
        },
        mounted () {
            // console.log(this.active)
        }
    }
</script>