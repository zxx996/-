<template lang="pug">
  .ljshow
    .header-box
      el-row
        el-col(:span='24')
          el-radio-group(v-model='radio1' style="border-radius:20px")
            el-radio-button(label="设备显示" style="margin-right:100px;" )
            el-radio-button(label="经轴显示")
    .main-box(v-if="radio1=='设备显示'")
      .main-box-nav(style="text-align:left; margin:10px 0 0 3px;")
        el-radio-group(v-model="radio2" border="true" size="small")
          el-radio-button(label="时间")
          el-radio-button(label="米数")
      .main-box-content
        table.table-container
          tr
            th(v-for="(val,key,index) of th" :key='key' ) {{val}}
          tr(v-for='(val,key,index) of machineData' :key='key') 
            td {{key+1}}
            td {{val.devId}}
            td {{val.t1}}
            td {{val.t2}}
            td {{val.t3}}
            td {{val.t4}}
    .err(v-else style="margin-top: 30px") 
      h1 页面正在抓紧建设中......
</template>
<script>
export default {
  data() {
    return {
      radio1: '设备显示',
      radio2: '时间',
      th:{1:'序号',2:'设备号',3:'经轴1',4:'经轴2',5:'经轴3',6:'经轴4'},
      machineData:'',
      queryData:{
        departmentId: '',
        type: 0
      }
    }
  },
  methods:{
    getepId(){
      const departmentId=JSON.parse(localStorage.getItem('loginMsg')).departmentId-0;
      return this.queryData.departmentId=departmentId;
    },
    getdata(){
      this.$http.get(`/warpknit/remainTime/${this.queryData.departmentId}/${this.queryData.type}`).then(res=>{
        // console.log(res)
        // console.log(res.data);
        return this.machineData = res.data;
       
      })
    }
  },
  created(){
    this.getepId();
    this.getdata()


  }
}
</script>
<style lang="scss" scoped>
  .ljshow{
    min-height: 300px;
    padding: 20px;
    background: #01479D;
    margin: 20px;
    border-radius: 5px;
    .header-box{}
    .main-box{
      .main-box-content{
       
        .table-container{
          // margin : 0 auto ;
          margin-top:10px;
          font-size: 14px;
          border-collapse: 3;
          width: 100%;
          text-align: center;
          line-height: 25px;
          border-radius: 5px;
          margin-left: 1px;
          
          tr{
            background: #409EFF;
            
            th{
              padding: 3px 10px;
              border: 0px solid #01479D;
              &:nth-child(1){
                width: 30px;
                border-top-left-radius: 5px;
              }
              &:nth-child(6){
                border-top-right-radius: 5px;
              }
            }
            td{
              padding: 3px 10px;
              
            }
          }
        }
      }
    }
  }
</style>