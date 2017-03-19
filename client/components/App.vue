<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  html, body {
    font-family: 'Raleway', sans-serif;
  }
</style>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.requiresAuth) {
          if (this.tokenStore.access_token) {
            next();
          } else {
            next({name: 'home'});
            console.log('not logged in')
          }
        }
      });
      this.$router.afterEach((to, from) => {

      });


      window.axios.interceptors.request.use({headers: {'X-Requested-With': 'XMLHttpRequest'}});

    },

    data()
    {
      return {}
    }
    ,
    computed: {
      ...
        mapState({
          tokenStore: state => state.tokenStore
        })
    }
  }
</script>

