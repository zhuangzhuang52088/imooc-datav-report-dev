<template>
  <div class="home">
    <TopView />
    <SalesView />
    <BottomView />
    <MapView />
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
    TopView,
    SalesView,
    BottomView,
    MapView
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
