<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-07 10:28:52
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-08-07 09:32:36
 * @Description: 
 * @FilePath: \v2demo\src\views\home\HomeView.vue
-->
<template>
  <div class="container-home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.container-home {
  position: relative;
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(0deg, #6a85b6 0%, #bac8e0 100%);
}
</style>
