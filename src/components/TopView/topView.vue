<template>
  <div class="topview">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSales /><!-- 累计销售额组件 -->
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrders /><!-- 累计订单量组件 -->
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
           <TodayUsers /><!-- 今日交易用户数组件 -->
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
           <TotalUsers /><!-- 累计用户数组件 -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
import TotalOrders from '../TotalOrders'
import TotalUsers from '../TotalUsers'
import TodayUsers from '../TodayUsers'

export default {
  components: {
    TotalSales, // 累计销售额组件
    TotalOrders, // 累计订单量组件
    TotalUsers, // 今日交易用户数组件
    TodayUsers // 累计用户数组件
  }
}
</script>

<style lang="scss" scoped>

</style>
