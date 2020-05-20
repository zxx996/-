/* eslint-disable no-unused-vars */
<template lang="pug">
  .container 
    h2 网关输入
    el-form(:model="getawayForm"  ref="getawayForm" )
      el-row 
        el-col(:span='24')
          el-form-item(prop='devCount')
            span(style="display:inline-block;padding:10px;" ) 带点数量
            el-input(type="text" v-model="getawayForm.devCount" auto-complete="off" style="width:450px")
        el-col(:span='24')  
          el-form-item(prop='gwName')
            span(style="display:inline-block;padding:10px;" ) 网关名称
            el-input(type="text" v-model="getawayForm.gwName" auto-complete="off" style="width:450px")
        el-col(:span='24')  
          el-form-item(prop='remark')
            span(style="display:inline-block;padding:10px;" ) 网关备注
            el-input(type="text" v-model="getawayForm.remark" auto-complete="off" style="width:450px")
        el-col(:span='24')  
          el-form-item(prop="type" )
            span(style="display:inline-block;padding:10px;" ) 网关类型 
            el-select(v-model='getawayForm.type' style="width:450px;") 
              el-option(label="经编机" value="经编机")
        el-col(:span='24')  
          el-form-item 
            el-button(@click="resetForm('getawayForm')" size="small") 重置
            el-button(type="primary" size="small"  @click="getawayPost") 提交
   
     
       
        
     
</template>
<style lang="scss" scoped>
span {padding: 10px;}
  .container {
    // width: 100%;
  }
  .el-input-style{
    width:100px;
    display:inline !important;
  }
</style>
<script>
export default {
  data() {
    return {
      getawayForm:{
        creater: '',
        devCount:'', //带点数量
        epId: '', //企业ID编码
        gwName:'', // 网关名称
        remark: '', // 备注
        type: '', // 类型
      }
    }
  },
  methods:{
    getawayPost() {
      this.$http.post('/gateway/add',this.getawayForm).then(res=>{
        // console.log(res);
        alert (res.msg);
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getepId(){
      const epid=JSON.parse(localStorage.getItem('loginMsg')).departmentId-0;
      const creater=JSON.parse(localStorage.getItem('loginMsg')).nickname;
      return this.getawayForm.epId=epid,this.getawayForm.creater=creater;
      
      
    }
  },
  created() {
    this.getepId();
   
  }
    
} 
</script>