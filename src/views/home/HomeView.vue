<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-07 10:28:52
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-08-07 09:27:12
 * @Description: 
 * @FilePath: \v2demo\src\views\home\HomeView.vue
-->
<template>
  <div class="container-home">
    <!-- <deal-time></deal-time>
    <Lodash />-->
    <!-- <Drag>
      <div class="content">
        <h1 class="noselect">Drag Me!</h1>
        <a-button type="primary">ClickMe</a-button>
      </div>
    </Drag>-->
  </div>
</template>

<script>
import DealTime from '@/views/home/components/DealTime'
import Lodash from './components/Lodash.vue'
export default {
  components: {
    DealTime,
    Lodash
  },
  methods: {
    handleTouchStart (event) {
      console.log("touchstart");
    },
    handleTouchEnd (e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-home {
  position: relative;
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(0deg, #6a85b6 0%, #bac8e0 100%);
  /* .content {
    text-align: center;
    line-height: 300px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: linear-gradient(
      0deg,
      #fad0c4 0%,
      #fad0c4 1%,
      #ffd1ff 100%
    );
    .noselect,
    [noselect] {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      -webkit-touch-callout: none;
      -khtml-user-select: none;
    }
  } */
}
</style>
