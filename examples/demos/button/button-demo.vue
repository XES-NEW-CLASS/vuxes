<template>
  <div class="demo-block">
    <x-button class="mr-10"><i class="tutor-icon-pomelo"></i>默认按钮</x-button>
    <x-button class="mr-10"
              type="primary"><i class="x-icon-ice-cream-round"></i>主要按钮</x-button>
    <x-button class="mr-10"
              type="success">成功按钮</x-button>
    <x-button class="mr-10"
              type="info">信息按钮</x-button>
    <x-button class="mr-10"
              type="warning">警告按钮</x-button>
    <x-button type="danger">危险按钮</x-button>
  </div>
</template>

<script>
export default {
  name: 'x-button-demo'
}
</script>
