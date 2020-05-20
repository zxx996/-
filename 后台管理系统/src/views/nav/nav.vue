<template lang="pug">
  #app
    .collapse(v-model="isCollapse")
      i.el-icon-d-arrow-right(v-if="isCollapse" @click="isShow(),changepdding()" :label="false")
      i.el-icon-d-arrow-left(v-else @click="isShow(),changepdding()" :label="true")
    <el-menu :unique-opened='true' :router="true" background-color="#141529" text-color="white" default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
      <el-submenu index="/siborui/device">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span slot="title">设备管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/siborui/device/realtime">实时数据</el-menu-item>
          <el-menu-item index="/siborui/device/list">设备列表</el-menu-item>
          <el-menu-item index="/siborui/device/history">历史数据</el-menu-item>
          <el-menu-item index="/siborui/device/ljshow">了经显示</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/siborui/produce">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">生产管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/siborui/produce/arrange">排班管理</el-menu-item>
          <el-menu-item index="/siborui/produce/gateway">网关管理</el-menu-item>
        //-   <el-menu-item index="2-3">排班管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/siborui/organization">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">单位组织</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/siborui/organization/role">角色管理</el-menu-item>
          <el-menu-item index="/siborui/organization/user">用户管理</el-menu-item>
           //-   <el-menu-item index="3-1">公司管理</el-menu-item>
        //-   <el-menu-item index="3-2">部门管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/siborui/alternately">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span slot="title">交互中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/siborui/alternately">数据查看</el-menu-item>
          //- <el-menu-item index="3-2">部门管理</el-menu-item>
          //- <el-menu-item index="3-3">角色管理</el-menu-item>
          //- <el-menu-item index="3-4">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/siborui/datainput" >
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title" @click="skip">数据输入</span>
        </template>
        <el-menu-item-group>
          //- <el-menu-item index="/siborui/datainput">公司管理</el-menu-item>
          //- <el-menu-item index="3-2">部门管理</el-menu-item>
          //- <el-menu-item index="3-3">角色管理</el-menu-item>
          //- <el-menu-item index="3-4">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

</template>
<style lang="scss" scoped>
 
  #app{
    background:#141529;
    .collapse{
      text-align: right;
      i{
        font-size:30px;
        padding: 10px;
      }
    }
    .el-menu{
      border-right: solid 0px #fff !important;
      border-right-width: 0px;
    }
  }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      isShow(){
        this.isCollapse==true?this.isCollapse=false:this.isCollapse=true;
      },
      skip(){
        // if (this.$route.params.name!='datainput'){
          this.$router.push({
            name: 'datainput'
          })
        // }
       
      },
      changepdding(){
        var rightmain= document.getElementById("rightmain");
        // console.log(this.isCollapse)
        if(this.isCollapse){
          rightmain.style.paddingLeft =' 64px';
           // eslint-disable-next-line no-undef
          //  rightmain.style.width=calc(100% - '64px');

        }else{
          rightmain.style.paddingLeft ='200px';
          // eslint-disable-next-line no-undef
          // rightmain.style.width=calc(100% - '200px');
        }
        
      }
    }
  }
</script>