<template lang="pug">
  .container 
    h2 排班页面
    el-form(:model="arrangeForm"  ref="arrangeForm" )
      el-row
        el-col(:span="24")
          el-form-item(prop="name" )
            span(style="display:inline-block;padding:10px;" ) 班组名称 
            el-select(v-model='arrangeForm.name' style="width:110px;") 
              el-option(label="一组" value="1")
              el-option(label="二组" value="2")
              el-option(label="三组" value="3")
           
            span(style="display:inline-block; margin-left:px;padding:10px;") 班制
            el-select(v-model='arrangeForm.type' style="width:110px;")
              el-option(label="两班制" value="2")
              el-option(label="三班制" value='3')
            span(style="display:inline-block; margin-left:px;padding:10px;") 换班周期
            el-select(v-model='arrangeForm.days' style="width:100px;")
              el-option(label="5天" value="5")
              el-option(label="6天" value="6")
              el-option(label="7天" value="7")
              el-option(label="8天" value="8")
              el-option(label="9天" value="9")
              el-option(label="10天" value="10")
        el-col(:span='24')  
          el-form-item(prop="morningShiftId")
            span(style="display:inline-block;padding:10px;" ) 早班人员 
            el-select(v-model='arrangeForm.morningShiftId' style="width:190px;" ) 
              el-option(label="张三" value="111")
              el-option(label="李四" value="222")
              el-option(label="王五" value="333")
            span 早班开始时间
            el-select(v-model='arrangeForm.startTime' style="width:155px;" ) 
              el-option(label="1点" value="1")
              el-option(label="2点" value="2")
              el-option(label="3点" value="3")
              el-option(label="4点" value="4")
              el-option(label="5点" value="5")
              el-option(label="6点" value="6")
              el-option(label="7点" value="7")
              el-option(label="8点" value="8")
              el-option(label="9点" value="9")
              el-option(label="10点" value="10")
              el-option(label="11点" value="11")
              el-option(label="12点" value="12")
        el-col(:span='24')  
          el-form-item(prop="middleShiftId")
            span(style="display:inline-block;padding:10px;" ) 中班人员 
            el-select(v-model='arrangeForm.middleShiftId' style="width:450px;") 
              el-option(label="张三" value="111")
              el-option(label="李四" value="222")
              el-option(label="王五" value="333")
        el-col(:span='24')  
          el-form-item(prop="eveningShiftId")
            span(style="display:inline-block;padding:10px;" ) 晚班人员 
            el-select(v-model='arrangeForm.eveningShiftId' style="width:450px;") 
              el-option(label="张三" value="111")
              el-option(label="李四" value="222")
              el-option(label="王五" value="333")
        el-col(:span='24')  
          el-form-item(prop="leaderId")
            span(style="display:inline-block;padding:10px;" ) 负责人员
            el-select(v-model='arrangeForm.leaderId' style="width:450px;") 
              el-option(label="张三" value="111")
              el-option(label="李四" value="222")
              el-option(label="王五" value="333")
        //- el-col(:span='24')
        //-   el-form-item
        //-     span 生效时间
        //-     el-input(type="text" v-model="arrangeForm.validTime" auto-complete="off" style="width:450px")
     
      el-form-item 
        el-button(@click="resetForm('arrangeForm')" size="small") 重置
        el-button(type="primary" size="small"  @click="arrangePost") 提交
       
        
     
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
      realtime:'',
      arrangeForm:{
        days:'', //换班周期(5~10天)
        epId: '', //企业ID编码
        eveningShiftId:'', // 晚班人员ID
        leaderId: '', // 负责人ID
        middleShiftId: '', // 中班人员ID
        morningShiftId: '', // 早班人员ID
        name: '', // 班组名称
        startTime: '', // 早班开始时间(不超过12点)
        type: '', // 2:两班制 3:三班制
        validTime: '' // 生效时间
      }
    }
  },
  methods:{
    arrangePost() {
      this.$http.post('/shift/add',this.arrangeForm).then(res=>{
        // console.log(res);
        alert (res.msg);
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getepId(){
      const epid=JSON.parse(localStorage.getItem('loginMsg')).departmentId;
      return this.arrangeForm.epId=epid;
    }
  },
  created() {
    this.getepId();
   
  }
    
} 
</script>