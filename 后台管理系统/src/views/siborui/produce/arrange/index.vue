<template lang='pug'>
  .arrange
    .arrange-header
      p.arrange-header-title 班组列表
    .arrange-box
      .arrange-box-header
        p.arrange-box-header-title 班组列表
        el-button.arrange-box-header-button(@click="gotoadd" size='small' type="primary") 新增班组
      .arrange-box-container
        el-table(:data="records" style='width:100%;' max-height="400")
          el-table-column(fiexd prop='name' label='班组名称' width='120')
          el-table-column(fiexd prop='nickname' label='负责人' width='120')
          el-table-column(fiexd prop='type' label='班次' width='120')
          el-table-column(fiexd prop='startTime' label='班次开始时间' width='120')
          el-table-column(fiexd prop='morningShiftId' label='早班人员' width='120')
          el-table-column(fiexd prop='middleShiftId' label='中班人员' width='120')
          el-table-column(fiexd prop='eveningShiftId' label='晚班人员' width='120')
          el-table-column(fiexd prop='createTime' label='创建时间' width='120')
          el-table-column(fiexd prop='devId' label='关联设备' width='120')
          el-table-column(fixed='right' label='操作' width='120')
            template(slot-scope='scope')
              el-button(@click.native.prevent='deleteRow(scope.$index,records)' type='text' size='small') 删除
              el-button(@click.native.prevent='deleteRow(scope.$index,records)' type='text' size='small') 修改
</template>
<script>
export default {
  data(){
    return {
      queryShiftData:{
        current:1,
        epId:'',
        keywords:'',
        size:10
      },
      records:[],
      
    }
  },
  methods:{
    deleteRow(index,rows){
      rows.splice(index,1);
    },
    gotoadd(){
      this.$router.push({
        name:'siborui.produce.arrange.add'
      })
    },
    getShiftData(){
      this.$http.post('/shift/getPageList',this.queryShiftData).then(res=>{
        console.log(res.data.records)
        return this.records= res.data.records;
       
      })
    },
    getepId(){
      const epid=JSON.parse(localStorage.getItem('loginMsg')).departmentId;
      return this.queryShiftData.epId=epid;
    }
  },
  created(){
    this.getepId();
    this.getShiftData();
  }
  
}
</script>
<style lang="scss" scoped>
  .arrange{
    background: #EFF3F6 !important;
    color: black;
    overflow-x: hidden;
    .arrange-header{
      text-align:left;
      padding: 40px;
      .arrange-header-title{
        font-size: 20px;
        
      }
    }
    .arrange-box{
      padding: 20px 40px ;
      background: white;
      border-radius: 10px;
      width: 85%;
      margin-left:40px;
      box-shadow:0 0  10px 0px #999;
      .arrange-box-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .arrange-box-header-title{
          font-size: 16px;
        }
      }
      .arrange-box-container{
        width: 100% !important;
        overflow-x: hidden;
      }
    }
  }

</style>