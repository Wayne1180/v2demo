<template>
  <div class="container-info">
    <div class="header">今日报警</div>
    <div class="content">
      <div class="dynamic">
        <div class="info" v-for="(item, index) in list.slice(0, 2)" :key="index">
          <span class="label">{{ item.warnName }}</span>
          <span class="value">{{ item.warnCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          warnName: 'AIS未开',
          warnCount: 91
        },
        {
          warnName: 'AIS未开',
          warnCount: 92
        },
        {
          warnName: 'AIS未开',
          warnCount: 93
        },
        {
          warnName: 'AIS未开',
          warnCount: 94
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        },
        {
          warnName: 'AIS未开',
          warnCount: 98
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container-info {
  width: 500px;
  height: 500px;
  background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 50px;
    background-color: #343a40;
    color: #fff;
    font-size: 20px;
  }
  .content {
    flex: 1;
    background-color: skyblue;
    // overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .dynamic {
      max-height: 450px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: auto;
    }

    .info {
      display: flex;
      flex-direction: row;
      font-size: 50px;
    }
  }
}
</style>