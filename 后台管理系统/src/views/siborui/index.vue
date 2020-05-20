<template lang="pug">
  .app
    .header
      .logo
      .loginout
        el-dropdown()  
          el-button(type="text" style="padding:10px 20px") <i class="el-icon-s-custom"></i> {{this.nickname}}
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item
              el-button(type='text' @click="loginout") 退出登录   
    .topnav
      .navlist 生产管理
      .navlist 厂家大屏
    .main  
      .leftnav(style="z-index:999;")
        Nav
      .rightmain#rightmain
        router-view(style='height: 100%;')

</template>
<script>
import Nav from '../nav/nav'

export default {
  components:{
    Nav,
  },
  data(){
    return {
      nickname:''
    }  
  },
  methods:{
    getlogindata(){
      this.nickname=JSON.parse(localStorage.getItem('loginMsg')).nickname;
      return this.nickname;
    },
    loginout(){
      this.$http.post('/logout');
      localStorage.clear();
      this.$router.push({
        name: 'login'
      })
    }
  },
  mounted(){
    
  },
  created(){
    this.getlogindata();
  }
}
</script>
<style lang="scss" scoped>
.flex:after{
  content: '';
  display: table;
  clear: both;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.app{
  height: 100%;
  .header{
    z-index: 999;
    padding:0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:white;
    position: fixed;
    top:0;
    left:0;
    right:0;
    height:50px;
    
    .logo{
      width: 140px;
      height: 40px;
      background: url('~@/assets/images/logo.png') no-repeat center 100%;
      background-size: 90%;
    }
  }
  .topnav{
    z-index: 999;
    position: fixed;
    top:50px;
    background:#24284B;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    line-height: 40px;
    .navlist{
      font-size: 18px;
      padding: 0 15px;
      color: white;
    }
  }
  .main{
    display: flex;
    height: 100%;
    
  
    .leftnav{
      position: fixed;
      top:90px;
      left:0;
      bottom: 0;
    }
    .rightmain{
      background:#2F3A8A;
      color:white;
      width:100%;
      padding-left:200px;
      padding-top:90px;
      transition: padding 300ms ease-in-out;
      overflow-x:hidden;
    

    }
  }
}

</style>