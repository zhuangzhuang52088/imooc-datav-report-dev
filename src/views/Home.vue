<template>
  <div class="home">
    <TopView />     <!-- 第一个模块 -->
    <SalesView />   <!-- 第二个模块 -->
    <BottomView />  <!-- 第三个模块 -->
    <MapView />     <!-- 第四个模块 -->
  </div>
</template>

<script>
/* import TopView from '@/components/TopView/topView.vue'
import SalesView from '@/components/SalesView/salesView.vue'
import BottomView from '@/components/BottomView/bootomView.vue'
import MapView from '@/components/MapView/mapView.vue' */
import TopView from '../components/TopView/topView.vue'
import SalesView from '../components/SalesView/salesView.vue'
import BottomView from '../components/BottomView/bottomView.vue'
import MapView from '../components/MapView/mapView.vue'

export default {
  name: 'Home',
  components: {
    TopView, // 第一个模块
    SalesView, // 第二个模块
    BottomView, // 第三个模块
    MapView // 第四个模块
  }
}
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: #eee;
  }
</style>
