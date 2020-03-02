<template>
  <div>
    <x-button @click="clickFunc">
      这是一个Toast
    </x-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    clickFunc () {
      // this.$xes.toast.show({
      //   text: '这是一个Toast'
      // })
      console.log('点击')
    }
  }
}

</script>

<style>
</style>
