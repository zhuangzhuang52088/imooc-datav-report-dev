<template>
<!-- 累计销售额组件 -->
  <CommonCard
      title="累计销售额"
      value="￥ 32,039,165"
  > <!-- 四个小块块 -->
      <template>
        <div class="compare-wrap">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasize">6.80%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasize">38.10%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>      <!-- 修改CommonCard里footer插槽的内容 -->
          <span>昨日销售额</span>
          <span class="emphasize">￥ 30,000,000</span>
      </template>
  </CommonCard>
</template>

<script>
// import CommonCard from '../CommonCard'
import commonCardMixin from '../../mixins/commonCardMixin' // 不用引入CommonCard组件，全部使用mixin混入，方便后期操作
export default {
  /* components: {
     CommonCard
  } */
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
    .compare-wrap{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
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
