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

.header {
  position: fixed;
}
</style>
