<template>
  <div id="app">
    <mainHeader class="header"></mainHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from '@/components/header'

export default {
  name: 'app',
  components: {
    mainHeader
  }

}
</script>

<style lang="less">
@import './assets/style/index';
html, body {
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
}
</style>
