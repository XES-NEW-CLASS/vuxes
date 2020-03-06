<template functional>
  <div class="demo-block">
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
    >
      <x-button slot="reference">hover 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="click"
    >
      <x-button slot="reference">click 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="focus"
    >
      <x-button slot="reference">focus 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="manual"
      v-model="isShowManualPopper"
    >
      <x-button slot="reference" @click="isShowManualPopper = !isShowManualPopper">manual 激活</x-button>
    </x-popover>
  </div>
</template>

<script>
export default {
  name: 'x-popover-demo',
  data () {
    return {
      isShowManualPopper: false
    }
  }
}

</script>
