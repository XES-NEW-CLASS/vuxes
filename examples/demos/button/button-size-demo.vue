<template>
  <div class="demo-block">
    <x-row>
      <x-button type="primary" size="large">大型按钮</x-button>
      <x-button>默认按钮</x-button>
      <x-button type="success" size="medium">中等按钮</x-button>
      <x-button type="warning" size="small">小型按钮</x-button>
      <x-button type="info" size="mini">超小按钮</x-button>
    </x-row>
    <x-row>
      <x-button type="danger" long>长按钮</x-button>
    </x-row>
  </div>
</template>

<script>
export default {
  name: 'x-button-size-demo'
}
</script>

<style lang="less" scoped>
.x-button + .x-button {
  margin-left: 10px;
}
</style>
