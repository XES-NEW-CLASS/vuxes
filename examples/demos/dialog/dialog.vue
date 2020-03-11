<template>
  <div class="demo-block">
    <x-dialog @close="close" :content="`<span>这是什a么鬼${num}</span>`" title="测试提示">
    </x-dialog>
    <x-button @click="open()">打开dialog组件</x-button>
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
    open () {
      this.$emit('open')
    },
    close (state) {
      console.log('关闭了')
    }
  }
}
</script>
