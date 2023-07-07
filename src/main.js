/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 10:28:52
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-07 10:45:00
 * @Description: 
 * @FilePath: \v2demo\src\main.js
 */
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import 'normalize.css/normalize.css'

// 引入组件
import Drag from '@/components/Drag/drag.vue'

Vue.config.productionTip = false

Vue.use(Antd)

Vue.component('Drag', Drag)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
