<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-10 12:21:04
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-08-04 11:58:03
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\DealTime.vue
-->
<template>
  <div class="container">123</div>
</template>

<script>
import * as PIXI from 'pixi.js'
export default {
  mounted () {
    this.demoConsole()
    this.createPIXI()
  },
  methods: {
    dealDate (str, mode = "year") {
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
    demoConsole () {
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
    createPIXI () {
      let app = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0x1099bb })
      document.body.appendChild(app.view)
      // 创建一个文本样式
      const skewStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        dropShadow: true,
        dropShadowAlpha: 0.8,
        dropShadowAngle: 2.1,
        dropShadowBlur: 4,
        dropShadowColor: '0x111111',
        dropShadowDistance: 10,
        fill: ['#ffffff'],
        stroke: '#004620',
        fontSize: 60,
        fontWeight: 'lighter',
        lineJoin: 'round',
        strokeThickness: 12,
      });
      // 创建一个文本类型
      const skewText = new PIXI.Text('Hello PixiJS', skewStyle);
      // 将文本倾斜
      skewText.skew.set(0.1, -0.1);
      // 定义文本在舞台（app）中的位置
      skewText.x = 10;
      skewText.y = 100;
      // 将文本添加到舞台（app）中
      app.stage.addChild(skewText);
    }
  },
};
</script>

<style>
.container {
  background-color: white;
}
</style>
