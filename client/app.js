import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/simple-grid.css'
import VueProgressBar from 'vue-progressbar'
import options from './progress/progress'


sync(store, router);
window.axios = require('axios');
Vue.use(VueProgressBar, options);
Vue.use(ElementUI)


const app = new Vue({
  router,
  store,
  ...App
});

export {app, router, store}
