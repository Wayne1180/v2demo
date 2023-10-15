<template>
  <div class="arrow-container">
    <div class="arrow">
      <svg class="scrollarrows">
        <path class="a1" d="M0 0 L6.5 13 L14 0" />
        <path class="a2" d="M0 13 L6.5 26 L14 13" />
        <path class="a3" d="M0 26 L6.5 39 L14 26" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.scrollarrows {
  width: 14px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
.scrollarrows path.a1 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s;
}
.scrollarrows path.a2 {
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s;
}
.scrollarrows path.a3 {
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
}
.scrollarrows path {
  stroke: #366ef4;
  fill: transparent;
  stroke-width: 2px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}
@keyframes arrow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>