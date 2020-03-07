<template>
  <div id="app">
    <div>
      <p>学而思新课堂辅导端 UI 组件库</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    // eslint-disable-next-line no-unused-vars
    var _this = this
    setTimeout(() => {
      _this.$message('哈哈哈')
      setTimeout(() => {
        _this.$message('hehehe')
      }, 1000)
    }, 3000)
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
}
</style>
