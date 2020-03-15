<template>
  <div class="demo-block">
    <x-dialog @close="close"
              @open="open"
              @cancel="cancel"
              @confirm="confirm"
              isCancelText="否"
              isConfirmText="是"
              v-model="visible"
              v-if="visible"
              type="center"
              title="测试提示">
      <div slot="content">
        <span>确认要关闭嘛？</span>
      </div>
    </x-dialog>
    <span class="btn"
          @click="openDialog()">打开dialog组件</span>
  </div>
</template>

<script>
export default {
  name: 'x-dialog-demo',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    openDialog () {
      this.visible = true
    },
    close () {
      this.visible = false
      console.log('close回调')
    },
    open () {
      console.log('open回调')
    },
    cancel () {
      this.visible = false
      console.log('cancel回调')
    },
    confirm () {
      this.visible = false
      console.log('confirm回调')
    }
  }
}
</script>
<style scoped>
.btn {
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: 10px;
}
</style>
