<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-07 14:21:15
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-07 14:51:04
 * @Description:
 * @FilePath: \v2demo\src\views\Map\index.vue
-->
<template>
  <div class="container-map">
    <a-button type="primary" @click="showTable = true">Reset</a-button>
    <drag-table v-if="showTable" :showTable="showTable" @close="showTable = false"></drag-table>
  </div>
</template>

<script>
import DragTable from './components/DragTable.vue';
export default {
    components: {
        DragTable
    },
    data() {
        return {
            showTable: true
        }
    },
}
</script>

<style lang="scss" scoped>
.container-map {
    width: 100vw;
    height: 100vh;
    background-image:linear-gradient(-180deg,#BCC5CE 0%, #929EAD 98%);
}
</style>