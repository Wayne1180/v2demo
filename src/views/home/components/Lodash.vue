<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-20 10:23:20
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-20 10:31:58
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\Lodash.vue
-->
<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 1,
        name: "John Doe",
        address: {
          city: "New York",
          zip: 10001,
          contact: {
            email: "john@example.com",
          },
        },
      },
    };
  },

  mounted() {
    console.log(this.$get(this.user, ['address', 'contact', 'email']), 'lodash')
  },
};
</script>

<style></style>
