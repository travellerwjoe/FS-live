import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MatchList from '@/components/Match'

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
      component: MatchList
    }
  ]
})
