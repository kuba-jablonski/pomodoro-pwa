import Vue from 'vue'
import Router from 'vue-router'
import Timer from '@/views/Timer.vue'
import Settings from '@/views/Settings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'timer',
      component: Timer
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
