<template lang='pug'>
  .gateway
    .gateway-header
      p.gateway-header-title 网关列表
    .gateway-box
      .gateway-box-header
        p.gateway-box-header-title 网关列表
        el-button.gateway-box-header-button(@click="gotoGatewayadd" size='small' type="primary") 新增网关
      .gateway-box-container
        el-table(:data="records" style='width:100%;' max-height="400")
          el-table-column(fiexd prop='gwId' label='网关ID' width='120')
          el-table-column(fiexd prop='gwName' label='网关名称' width='120')
          el-table-column(fiexd prop='status' label='状态' width='120')
          el-table-column(fiexd prop='devCount' label='带点数量' width='120')
          el-table-column(fiexd prop='creater' label='创建人' width='120')
          el-table-column(fiexd prop='createTime' label='创建时间' width='120')
          el-table-column(fiexd prop='remark' label='备注' width='120')
          el-table-column(fixed='right' label='操作' width='120')
            template(slot-scope='scope')
              el-button(@click.native.prevent='deleteRow(scope.$index,records)' type='text' size='small') 删除
              el-button(@click.native.prevent='deleteRow(scope.$index,records)' type='text' size='small') 修改
</template>
<script>
export default {
  data(){
    return {
      queryGatewayData:{
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
    gotoGatewayadd(){
      this.$router.push({
        name:'siborui.produce.gateway.add'
      })
    },
    getGatewaytData(){
      this.$http.post('/gateway/getPageList',this.queryGatewayData).then(res=>{
        // console.log(res.data.records)
        return this.records= res.data.records;
       
      })
    },
    getepId(){
      const epid=JSON.parse(localStorage.getItem('loginMsg')).departmentId;
      return this.queryGatewayData.epId=epid;
    }
  },
  created(){
    this.getepId();
    this.getGatewaytData();
  }
  
}
</script>
<style lang="scss" scoped>
  .gateway{
    background: #EFF3F6 !important;
    color: black;
    overflow-x: hidden;
    .gateway-header{
      text-align:left;
      padding: 40px;
      .gateway-header-title{
        font-size: 20px;
        
      }
    }
    .gateway-box{
      padding: 20px 40px ;
      background: white;
      border-radius: 10px;
      width: 85%;
      margin-left:40px;
      box-shadow:0 0  10px 0px #999;
      .gateway-box-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .gateway-box-header-title{
          font-size: 16px;
        }
      }
      .gateway-box-container{
        width: 100% !important;
        overflow-x: hidden;
      }
    }
  }

</style>