<template>
  <div class="demo-block">
    <span class="btn" @click="message">message-base</span>
  </div>
</template>

<script>
export default {
  name: 'x-message-base',
  methods: {
    message () {
      this.$message('message-base')
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
