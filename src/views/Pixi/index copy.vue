<!--
 * @Author: 徐腾龙
 * @Date: 2023-08-07 09:33:18
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-08-07 11:34:22
 * @Description: 
 * @FilePath: \v2demo\src\views\Pixi\index.vue
-->
<template>
  <div id="pixi" class="container-pixi">
    <!-- <a-button class="btn" @click="addRect" type="link">添加矩形</a-button> -->
    <!-- <a-button class="btn" @click="addChamfer" type="link">添加倒角矩形</a-button> -->
    <a-button class="btn" @click="addCircle" type="link">添加圆形</a-button>
    <!-- <a-button class="btn" @click="delPixi">销毁</a-button> -->
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import { drawChamferRect, drawFilletRect } from '@pixi/graphics-extras'
export default {
  data () {
    return {
      app: null
    }
  },
  mounted () {
    this.addPixi()
  },
  methods: {
    addPixi () {
      // 创建画布时设置宽高
      this.app = new PIXI.Application({
        width: 640,
        height: 360,
        backgroundColor: 'skyblue',
        resizeTo: window
      })
      let d1 = document.getElementById('pixi')
      d1.appendChild(this.app.view)
    },
    // 添加矩形
    addRect () {
      let graphics = new PIXI.Graphics()
      // 设置填充颜色 beginFill(颜色，不透明度)
      graphics.beginFill(0xff0000)
      // 创建图形（矩形）
      /* 最后一个参数不传也可以，有默认值 */
      // graphics.drawRect(10, 10, 150, 100)

      // 圆角矩形
      graphics.drawRoundedRect(50, 50, 200, 100, 10)

      // 绘制操作
      graphics.endFill()
      // 将绘制好的图形添加到画布中
      this.app.stage.addChild(graphics)
    },
    /* 
      添加倒角矩形
    */
    addChamfer () {
      // 创建图形类
      const graphics = new PIXI.Graphics()
      // 设置填充颜色 beginFill(颜色，不透明度)
      graphics.beginFill(0xffd900, 1)
      // 创建倒角矩形
      // graphics.drawChamferRect(500, 500, 200, 100, 10)
      // 创建倒圆角矩形
      graphics.drawFilletRect(500, 500, 200, 100, -20)
      // 绘制操作
      graphics.endFill()
      // 将绘制好的图形添加到画布中
      this.app.stage.addChild(graphics)
    },
    /* 添加圆形 */
    addCircle () {
      // 创建图形类
      const graphics = new PIXI.Graphics()
      // 设置填充颜色 beginFill(颜色，不透明度)
      graphics.beginFill(0xff0000, 0.2)
      /* 需要注意的是x和y，它和矩形不同，矩形的x和y是定义矩形左上角的位置 */
      graphics.drawCircle(500, 500, 100)
      graphics.endFill()
      // 将绘制好的图形添加到画布中
      this.app.stage.addChild(graphics)
    },
    delPixi () {
      this.app.destroy(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-pixi {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
canvas {
  position: fixed;
  top: 0;
  left: 0;
}

.btn {
  position: fixed;
  top: 0;
  right: 0;
}
</style>