<template lang="pug">
  .app
    el-row
      el-col(:span="15")
        .leftbox
          .leftmain(v-for="item of efficiency" :key="item.title" :style="{backgroundImage: item.background}") 
            .left-main-left(style="width: 45%")  
              p(style='font-size:18px;') {{item.title}}
              p.leftspan {{item.percent}} &nbsp;%
              p(style='font-size:10px;') {{item.time}}
            .left-main-right
              el-progress(
                type="circle" :width="100"
                :percentage="item.percent"
                color="#f9ff4b"
                style="margin:4px 0 0 10px; "
              )
      el-col(:span="9")
        chartCard(:xData="xData" :yData="yData")
      el-col(:span="12" v-for="(val,key,index) of devrealdata" :key='key')
        .data-container
          .data-header
            span 设备：{{val.devId}}
            span 产品：{{val.proName}}
            span 效率：{{val.efficiency*100+'%'}}
            el-button(type='primary' size="mini") 详情
          .data-main-1
            .data-main-1-1
              p 本班停机
              .bg-purple
                span {{val.onDutyStopCount +' 次'}}
            .data-main-1-1
              p 本班米数
              .bg-purple
                span {{val.onDutyFM +' 米'}}
            .data-main-1-1
              p 本班产量
              .bg-purple
                span {{val.onDutyYield +' 千克'}}
          .data-main-1
            .data-main-1-1
              p 本日停机
              .bg-purple
                span {{val.todayStopCount +' 次'}}
            .data-main-1-1
              p 本日米数
              .bg-purple
                span {{val.todayFM +" 米"}}
            .data-main-1-1
              p 本日产量
              .bg-purple
                span {{val.todayYield +' 千克'}}
          .data-main-2
            el-row
              el-col(:span="4")
                .speed  
                  p 速度
              el-col(:span="5")
                .data-main-2-2
                  div
                    p GB1
                  div(style="margin-top:8px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.v1}}
              el-col(:span="5")
                .data-main-2-2
                  div
                    p GB2
                  div(style="margin-top:8px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.v2}} 
              el-col(:span="5")
                .data-main-2-2
                  div
                    p GB3
                  div(style="margin-top:8px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.v3}}
              el-col(:span="5")
                .data-main-2-2
                  div
                    p GB4
                  div(style="margin-top:8px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.v4}}
              el-col(:span="4")
                .speed(style="margin-top:8px;border-bottom-left-radius:5px;")  
                  p 剩余时长
              el-col(:span="5")
                .data-main-2-2(style="margin-top:8px; ")  
                  div
                    p GB1
                  div(style="margin-top:8px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.t1+" h"}}
              el-col(:span="5")
                .data-main-2-2(style="margin-top:8px;")  
                  div
                    p GB2
                  div(style="margin-top:8px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.t2+" h"}}
              el-col(:span="5")
                .data-main-2-2(style="margin-top:8px;")  
                  div
                    p GB3
                  div(style="margin-top:8px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.t3+" h"}}
              el-col(:span="5")
                .data-main-2-2(style="margin-top:8px;")  
                  div
                    p GB4
                  div(style="margin-top:8px; border-bottom-right-radius:5px;") 
                    span(style=" background: #2F3A8A; padding: 7px 20px") {{val.t4+" h"}}
            




</template>
<script>
import Waterball from "@/components/waterball";
import chartCard from './chart-card'
export default {
  components:{
    Waterball,
    chartCard
  },
  data() {
    return {
      xData: [], // 班组实时效率x
      yData: [], // 班组实时效率y
      devrealdata:'',
      epId:'',
      type: 1,
      groupEfficiency:[],
      queryData:{
        departmentId:''
      },
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
      efficiency:[
        {
          title: '当班效率',
          percent: 0,
          time: '',
          background: 'linear-gradient(90deg, #3ec2f6 0%, #2182e2 100%)'
        },
        {
          title: '当日效率',
          percent: 0,
          time: '',
          background: 'linear-gradient(90deg, #2187f9 0%, #4149e9 100%)'
        },
        {
          title: '当月效率',
          percent: 0,
          time: '',
          background: 'linear-gradient(90deg, #605df0 0%, #644ed6 100%)'
        },
      ]
    }
  },
  methods:{
     getdepartmentId(){
      const departmentId=JSON.parse(localStorage.getItem('loginMsg')).departmentId-0;
      return this.queryData.departmentId=departmentId;
    },
    getrealdata(){
        this.$http.get(`/warpknit/realtime/${this.queryData.departmentId}`).then(res=>{
          // console.log(res);
        let devrealdata=res.data;
        for (let i=0;i<devrealdata.length;i++){
          devrealdata[i].v1=this.hanlefixed(devrealdata[i].v1)
          devrealdata[i].v2=this.hanlefixed(devrealdata[i].v2)
          devrealdata[i].v3=this.hanlefixed(devrealdata[i].v3)
          devrealdata[i].v4=this.hanlefixed(devrealdata[i].v4)
          devrealdata[i].t1=this.hanlefixed(devrealdata[i].t1)
          devrealdata[i].t2=this.hanlefixed(devrealdata[i].t2)
          devrealdata[i].t3=this.hanlefixed(devrealdata[i].t3)
          devrealdata[i].t4=this.hanlefixed(devrealdata[i].t4)
          // devrealdata[i].onDutyYield=(devrealdata[i].onDutyYield*1000).toFixed(2)
          // devrealdata[i].todayYield=(devrealdata[i].todayYield*1000).toFixed(2)
      
        }
        console.log(devrealdata);
        return this.devrealdata=devrealdata;
      })
    },
    getAverageData(){
      this.epId=JSON.parse(localStorage.getItem('loginMsg')).departmentId-0;
      this.$http.get(`/warpknit/efficiency/${this.epId}/${this.type}`).then(res=>{
        this.efficiency[0].percent=this.handleNum(res.data.onDutyEffic); 
        this.efficiency[1].percent=this.handleNum(res.data.todayEffic);
        this.efficiency[2].percent=this.handleNum(res.data.monthEffic);
        // console.log( typeof(this.efficiency[0].percent))
        
        for(var i=0;i<this.efficiency.length;i++){
          this.efficiency[i].time=res.time;
        }
        return this.efficiency;
      })
    },
    getGroupEfficiency(){
      clearTimeout(this.timer3)
      this.$http.get(`/warpknit/groupEfficiency/${this.epId}`).then(res=>{
        this.xData = []
        this.yData = []
        let newData = res.data.sort((a, b) => { // 按效率从小到大排序
          return a.efficiency - b.efficiency
        })
        console.log(111)
        newData.map(item => {
          this.xData.push(item.name)
          this.yData.push(this.handleNum(item.efficiency))
          // console.log(this.xData)
          // console.log(this.yData)
        })
        clearTimeout(this.timer3)
        this.timer3 = setTimeout(() => this.getGroupEfficiency(), 30000)
        // this.groupEfficiency=data.data;
        // console.log(this.groupEfficiency);
      })
      .catch(() => {
        clearTimeout(this.timer3)
        this.timer3 = setTimeout(() => this.getGroupEfficiency(), 30000)
      })
    },
    handleNum (val) { // 处理纺织机效率
      return Number((val * 100).toFixed(2))
    },
    hanlefixed(val) { //保留两位小数
      return Number(val.toFixed(2))
    }
  },
  created(){
    this.getdepartmentId();
    this.getrealdata();
    this.getAverageData();
    this.getGroupEfficiency();
    // console.log(this.efficiency);
  },
  destroyed(){
    clearInterval(this.timer3)
  }
}

</script>
<style lang="scss" >
  .leftbox{
    display:flex;
    justify-content: space-between;
    padding:0 20px;
    .leftmain{
      display: flex;
      text-align: left;
      background: #0068B7;
      border-radius: 5px;
      padding:10px;
      color: white;
      width: 29%;
      .left-main-left{
        p{
          padding:5px 0 ;
        }
        .leftspan{
          color:yellow;
          font-size: 18px;
          font-weight: 900;
        }
      }
      .left-main-right{
        width:55%;
        margin: 0 auto;
        .el-progress-bar__outer {
          background-color: rgba(244, 145, 52, 0.5);
        }
        .el-progress__text{
          font-size: 20px !important;
          color: #fff !important;
        }  
      }
    }
  }
  .data-container{
    padding: 20px;
    .data-header{
      background:#0168B7;
      padding:5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-left-radius: 5px; 
      border-top-right-radius: 5px; 
    }
    .data-main-1{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      .data-main-1-1{
        width: 30%;
        background:#0168B7;
        padding: 6px;
        .bg-purple{
          background:#2F3A8A;
          margin: 5px 15px ;
          padding: 5px;
          span{
            color: red;
          }
        }
      }
    }
    .data-main-2{
      margin-top: 8px;
      .speed{
        line-height: 100px;
        background: #0168B7;
        height: 108px;
      }
      .data-main-2-2{
        margin-left: 8px;
        div{
          height: 50px;
          background: #0168B7;
          line-height: 50px;
          
        }
      }
    }
  }
</style>