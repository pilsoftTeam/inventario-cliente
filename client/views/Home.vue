<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="pull-right">
        <el-menu-item index="1">
          <el-popover ref="loginPopOver" placement="right" :width="width" trigger="click">
            <login></login>
          </el-popover>
          <el-button v-popover:loginPopOver class="loginButton">
            <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
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
    mounted(){
    },
    data(){
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(el){

      },
    },
    computed: {
      width(){
        const width = screen.availWidth;
        if (width >= 500) {
          return 350
        } else {
          return width - (width * 0.1)
        }

      }
    },
    components: {
      Login
    }
  }
</script>
