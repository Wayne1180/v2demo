<!--
 * @Author: 徐腾龙
 * @Date: 2023-10-15 11:13:12
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-10-15 12:58:08
 * @Description: 
 * @FilePath: \v2demo\src\views\home\components\OverflowDemo.vue
-->
<template>
  <div class="container-od">
    <h1>Overflow</h1>
    <div class="content">
      <div class="content__table">
        <table>
          <thead>
            <tr>
              <th>抓拍点位</th>
              <th>时间</th>
              <th>定位</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in snapList" :key="index">
              <td>{{ item.location }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.position }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <div class="content__bg">123</div> -->
      <!-- <div
        class="content__text"
      >《滕王阁序》是唐代文学家王勃创作的一篇骈文。文章由洪都的地势、人才写到宴会，写滕王阁的壮丽，眺望的广远，扣紧秋日，景色鲜明；再从宴会娱游写到人生遇合，抒发身世之感；接着写作者的遭遇并表白要自励志节，最后以应命赋诗和自谦之辞作结。全文表露了作者的抱负和怀才不遇的愤懑心情。文章除少数虚词以外，通篇对偶。句法以四字句、六字句为多，对得整齐；又几乎是通篇用典，用得比较自然而恰当，显得典雅而工巧。</div>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      snapList: [
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' },
        { location: '江心洲', time: '2023-10-15 12:39:40', position: '南11' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.container-od {
  margin-left: 50px;
  .content {
    width: 600px;
    height: 500px;
    background-color: #fff;
    // overflow-x: hidden;
    // overflow-y: auto;

    &__table {
      width: 576px;
      height: 300px;
      overflow: auto;
      background-color: #8076a3;

      &::-webkit-scrollbar {
        width: 0 !important;
      }

      table {
        width: 100%;
        thead {
          position: sticky;
          top: 0;
          tr {
            height: 44px;
            background-color: #f5fafd;

            th {
              font-family: Microsoft YaHei;
              font-size: 16px;
              font-weight: 600;
              line-height: 24px;
              letter-spacing: 0px;

              color: #567292;

              text-align: center;
            }
          }
        }

        tbody {
          tr {
            height: 46px;
            background-color: #fff;

            font-family: Microsoft YaHei;
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            letter-spacing: 0px;

            color: rgba(0, 0, 0, 0.65);

            text-align: center;
          }
        }
      }
    }

    &__bg {
      width: 600px;
      height: 600px;
      background-color: pink;
    }

    &__text {
      white-space: nowrap;
      overflow: auto;
      text-overflow: clip;

      font-family: 微软雅黑;
      font-size: 16px;
      font-weight: normal;
      line-height: 22px;
      letter-spacing: 0px;

      color: #bd1903;
    }
  }
}
</style>