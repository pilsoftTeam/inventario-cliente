<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="pull-right">
        <el-menu-item index="1">
          <el-popover ref="loginPopOver" placement="right" width="600" trigger="click">
            <login></login>
          </el-popover>
          <el-button v-popover:loginPopOver>
            A
          </el-button>


        </el-menu-item>
      </div>
    </el-menu>


  </div>
</template>
<style>
  .loginButton {
    margin-top: 10%;
  }
</style>
<script>
  import Login from 'components/login/index'
  export default {
    data(){
      return {
        activeIndex: '1',


      }
    },
    methods: {
      handleSelect(el){
        console.log(el);
      }
    },
    components: {
      Login
    }
  }
</script>
