<template lang="pug">
  .chart-container
    hk-chart(:options="options" width="97%" height="100%" ref="myChartBar")
</template>
<script>
export default {
  props: {
    xData: {
      type: Array,
      default: () => {}
    },
    yData: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    options () {
      return {
        timeFlag: false, // 触发初始动画参数
        backgroundColor: 'rgba(0,0,0,0.3)',
        grid: {
          left: '10',
          right: '10',
          bottom: '40',
          top: '30'
        },
        tooltip: { show: false },
        xAxis: [{
          type: 'category',
          data: this.xData,
          axisLine: { show: false },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.6)',
              type: 'dashed'
            }
          },
          axisLabel: {
            interval: 0, // 强制显示所有标签
            show: true,
            color: 'rgb(255,255,255,0.8)',
            fontSize: 10,
            formatter: params => {
              let a = params.split('#')[0]
              let b = params.split('#')[1] || ''
              return `${a}\n${b}`
            }
          }
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
              type: 'dotted'
            }
          },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false }
        }
        ],
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0.5)'
              }
            },
            barMaxWidth: 14,
            silent: true,
            barGap: '-100%', // Make series be overlap
            data: this.setyData()
          },
          {
            name: '告警数量',
            type: 'bar',
            animationDuration: 1000,
            barMaxWidth: 14,
            itemStyle: {
              color: 'rgb(71, 157, 255)',
              barBorderRadius: [10, 10, 0, 0]
            },
            animationDelay: function (idx) {
              // 越往后的数据延迟越大
              return idx * 300
            },
            label: {
              normal: { // 顶部显示数值
                show: true,
                position: 'top',
                distance: 10,
                textStyle: {
                  color: 'rgb(71, 157, 255)',
                  fontSize: 12
                },
                formatter: params => {
                  return params.value + '%'
                }
              }
            },
            data: this.yData
          }
        ]
      }
    }
  },
  methods: {
    setyData () {
      let arr = []
      for (let i = 0; i < this.yData.length; i++) {
        arr.push(100)
      }
      return arr
    }
  }
}
</script>
<style lang="scss">
.chart-container {
  height: 8rem;
  border-radius: 4px;
  overflow: hidden;
}
</style>
