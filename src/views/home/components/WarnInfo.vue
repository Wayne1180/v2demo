<!--
 * @Author: 徐腾龙
 * @Date: 2023-08-22 22:46:39
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-08-22 23:28:16
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\WarnInfo.vue
-->
<template>
  <div>
    <div>{{ currentTime }}</div>
    <div class="new" v-for="item in newList" :key="item.id">{{ item.value }}</div>
    <div class="old" v-for="item in allList" :key="item.id">{{ item.value }}</div>
  </div>
</template>

<script>
import moment, { min } from 'moment'
import differenceBy from 'lodash/differenceBy'
export default {
  data () {
    return {
      currentTime: null,
      currentMinute: null,
      currentDate: null,
      allList: [],
      newList: [],
      lastMin: null
    }
  },
  mounted () {
    this.initTime()
    this.interval = setInterval(() => {
      this.initTime()
      this.getToday()
      this.handleFetchData()
    }, 3000)
  },
  methods: {
    initTime () {
      this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
    },
    initMinute () {
      this.currentMinute = moment().format('mm')
      console.log("🚀 ~ file: WarnInfo.vue:44 ~ initMinute ~ this.currentMinute:", this.currentMinute)
    },
    getToday () {
      this.currentDate = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')
      // console.log(typeof this.currentDate)
    },
    handleFetchData () {
      const minute = moment().format('mm')
      console.log("🚀 ~ file: WarnInfo.vue:53 ~ handleFetchData ~ minute:", minute)
      if (this.lastMin === minute) {

        this.allList = [...this.newList, ...this.allList]
      } else {
        this.allList = []
      }
      const obj = {
        id: this.currentTime,
        value: this.currentTime
      }
      const arr = [obj]
      // console.log("🚀 ~ file: WarnInfo.vue:51 ~ handleFetchData ~ arr:", arr)
      this.newList = []
      this.newList = differenceBy(arr, this.allList, 'id')
      this.lastMin = minute
      console.log("🚀 ~ file: WarnInfo.vue:63 ~ handleFetchData ~ this.lastMin:", this.lastMin)
      // console.log("🚀 ~ file: WarnInfo.vue:54 ~ handleFetchData ~ this.newList:", this.newList)
    }
  }
}
</script>

<style lang="scss" scoped>
.new {
  background-color: skyblue;
}
.old {
  background-color: pink;
}
</style>