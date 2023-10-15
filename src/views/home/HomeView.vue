<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-23 15:22:16
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-10-15 11:14:19
 * @Description: 
 * @FilePath: \v2demo\src\views\home\HomeView.vue
-->
<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-07 10:28:52
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-23 15:27:47
 * @LastEditTime: 2023-08-07 09:27:12
 * @Description: 
 * @FilePath: \v2demo\src\views\home\HomeView.vue
-->
<template>
  <div class="container-home">
    <overflow-demo></overflow-demo>
    <!-- <img-property></img-property> -->
    <!-- <arrow></arrow> -->
    <!-- <fold></fold>
    <warn-info></warn-info>-->
    <!-- <info></info> -->
    <!-- <deal-time></deal-time> -->
    <!-- <Lodash /> -->
    <!-- <Transi></Transi> -->
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
import ImgProperty from './components/ImgProperty.vue';
import Arrow from './components/Arrow.vue';
import Fold from './components/Fold.vue'
import DealTime from '@/views/home/components/DealTime'
import Lodash from './components/Lodash.vue'
import Transi from './components/Transition.vue';
import Info from './components/Info.vue';
import WarnInfo from './components/WarnInfo.vue';
import OverflowDemo from './components/OverflowDemo.vue';
export default {
  components: {
    ImgProperty,
    DealTime,
    Lodash,
    Transi,
    Info,
    Fold,
    WarnInfo,
    Arrow,
    OverflowDemo
  },
  mounted () {
    this.handleDealObj()
  },
  methods: {
    handleTouchStart (event) {
      console.log("touchstart");
    },
    handleTouchEnd (e) {
      console.log(e);
    },
    handleDealObj () {
      // const headerObj = {
      //   在编人员部分: {
      //     备一: 'values.standbyOneSubsidyZb',
      //     备二: 'values.standbyTwoSubsidyZb',
      //     备扣一: 'values.standbyOneDeductZb',
      //     备扣二: 'values.standbyTwoDeductZb'
      //   },
      //   辅助人员部分: {
      //     备一: 'values.standbyOneSubsidyFz',
      //     备二: 'values.standbyTwoSubsidyFz',
      //     备扣一: 'values.standbyOneDeductFz',
      //     备扣二: 'values.standbyTwoDeductFz',
      //     备扣三: 'values.standbyThreeDeductFz'
      //   },
      //   退休人员部分: {
      //     备一: 'values.standbyOneSubsidyTx',
      //     备二: 'values.standbyTwoSubsidyTx',
      //     备扣一: 'values.standbyOneDeductTx',
      //     备扣二: 'values.standbyTwoDeductTx'
      //   },
      //   遗属部分: {
      //     备一: 'values.standbyOneSubsidyYz',
      //     备二: 'values.standbyTwoSubsidyYz',
      //     备扣一: 'values.standbyOneDeductYz',
      //     备扣二: 'values.standbyTwoDeductYz'
      //   }
      // }
      // for (const ObjName in headerObj) {
      //   // 将对象的四个属性分解为四个对象
      //   const obj = headerObj[ObjName]
      //   for (const objKey1 in obj) {
      //     const objValue = obj[objKey1]
      //     console.log("🚀 ~ file: HomeView.vue:103 ~ handleDealObj ~ objValue:", objValue)
      //     for (const objKey2 in obj) {
      //       if(objKey2 !== objKey1 && obj[objKey2] === objValue)
      //     }
      //   }
      //   console.log('中断');
      // }
    }
  },
};
</script>

<style lang="scss" scoped>
.container-home {
  position: relative;
  width: 100vw;
  padding-right: 100px;
  height: 100%;
  background-image: linear-gradient(0deg, #6a85b6 0%, #bac8e0 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
