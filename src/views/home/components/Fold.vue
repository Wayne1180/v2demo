<!--
 * @Author: 徐腾龙
 * @Date: 2023-08-10 19:33:27
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-09-24 13:59:17
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\Fold.vue
-->
<template>
  <div class="container">
    <div class="container__header">
      <!-- <a-icon class="icon" @click="isCollapse = !isCollapse" type="down" :rotate="isCollapse ? 0 : 180" /> -->
      <img class="rotateable icon" :class="{ rotated: isCollapse }" src="../assets/Vector.png" alt @click="isCollapse = !isCollapse" />
    </div>
    <transition name="scale">
      <div v-if="!isCollapse" class="container__list">
        <div v-for="(item, index) in list" :key="index">
          <span class="label">{{ item?.name }}</span>
          <span class="value">{{ item.path }}</span>
        </div>
      </div>
    </transition>
    <!-- <div v-for="(item, index) in list" :key="index">
      <span class="label">{{ item.name }}</span>
      <span class="value">{{ item.path }}</span>
    </div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      list: [
        // 写十个对象
        { name: '首页', path: '/home' },
        { name: '分类', path: '/category' },
        { name: '购物车', path: '/cart' },
        { name: '我的', path: '/user' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.rotateable {
  transition: transform 1s ease;
}
.rotated {
  transform: rotate(180deg);
}

/* 定义进入和离开的过渡效果 */
/* .scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s;
}
.scale-enter,
.scale-leave-to {
  transform: scaleY(0);
} */

/* 进入动画 */
.scale-enter-active {
  animation: scale-up-ver-center-enter 0.2s;
}

/* 离开动画 */
.scale-leave-active {
  animation: scale-up-ver-center-leave 0.2s;
}

@keyframes scale-up-ver-center-enter {
  0% {
    transform: scaleY(0);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
}

@keyframes scale-up-ver-center-leave {
  0% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(0);
    transform-origin: 100% 0%;
  }
}

.container {
  width: 500px;
  height: 600px;
  background-color: #eee;
  &__header {
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon {
      font-size: 18px;
      margin-left: auto;
      margin-right: 10px;
    }
  }
}
</style>