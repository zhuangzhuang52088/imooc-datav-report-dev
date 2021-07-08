<template>
<!-- 今日交易用户数组件 -->
    <CommonCard
        title="今日交易用户数"
        value="59,648"
    > <!-- 四个小块块 -->
        <template v-slot:footer>
            <span>退货率</span>
            <span class="order">5.82%</span>
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
    span{
    font-size: 12px;
  }
  .order{
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
