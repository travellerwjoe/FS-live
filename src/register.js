import Vue from 'vue'
import { NavTab, Tab } from '@/components/NavTab'
import AppHeader from '@/components/AppHeader'
import { formatMatchTime, formatDateTime } from '@/filters'

Vue.component('AppHeader', AppHeader)
Vue.component('NavTab', NavTab)
Vue.component('Tab', Tab)

Vue.filter('formatMatchTime', formatMatchTime)
Vue.filter('formatDateTime', formatDateTime)