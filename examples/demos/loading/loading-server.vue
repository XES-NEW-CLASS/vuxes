<template>
  <div
    class="x-loading-demowrap"
  >
    <span @click="showLoading">
      <x-button type="success">点击显示loading</x-button>
    </span>
    <span @click="showLoadingOption">
      <x-button class="ml-10"
                type="success">点击显示自定义loading</x-button>
    </span>
  </div>
</template>

<script>

export default {
  name: 'x-loading-server',
  methods: {
    showLoading () {
      const loadingFun = this.$loading()
      setTimeout(() => {
        loadingFun.close()
      }, 3000)
    },
    showLoadingOption () {
      const loadingFun = this.$loading({
        text: '加载中...',
        icon: 'x-icon-refresh-right',
        theme: 'dark',
        addClass: 'my-add',
        lock: true
      })
      setTimeout(() => {
        loadingFun.close()
      }, 3000)
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
