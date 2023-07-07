<template>
  <drag>
    <div class="content" :class="{slim: !fullScreen}">
      <div class="content__header">
        <div v-if="fullScreen"></div>
        <div class="content__header__title">报警信息</div>
        <div class="content__header__icon">
          <a-icon v-if="fullScreen" class="icon" type="fullscreen-exit" @click="fullScreen = false"/>
          <a-icon v-else class="icon" type="fullscreen" @click="fullScreen = true" />
          <a-icon class="icon" type="close" @click="handleClose" />
        </div>
      </div>
      <div class="content__search">
        <a-input class="input" placeholder="请输入内容"></a-input>
        <a-button class="btn" type="primary">查询</a-button>
      </div>
    </div>
  </drag>
</template>

<script>

export default {
    props: {
        showTable: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        showTable(v) {
            this.valueD = v
        },
        valueD (v) {
            !v && this.$emit('close')
        }
    },
    data() {
        return {
            valueD: true,
            fullScreen: true
        }
    },
    methods: {
        handleClose () {
            this.valueD = false
        }
    }
};
</script>

<style lang="scss" scoped>
.slim {
    width: 260px !important;
}
.content {
  width: 650px;
  height: 364px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  &__header {
    background-color: #F68763;
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &__title {
      font-family: 微软雅黑;
      font-size: 18px;
      font-weight: normal;
      line-height: 25px;
      text-align: center;
      letter-spacing: 0px;

      color: #ffffff;
    }
    &__icon {
        color: rgba(255, 255, 255, 0.85);
        .icon {
            font-size: 20px;
            margin: 12px;
        }
    }
  }
  &__search {
    height: 40px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    .btn {
        margin-left: 4px;
    }
  }
}
</style>
