import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DisplayPage from './views/DisplayPage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/DisplayPage/:id',
      name: 'displayPage',
      component: DisplayPage
    },
  ]
})
