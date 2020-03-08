<template>
  <div class="demo-block">
    <span class="btn"
          @click="info">测试message</span>
  </div>
</template>

<script>
export default {
  name: 'x-message-demo',
  methods: {
    info () {
      this.$message.info('message 消息')
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
