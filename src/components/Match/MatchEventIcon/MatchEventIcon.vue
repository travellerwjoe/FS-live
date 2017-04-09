<template>
    <i :class="className" :title="title" :style="style"></i>
</template>
<style lang="stylus">
    
</style>
<script>
    import { getEventClasses } from '@/filters'
    export default {
        props: {
            type: {
                type: String,
                required: true
            },
            style: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            title: {
                type: String,
                default: ''
            },
            class: {
                type: [Array, Object, String],
                default: function() {
                    return []
                }
            }
        },
        methods: {
            getEventClasses(type) {
                return getEventClasses(type)
            }
        },
        computed: {
            className() {
                const className = ['icon-small', getEventClasses(this.type)]
                if (typeof this.class === 'string') {
                    return [this.class].concat(className)
                } else if (typeof this.class === 'object') {
                    if (Array.isArray(this.class)) {
                        return this.class.concat(className)
                    } else {
                        return [this.class].concat(className)
                    }
                }
            }
        }
    }
</script>