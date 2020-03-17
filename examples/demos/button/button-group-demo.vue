<template>
  <div class="demo-block">
    <div class="x-row">
      <x-button-group>
        <x-button type="primary" icon="x-icon-arrow-left">上一页</x-button>
        <x-button type="primary">
          下一页
          <i class="x-icon-arrow-right x-icon--right"></i>
        </x-button>
      </x-button-group>
      <x-button-group>
        <x-button type="success" icon="x-icon-edit"></x-button>
        <x-button type="warning" icon="x-icon-share"></x-button>
        <x-button type="danger" icon="x-icon-delete"></x-button>
      </x-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-button-group-demo'
}
</script>

<style lang="less" scoped>
.demo-block .x-button-group + .x-button-group {
  margin-left: 10px;
}
</style>
