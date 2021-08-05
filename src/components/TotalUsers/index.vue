<template>
<!-- 累计用户数组件 -->
    <CommonCard
        title="累计用户数"
        value="1,064,553"
    > <!-- 四个小块块 -->
        <template>
            <!-- <div id="total-users-chart" :style="{ width:'100%', height:'100%' }" /> --> <!-- echarts柱状图 -->
          <v-chart :options='getOptions()' style="width:100%;height:100%" />
      </template>
        <template v-slot:footer>   <!-- 修改CommonCard里footer插槽的内容 -->
          <div class="compare-wrap">
            <div class="compare">
              <span>日同比</span>
              <span class="emphasize">6.36%</span>
              <div class="increase"></div>
            </div>
            <div class="compare">
              <span>月同比</span>
              <span class="emphasize">32.95%</span>
              <div class="decrease"></div>
            </div>
          </div>
        </template>
    </CommonCard>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin' // 不用引入CommonCard组件，全部使用mixin混入

export default {
    mixins: [commonCardMixin],
    mounted () {
    /* const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [100],
          barWidth: 10, // bar宽
          stack: '总量', // 都写stack可以重合bar
          itemStyle: {
            color: '#45c946' // 背景颜色
          }
        },
        {
          type: 'bar',
          data: [200],
          barWidth: 10,
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom', // 自定义系列
          data: [100], // 要和第一个bar的data保持一致
          stack: '总量',
          renderItem: (params, api) => { // 调用renderItem进行渲染（有2个参数）
            // console.log(api)
            const value = api.value(0) // 为data数组的下标（第一个值）
            const endPoint = api.coord([value, 0]) // 获取坐标系（小括号为x轴，y轴的值）
            return {
              // type: 'path', // 用来传svg图像（传多个svg图像要用{},{}方式渲染）
              type: 'group', // 用来传svg图像（可以在一个对象{}里面传多个svg图像 用children）唯一有子节点的容器
              position: endPoint, // 图像的坐标位置
              children: [
                {
                  type: 'path',
                  shape: { // 图标的形状（以下为它的参数）
                    d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // svg图像
                    x: -5, // x轴偏移量
                    y: -20, // y轴偏移量
                    width: 10, // 宽
                    height: 10, // 高
                    layout: 'cover' // 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形
                  },
                  style: {
                    fill: '#45c946' // 图像填充颜色
                  }
                },
                {
                  type: 'path',
                  shape: { // 图标的形状（以下为它的参数）
                    d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z', // svg图像
                    x: -5, // x轴偏移量
                    y: 10, // y轴偏移量
                    width: 10, // 宽
                    height: 10, // 高
                    layout: 'cover' // 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形
                  },
                  style: {
                    fill: '#45c946' // 图像填充颜色
                  }
                }
              ]
            }
          }
        }
      ],
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }) */
    },
    methods: {
        getOptions () {
            return {
                xAxis: {
                    type: 'value',
                    show: false
                },
                yAxis: {
                    type: 'category',
                    show: false
                },
                series: [
                    {
                        type: 'bar',
                        data: [100],
                        barWidth: 10, // bar宽
                        stack: '总量', // 都写stack可以重合bar
                        itemStyle: {
                            color: '#45c946' // 背景颜色
                        }
                    },
                    {
                        type: 'bar',
                        data: [200],
                        barWidth: 10,
                        stack: '总量',
                        itemStyle: {
                            color: '#eee'
                        }
                    },
                    {
                        type: 'custom', // 自定义系列
                        data: [100], // 要和第一个bar的data保持一致
                        stack: '总量',
                        renderItem: (params, api) => { // 调用renderItem进行渲染（有2个参数）
                            // console.log(api)
                            const value = api.value(0) // 为data数组的下标（第一个值）
                            const endPoint = api.coord([value, 0]) // 获取坐标系（小括号为x轴，y轴的值）
                            return {
                                // type: 'path', // 用来传svg图像（传多个svg图像要用{},{}方式渲染）
                                type: 'group', // 用来传svg图像（可以在一个对象{}里面传多个svg图像 用children）唯一有子节点的容器
                                position: endPoint, // 图像的坐标位置
                                children: [
                                    {
                                        type: 'path',
                                        shape: { // 图标的形状（以下为它的参数）
                                            d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // svg图像
                                            x: -5, // x轴偏移量
                                            y: -20, // y轴偏移量
                                            width: 10, // 宽
                                            height: 10, // 高
                                            layout: 'cover' // 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形
                                        },
                                        style: {
                                            fill: '#45c946' // 图像填充颜色
                                        }
                                    },
                                    {
                                        type: 'path',
                                        shape: { // 图标的形状（以下为它的参数）
                                            d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z', // svg图像
                                            x: -5, // x轴偏移量
                                            y: 10, // y轴偏移量
                                            width: 10, // 宽
                                            height: 10, // 高
                                            layout: 'cover' // 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形
                                        },
                                        style: {
                                            fill: '#45c946' // 图像填充颜色
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ],
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
    .compare-wrap{
      height: 100%;
      display: flex;
    }
    .compare{
      display: flex;
      align-items: center;
      height: 50%;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    .increase{
        width: 0;
        height: 0;
        border-width: 3px;
        border-color: transparent transparent red transparent;
        border-style: solid;
        margin-left: 5px;
        margin-bottom: 3px;
        margin-right: 10px;
      }
      .decrease{
        width: 0;
        height: 0;
        border-width: 3px;
        border-color: green transparent transparent transparent;
        border-style: solid;
        margin-left: 5px;
        margin-top: 3px;
      }
    }
</style>
