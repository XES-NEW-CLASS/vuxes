<template>
  <div
    v-loading="loading"
    class="x-loading-demowrap"
  >
    loading组件基础用法
  </div>
</template>

<script>
export default {
  name: 'x-loading-directive',
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="less" scoped>
.x-loading-demowrap {
  width: 100%;
  height: 200px;
  background: #efefef;
}
</style>
