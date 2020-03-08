<template>
  <div class="demo-block">
    <span class="btn" @click="message('info')">info-message</span>
    <span class="btn" @click="message('warning')">warning-message</span>
    <span class="btn" @click="message('error')">error-message</span>
    <span class="btn" @click="message('success')">success-message</span>
  </div>
</template>

<script>
export default {
  name: 'x-message-demo',
  methods: {
    message (type) {
      this.$message[type](`${type}-message消息`)
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
