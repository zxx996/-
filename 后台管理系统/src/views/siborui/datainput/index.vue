<template lang="pug">
  .container 
    h2 经编机设定数据输入
    el-form(:model="dataForm" status-icon  ref="dataForm" style="margin-top:20px;")
      el-row
        el-col(:span="22")
          el-form-item
            el-select(v-model='dataForm.devId' style="width:100px;") 
              el-option(:label="item" :value="item" v-for='(item,index) of devId' :key="index")
            span(style="display:inline-block;padding:10px;" ) 号车 
            span(style="display:inline-block; margin-left:px;padding:10px;") 换经
            el-select(v-model='dataForm.axis' style="width:100px;")
              el-option(label="GB1" value='1')
              el-option(label="GB2" value='2')
              el-option(label="GB3" value='3')
              el-option(label="GB4" value='4')
            span(style="display:inline-block; margin-left:px;padding:10px;") 产品名称
            el-select(v-model='dataForm.proId' style="width:100px;")
              el-option(label="产品1" value='1')
              el-option(label="产品2" value='2')
              el-option(label="产品3" value='3')
              el-option(label="产品4" value='4')
      el-form-item
        el-row
          el-col(:span="10")
            span 外周长:
            el-input(type="text" v-model="dataForm.setOutCycle" auto-complete="off" style="width:200px; ")
            span M
          el-col(:span="14")  
            span 内周长:
            el-input(type="text" v-model="dataForm.setInCycle" auto-complete="off" style="width:200px")
            span M
      el-form-item
        el-row
          el-col(:span="10")
            span 设定总圈数:
            el-input(type="text" v-model="dataForm.setCycleNum" auto-complete="off" style="width:170px")
            span 圈
          el-col(:span="14")  
            span 设定已绕圈数:
            el-input(type="text" v-model="dataForm.setTurnedCycleNum" auto-complete="off" style="width:155px")
            span 圈
      el-form-item
        el-row
          el-col(:span="10")
            span 传动比:
            el-input(type="text" v-model="dataForm.driveRatio" auto-complete="off" style="width:200px")
            span M
          el-col(:span="14")  
            span 头纹数:
            el-input(type="text" v-model="dataForm.headNum" auto-complete="off" style="width:200px")
            span M
      el-form-item
        el-row
          el-col(:span="10")
            span 规格:
            el-input(type="text" v-model="dataForm.specs" auto-complete="off" style="width:220px")
            span D
          el-col(:span="14")  
            span 下布幅宽:
            el-input(type="text" v-model="dataForm.width" auto-complete="off" style="width:180px")
            span M
      el-form-item 
        el-button(type="primary" size="small"  @click="dataPost") 提交
</template>
<style lang="scss" scoped>
span {padding: 10px;}
  .container {
    // width: 100%;
    margin-top:20px;

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
      epId:Number,
      devId:[],
      dataForm:{
        axis:'',
        devId:'',
        // driveRadio: '',
        driveRatio:'',
        proId:'',
        headNum: '',
        setCycleNum: '',
        setInCycle: '',
        setOutCycle: '',
        specs: '',
        width: '',
        setTurnedCycleNum: ''
      }
    }
  },
  methods:{
    dataPost() {
      this.$http.post('/warpknit/setParam',this.dataForm).then(res=>{alert(res.msg)})
    },
    getdevId(){
      this.epId=JSON.parse(localStorage.getItem('loginMsg')).departmentId;
      this.$http.get(`/warpknit/realtime/${this.epId}`).then( res=>{
        let newData=res.data;
        for(let i=0;i<newData.length;i++){
          this.devId.push(newData[i].devId);
        }
      })
      
      // this.$http.post
    }
  },
  created(){
    this.getdevId();
  }
}
</script>