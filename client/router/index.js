import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import DashBoard from '../views/Dashboard'
Vue.use(Router);
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      meta: {requiresAuth: true}
    }
  ]
})


