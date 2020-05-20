<template lang="pug">
  .login-page
    .login-box
      .login-box-left
        el-form(:model="loginForm" status-icon :rules="rules" ref="loginForm")
          el-form-item(prop="username")
            el-input(type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入账号") 
          el-form-item(prop="password" )
            el-input(type="password" v-model="loginForm.password" auto-complete="off")  
          el-form-item(prop="remember")
            el-checkbox-group(v-model="loginForm.remember")
              el-checkbox(label="记住密码" name="autoLogin")
          el-form-item
            el-button(type="primary" size="small" :disabled="submitDisabled" @click="login") 登录
      .login-box-right
        .error(v-if="errorShow") {{errorDec}}


</template>
<script>
export default {
  name:'login',
  data() {
    return{
      errorDec: "账号或密码错误",
      errorShow: "false",
      loginForm:{
        username: '',
        password: '',
        remember: true
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
    }
  },
  computed: {
    submitDisabled () {
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        return true
      } else {
        return false
      }
    }
  },
  methods:{
    login() {
      this.$http.login('/login',this.loginForm).then( res => {
        if (res.success){
          this.$router.push({
            name: 'siborui.device.realtime'
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/var.scss';
  .login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('~@/assets/images/platform-bg.jpg') no-repeat center center / cover;
    width: 100%;
    min-height: 100%;
  }
</style>