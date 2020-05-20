<template lang="pug">
  .container(style="overflow: scoll; height:400px;")
    el-row
      el-col(:span='14')
        .select-box
          span.select-box-span 搜索设备：
          el-select( size="small" v-model="value" disabled placeholder="请选择设备")
            el-option(v-for="item in options" :key="item.value" :label="item.label" :value="item.value")
          el-button(type='primary' size="small" style="margin-left:10px;") 查询
      el-col(:span='10')
        .device-box
          .device-details 
            span 设备总数：
            span(style="color:yellow;") {{devNumber.count}} 
            span 台 
          .device-details 
            span 停机设备总数：
            span(style="color:red;") {{devNumber.stopCount}} 
            span 台 
          .device-details 
            span 离线设备总数：
            span {{devNumber.offlineCount}}
            span 台 
    router-view


</template>
<script>
export default {
  data() {
    return {
      value:'',
      epId:'',
      type: 1,
      options: [
        {
          value: '经编机',
          label: '经编机'
        },
        // {
        //   value: '喷水织机',
        //   label: '喷水织机'
        // }
      ],
      devNumber:{},
    }
  },
  methods:{
    getDevNumber(){
      this.epId=JSON.parse(localStorage.getItem('loginMsg')).departmentId-0;
      this.$http.get(`/warpknit/getDeviceCount/${this.epId}/${this.type}`).then(res=>{
       return this.devNumber=res.data;
      })
    }
  },
  created(){
    this.getDevNumber();
  }
}
</script>
<style lang="scss" scoped>
  .select-box{
    text-align: left;
    padding: 20px;
    font-size: 16px;
  }
  .device-box{
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 5px;
    .device-details{
      margin-right: 30px;
    }
  }

</style>