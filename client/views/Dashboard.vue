<template>
  <div>
    <h1>{{message}}</h1>
    <el-button @click="$store.dispatch('LOGOUT')">Logout</el-button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        message: 'lorem'
      }
    }
  }
</script>
