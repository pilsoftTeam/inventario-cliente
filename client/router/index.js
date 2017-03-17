import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Test from '../views/test'
Vue.use(Router);
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]


})


