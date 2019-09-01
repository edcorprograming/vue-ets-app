import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/filterFamilyRisk',
      name: 'filter-family-risk',

      component: () => import('./views/filterFamilyRisk.vue')
    },
  ]
})
