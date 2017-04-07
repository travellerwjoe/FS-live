<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import utils from '@/utils'
  import { mapActions } from 'vuex'
  export default {
    name: 'app',
    methods: {
        ...mapActions([
            'socketConnect',
            'socketDisconnect'
        ]),
        listenVisibility() {
            utils.visibility(() => {
                const event = this.$route.name === 'Match' ? 'fetchMatchDetail' : 'fetchLive'
                const args = this.$route.name === 'Match' ? this.$route.query.match_id : null 
                this.socketConnect({
                    event: event,
                    args: args
                })
            }, () => {
                this.socketDisconnect()
            })
        }
    },
    mounted () {
       this.listenVisibility()
    }
  }

</script>

<style lang='stylus'>
  @import './stylus'
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin: 0;
    height: 100%;
  }
</style>