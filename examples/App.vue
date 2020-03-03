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
  name: 'app'
}
</script>

<style lang="less">
#app {
  width: 100%;
}
</style>
