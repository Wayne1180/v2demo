<!--
 * @Author: 徐腾龙
 * @Date: 2023-10-09 22:50:57
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-10-09 22:57:33
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\ImgProperty.vue
-->
<template>
  <div class="container-img">
    <img class="border_top" src="../assets/border_top.png" alt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container-img {
  width: 800px;
  height: 800px;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

  .border_top {
    width: 500px;
    height: 500px;
    object-fit: fill;
  }
}
</style>