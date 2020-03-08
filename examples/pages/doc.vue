<template>
  <div class="container">
    <sideNav class="nav"></sideNav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import sideNav from '@/components/side-nav.vue'
import router from '@/router'
export default {
  components: {
    sideNav
  },
  data () {
    return {}
  },
  watch: {
    $route (to, from) {
      // if (to.path === '/') {
      //   router.push({ name: 'introduce' })
      // }
    }
  },
  mounted () {
    if ('onhashchange' in window) {
      window.onhashchange = function (ev) {
        const name = window.location.hash.substring(2)
        router.push({ name })
      }
    }
  }
}
</script>

<style lang="less">
.container {
  display: flex;
  margin: 80px auto 48px;
  width: 90%;
  background-color: #fff;
  .nav {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 210px;
  }
  .view {
    flex: 1;
    width: calc(100% - 215px);
    margin-left: 215px;
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: '';
  clear: both;
  display: block;
}
</style>
