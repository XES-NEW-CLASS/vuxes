<template>
  <div
    v-loading.lock="loading"
    x-loading-text="加载中..."
    x-loading-icon="x-icon-refresh-right"
    x-loading-theme="dark"
    x-loading-addClass="loading-addclass"
    class="x-loading-demowrap"
  >
    loading组件可配置参数说明
  </div>
</template>

<script>
export default {
  name: 'x-loading-directive-param',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 3000)
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
