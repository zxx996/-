<template lang='pug'>
  .user
    .user-header
      p.user-header-title 用户列表
    .user-box
      .user-box-header
        p.user-box-header-title 用户列表
        el-button.user-box-header-button(@click="gotoUseradd" size='small' type="primary") 新增用户
      .user-box-container
        el-table(:data="records" style='width:100%;' max-height="400")
          el-table-column(fiexd prop='id' label='用户ID' width='120')
          el-table-column(fiexd prop='username' label='姓名' width='120')
          el-table-column(fiexd prop='phone' label='手机号' width='120')
          el-table-column(fiexd prop='nickname' label='角色分类' width='120')
          el-table-column(fiexd prop='departmentId' label='部门ID' width='120')
          el-table-column(fiexd prop='gender' label='性别' width='120')
          el-table-column(fiexd prop='state' label='状态' width='120')

          el-table-column(fixed='right' label='操作' width='120')
            template(slot-scope='scope')
              el-button(@click.native.prevent='deleteRow(scope.$index,records)' type='text' size='small') 删除
              el-button(@click.native.prevent='deleteRow(scope.$index,records)' type='text' size='small') 修改
</template>
<script>
export default {
  data(){
    return {
      queryUserData:{
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
    gotoUseradd(){
      this.$router.push({
        name:'siborui.organzation.user.add'
      })
    },
    getShiftData(){
      this.$http.post('/sysUser/getPageList',this.queryUserData).then(res=>{
        
        let records= res.data.records;
        for (var i=0;i<records.length;i++){
          records[i].gender==0? records[i].gender='女': records[i].gender='男';
          if(records[i].state==0){
            records[i].state='禁用'
          }else if(records[i].state==1){
            records[i].state='启用'
          }else if(records[i].state==2){
            records[i].state='锁定'
          }
        }
        // console.log(records)
        return this.records=records;
       
      })
    },
    getepId(){
      const epid=JSON.parse(localStorage.getItem('loginMsg')).departmentId;
      return this.queryUserData.epId=epid;
    }
  },
  created(){
    this.getepId();
    this.getShiftData();
  }
  
}
</script>
<style lang="scss" scoped>
  .user{
    background: #EFF3F6 !important;
    color: black;
    overflow-x: hidden;
    .user-header{
      text-align:left;
      padding: 40px;
      .user-header-title{
        font-size: 20px;
        
      }
    }
    .user-box{
      padding: 20px 40px ;
      background: white;
      border-radius: 10px;
      width: 85%;
      margin-left:40px;
      box-shadow:0 0  10px 0px #999;
      .user-box-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user-box-header-title{
          font-size: 16px;
        }
      }
      .user-box-container{
        width: 100% !important;
        overflow-x: hidden;
      }
    }
  }

</style>