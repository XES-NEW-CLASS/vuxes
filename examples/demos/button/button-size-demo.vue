<template>
  <div class="demo-block">
    <div class="x-row">
      <x-button type="primary" size="large">大型按钮</x-button>
      <x-button>默认按钮</x-button>
      <x-button type="success" size="medium">中等按钮</x-button>
      <x-button type="warning" size="small">小型按钮</x-button>
      <x-button type="info" size="mini">超小按钮</x-button>
    </div>
    <div class="x-row">
      <x-button type="danger" long>长按钮</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-button-size-demo'
}
</script>
