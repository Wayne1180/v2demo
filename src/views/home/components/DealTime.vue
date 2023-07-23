<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-10 12:21:04
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-10 12:32:23
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\DealTime.vue
-->
<template>
  <div class="container">123</div>
</template>

<script>
export default {
    mounted() {
        this.demoConsole()
    },
  methods: {
    dealDate(str, mode = "year") {
      // 获取当前年份
      const currentYear = new Date().getFullYear();

      if (str.includes(".")) {
        // 如果字符串中包含点号，则按照年、月、日的格式进行解析
        const dateParts = str.split(".");
        const year = parseInt(dateParts[0]);
        const month = dateParts[1];
        const day = dateParts[2];

        if (mode === "month") {
          // 模式为 month，则返回月份和日期
          return `${month}.${day}`;
        } else {
          // 模式为 year 或其他值，则返回完整的日期字符串
          return `${year}.${month}.${day}`;
        }
      } else {
        // 字符串中不包含点号，则视为只有月份和日期
        if (mode === "month") {
          // 模式为 month，则返回月份和日期
          return str;
        } else {
          // 模式为 year 或其他值，则补全当前年份并返回完整的日期字符串
          return `${currentYear}.${str}`;
        }
      }
    },
    demoConsole() {
      var date1 = "2023.06.30";
      var date2 = "06.30";

      var result1 = this.dealDate(date1, "month"); // 模式为 month，返回 '06.30'
      var result2 = this.dealDate(date1, "year"); // 模式为 year，返回 '2023.06.30'
      var result3 = this.dealDate(date2, "month"); // 模式为 month，返回 '06.30'
      var result4 = this.dealDate(date2, "year"); // 模式为 year，返回当前年份 + '.06.30'

      console.log(result1); // 输出 '06.30'
      console.log(result2); // 输出 '2023.06.30'
      console.log(result3); // 输出 '06.30'
      console.log(result4); // 输出当前年份 + '.06.30'
    },
  },
};
</script>

<style>
.container {
  width: 500px;
  height: 500px;
  background-color: pink;
}
</style>
