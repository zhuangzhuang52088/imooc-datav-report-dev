<template>
<!-- 今日交易用户数组件 -->
    <CommonCard
        title="今日交易用户数"
        value="59,648"
    > <!-- 四个小块块 -->
        <template>
            <div id="today-users-chart" :style="{ width:'100%', height:'100%' }" /> <!-- echarts柱状图 -->
      </template>
        <template v-slot:footer>   <!-- 修改CommonCard里footer插槽的内容 -->
            <span>退货率</span>
            <span class="order">5.82%</span>
        </template>
    </CommonCard>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin' // 不用引入CommonCard组件，全部使用mixin混入

export default {
  mixins: [commonCardMixin],
  data () {
    return {

    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      const chartDom = document.getElementById('today-users-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          show: false,
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00']
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        series: [{
          type: 'bar',
          barWidth: '60%',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150]
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    span{
    font-size: 12px;
  }
  .order{
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
