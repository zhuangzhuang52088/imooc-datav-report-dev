<template>
<!-- 累计用户数组件 -->
    <CommonCard
        title="累计用户数"
        value="1,064,553"
    > <!-- 四个小块块 -->
        <template v-slot:footer>
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
  mixins: [commonCardMixin]

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
