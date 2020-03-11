<template>
  <div class="demo-block">
    <x-dialog @close="close"></x-dialog>
    <x-button @click="open()">打开dialog组件</x-button>
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
    open () {
      this.$emit('open')
    },
    close (state) {
      console.log('关闭了')
    }
  }
}
</script>
