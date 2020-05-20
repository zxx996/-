<template lang="pug">
.hk-chart(:style="getStyle")
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'hk-chart',
  props: {
    options: {
      type: Object
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    getStyle () {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  mounted () {
    this.chart = echarts.init(this.$el)
    // console.log(this.$el)
    this.setOption()
    window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize)
  },
  watch: {
    options: {
      deep: true,
      handler: 'setOption'
    }
  },
  methods: {
    resize () {
      this.chart.resize()
    },
    setOption () {
      this.chart.clear()
      if (this.options) this.chart.setOption(this.options)
    }
  }
}
</script>
