<template>
  <div>

    <h3 style="text-align: center">Inicie sesion</h3>
    <div class="row">
      <div class="col-12-sm">
        <el-form ref="form" :model="form">
          <el-form-item label="Empresa : ">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="Usuario : ">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Contraseña : ">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loading" class="pull-right" @click="onSubmit">
              Ingresar
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </el-button>
          </el-form-item>
          <el-button @click="over"></el-button>

        </el-form>

        <el-alert
          v-if="failedLogin"
          title="Error"
          type="error"
          @close="failedLogin = false"
          description="Las credenciales no son validas. Por favor intente nuevamente"
          show-icon>
        </el-alert>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  import _ from 'lodash'
  import {mapState} from 'vuex'
  import {loginUrl, getUserInfo} from './../../auth/config'
  import {clientId, clientSecret} from './../../../env'
  export default {
    data(){
      return {
        form: {
          email: 'patrick_01_pato@outlook.com',
          password: 'admin'
        },
        loading: false,
        failedLogin: false
      }
    },
    methods: {
      onSubmit() {
        this.loading = true;
        const postData = {
          grant_type: 'password',
          client_id: clientId,
          client_secret: clientSecret,
          username: this.form.email,
          password: this.form.password,
          scope: ''
        };
        axios.post(loginUrl, postData).then(r => {
          if (r.status == 200) {
            this.$store.dispatch('setUserToken', r.data);

          }
        }).catch(e => {
          this.failedLogin = true;
          this.loading = false;
        });
        this.loading = false;
      },

      over(){
        axios.get(getUserInfo + this.form.email).then(r => {
          if (r.status == 200) {
            console.log(r.data);

            //this.$store.dispatch('setUserObject', r.data[0]);
            //this.$router.push({name: 'dashboard'});
          }
        }).catch(e => {
          if (e.response.status == 401) {

          }
        })
      }
    },

    computed: {
      ...mapState({
        tokenStore: state => state.tokenStore,
        userStore: state => state.userStore
      })

    }
  }
</script>
