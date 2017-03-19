import Vue from 'vue'
import Vuex from 'vuex'
import tokenStore from './TokenStore/store'
import userStore from './UserStore/store'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  modules: {
    userStore,
    tokenStore
  },
  strict: debug
});

export default store
