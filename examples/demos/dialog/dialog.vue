<template>
  <div class="demo-block">
    <x-dialog @close="close" @open="open" v-model="visible"  v-if="visible" :content="`<span>这是什a么鬼${num}</span>`" title="测试提示">
    </x-dialog>
    <span class="btn" @click="openDialog()">打开dialog组件</span>
  </div>
</template>

<script>
export default {
  name: 'x-dialog-demo',
  data () {
    return {
      visible: false,
      num: 0
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
