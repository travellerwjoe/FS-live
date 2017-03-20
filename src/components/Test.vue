<style lang="stylus">
    .match-list
        background-color:#2F8162
        min-height:100%
</style>
<script>
    import Vue from 'vue'
     export default {
        data: function() {
            return {
                allComponents: [],
                componentName: ''
            }
        },
        components: {
                // 注册所有组件
                // component1,
                // component2
        },
        methods: {
            add: function() {
                this.allComponents.push(this.componentName)
                console.log(this.allComponents)
                // 重置输入框
                this.componentName = ''
            }
        },
         render: function(h) { // h 为 createElement 函数，接受三个参数
            // tag 
            // data
            // children 具体看文档吧
            return h(
                'div',   // tag name 标签名称
                {
                    style: {
                    color: 'red'
                    }
                },
                Array.apply(null, Array(this.count)).map((item, index) => {
                    return h('div', index)
                })
            )
        }, 
        /* render: function(h) { // h 为 createElement 函数，接受三个参数
            // tag 
            // data
            // children 具体看文档吧
            return h('div', '123')
        }, */
       /* props: {
            level: {
            type: Number,
            required: true
            }
        }, */
        props: ['count'],
        mounted() {
            console.log(this.count)
        }
    }
</script>
