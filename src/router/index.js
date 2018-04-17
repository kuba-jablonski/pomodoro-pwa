import Vue from 'vue'
import Router from 'vue-router'
import Application from '@/views/Application.vue'
import Timer from '@/components/Timer.vue'
import Settings from '@/components/Settings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Application,
      children: [
        {
          path: '',
          name: 'application',
          component: Timer
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings
        }
      ]
    }
  ]
})
