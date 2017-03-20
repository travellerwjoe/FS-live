import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Live from '@/components/Live'
import Test from '@/components/Test'

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
    },
    {
      path: '/Test',
      name: 'test',
      component: Test
    }
  ]
})
