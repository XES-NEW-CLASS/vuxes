<template>
  <div class="demo-block">
    <span class="btn"
          @click="open()">打开确认框</span>
  </div>
</template>

<script>
export default {
  name: 'x-confirm-demo',
  methods: {
    open () {
      this.$confirm({
        text: {
          title: '提示',
          msg: '确认关闭吗？',
          btn: {
            submit: '是',
            cancel: '否'
          }
        }
      }).then(() => {
        console.log('submit')
      }).catch(() => {
        console.log('cancel')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: 10px;
}
</style>
