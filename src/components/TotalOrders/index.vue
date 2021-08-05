<template>
<!-- 累计订单量组件 -->
    <CommonCard
        title="累计订单量"
        value="2,115,465"
    > <!-- 四个小块块 -->
        <template>
         <!--    <div id="total-orders-chart" :style="{ width:'100%', height:'100%' }" /> --> <!-- echarts折线图 -->
          <v-chart :options='getOptions()' style="width:100%;height:100%" />
      </template>
        <template v-slot:footer>  <!-- 修改CommonCard里footer插槽的内容 -->
            <span>昨日订单量</span>
            <span class="emphasize">2,000,000</span>
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
    // 用echarts实现
    /*  const chartDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category', // 类目轴
        show: false, // 不显示x轴
        boundaryGap: false // 关闭默认两边留白间隙
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: [600, 400, 300, 500, 620, 330, 450, 340, 580, 200, 400, 300, 600],
        smooth: false, // 是否开启平滑曲线
        areaStyle: { // 填充区域面积图的颜色
          color: 'purple'
        },
        lineStyle: { // 去掉线
          width: 0
        },
        itemStyle: { // 去掉点
          opacity: 0
        }
      }],
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }) */
    },
    methods: {
    // 用v-chart实现
        getOptions () {
            return {
                xAxis: {
                    type: 'category', // 类目轴
                    show: false, // 不显示x轴
                    boundaryGap: false // 关闭默认两边留白间隙
                },
                yAxis: {
                    show: false
                },
                series: [{
                    type: 'line',
                    data: [600, 400, 300, 500, 620, 330, 450, 340, 580, 200, 400, 300, 600],
                    smooth: false, // 是否开启平滑曲线
                    areaStyle: { // 填充区域面积图的颜色
                        color: 'purple'
                    },
                    lineStyle: { // 去掉线
                        width: 0
                    },
                    itemStyle: { // 去掉点
                        opacity: 0
                    }
                }],
                grid: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        }
    }

}

</script>

<style lang="scss" scoped>
    span{
      font-size: 12px;
    }
</style>
