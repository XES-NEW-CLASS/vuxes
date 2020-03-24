<template>
  <div class="demo-block">
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="left"
      styleType="dark"
    >
      <x-button slot="reference">hover 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="right"
      styleType="light"
    >
      <x-button slot="reference">hover 激活</x-button>
    </x-popover>
  </div>
</template>

<script>
export default {
  name: 'x-popover-style-demo'
}

</script>

<style scoped>
button {
  margin-right: 20px;
}
</style>
