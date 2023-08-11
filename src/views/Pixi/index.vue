<!--
 * @Author: 徐腾龙
 * @Date: 2023-08-07 09:33:18
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-08-07 15:47:54
 * @Description: 
 * @FilePath: \v2demo\src\views\Pixi\index.vue
-->
<template>
  <div id="pixi" class="container-pixi">
    <!-- <a-button class="btn" @click="addRect" type="link">添加矩形</a-button> -->
    <!-- <a-button class="btn" @click="addChamfer" type="link">添加倒角矩形</a-button> -->
    <!-- <a-button class="btn" @click="addCircle" type="link">添加圆形</a-button> -->
    <a-button class="btn" @click="addText" type="link">添加文本</a-button>
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
      const graphics = new PIXI.Graphics()
      // 设置填充颜色beginFill
      graphics.beginFill('white', 0.1)
      graphics.lineStyle(2, 0xff0000)
      // 创建图形（矩形）
      graphics.drawRect(50, 50, 200, 100)
      // 绘制操作
      graphics.endFill()
      // 将绘制好的图形添加到画布中
      this.app.stage.addChild(graphics)
    },
    /* 添加文本 */
    addText () {
      const text = new PIXI.Text(
        "Hello World",
        {
          fontFamily: 'Arial',
          fontSize: 36,
          fill: 'yellow', // 填充色
          stroke: 'red', // 描边颜色
          letterSpacing: 20, // 字距
          strokeThickness: 2, // 描边宽度，默认是0
          dropShadow: true, // 开启阴影
          dropShadowColor: 'red', // 投影颜色
          dropShadowBlur: 6, // 投影羽化程度（模糊度）
          dropShadowAngle: 45 * Math.PI / 180, // 投影角度
        }
      )
      this.app.stage.addChild(text)
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