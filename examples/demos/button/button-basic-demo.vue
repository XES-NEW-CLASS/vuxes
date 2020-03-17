<template>
  <div class="demo-block">
    <div class="x-row">
      <x-button>默认按钮</x-button>
      <x-button type="primary">主要按钮</x-button>
      <x-button type="success">成功按钮</x-button>
      <x-button type="info">信息按钮</x-button>
      <x-button type="warning">警告按钮</x-button>
      <x-button type="danger">危险按钮</x-button>
    </div>
    <div class="x-row">
      <x-button plain>朴素按钮</x-button>
      <x-button type="primary" plain>主要按钮</x-button>
      <x-button type="success" plain>成功按钮</x-button>
      <x-button type="info" plain>信息按钮</x-button>
      <x-button type="warning" plain>警告按钮</x-button>
      <x-button type="danger" plain>危险按钮</x-button>
    </div>
    <div class="x-row">
      <x-button round>圆角按钮</x-button>
      <x-button type="primary" round>主要按钮</x-button>
      <x-button type="success" round>成功按钮</x-button>
      <x-button type="info" round>信息按钮</x-button>
      <x-button type="warning" round>警告按钮</x-button>
      <x-button type="danger" round>危险按钮</x-button>
    </div>
    <div class="x-row">
      <x-button icon="x-icon-search" circle></x-button>
      <x-button type="primary" icon="x-icon-edit" circle></x-button>
      <x-button type="success" icon="x-icon-check" circle></x-button>
      <x-button type="info" icon="x-icon-message" circle></x-button>
      <x-button type="warning" icon="x-icon-star-off" circle></x-button>
      <x-button type="danger" icon="x-icon-delete" circle></x-button>
    </div>
    <div class="x-row">
      <x-button disabled>禁用按钮</x-button>
      <x-button type="primary" disabled>主要按钮</x-button>
      <x-button type="success" disabled>成功按钮</x-button>
      <x-button type="info" disabled>信息按钮</x-button>
      <x-button type="warning" disabled>警告按钮</x-button>
      <x-button type="danger" disabled>危险按钮</x-button>
    </div>
    <div class="x-row">
      <x-button disabled plain>禁用按钮</x-button>
      <x-button type="primary" disabled plain>主要按钮</x-button>
      <x-button type="success" disabled plain>成功按钮</x-button>
      <x-button type="info" disabled plain>信息按钮</x-button>
      <x-button type="warning" disabled plain>警告按钮</x-button>
      <x-button type="danger" disabled plain>危险按钮</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-button-basic-demo'
}
</script>
