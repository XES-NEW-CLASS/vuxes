<template>
  <div class="demo-block">
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="top-end"
      :appendToBody="false"
    >
      <x-button slot="reference">hover 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="click"
      placement="left"
    >
      <x-button slot="reference">click 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="focus"
      plcement="bottom-start"
    >
      <x-button slot="reference">focus 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="manual"
      placement="right-end"
      v-model="isShowManualPopper"
    >
      <x-button slot="reference" @click="changeManualStatus">manual 激活</x-button>
    </x-popover>
  </div>
</template>

<script>
export default {
  name: 'x-popover-base-demo',
  data () {
    return {
      isShowManualPopper: false
    }
  },
  methods: {
    changeManualStatus () {
      this.isShowManualPopper = !this.isShowManualPopper
    }
  }
}

</script>

<style scoped>
  button {
    margin-right: 20px;
  }
</style>
