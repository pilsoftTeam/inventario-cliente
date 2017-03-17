<template>
  <div>
    <h3>Inicie sesion</h3>
    <div class="row">
      <div class="col-12-sm">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Empresa">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Usuario">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Contraseña">
            <el-input v-model="form.name" type="password"></el-input>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" class="pull-right" @click="onSubmit">
              Ingresar
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>


  </div>
</template>
<script>
  export default {
    data(){
      return {
        form: {
          name: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
