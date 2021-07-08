<template>
<!-- 累计订单量组件 -->
    <CommonCard
        title="累计订单量"
        value="2,115,465"
    > <!-- 四个小块块 -->
        <template v-slot:footer>
            <span>昨日订单量</span>
            <span class="emphasize">2,000,000</span>
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
</style>
