import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Live from '@/components/Live'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Live',
      name: 'Live',
      component: Live
    }
  ]
})
