<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-23 15:25:52
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-23 15:41:13
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\Transition.vue
-->
<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 500px;
  background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .box {
    width: 50px;
    height: 50px;
    background-color: pink;
    transition-property: all;
    transition-duration: 0.8s;

    &::after {
        content: '⭐';
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-duration: 0.8s;
    }

    &:hover {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: skyblue;
    }
    &:hover::after {
        content: "♥";
        font-size: 100px;
    }
  }
}
</style>
