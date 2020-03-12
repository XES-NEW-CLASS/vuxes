<template>
  <div class="demo-block">
    <div class="tooltip-container">
      <div class="top">
        <x-button x-tooltip="上边"
                  placement="top-left"
                  effect="light">上左</x-button>
        <x-button x-tooltip="上左上左"
                  placement="top">上边</x-button>
        <x-button x-tooltip="上右"
                  placement="top-right">上右</x-button>
      </div>
      <div class="left">
        <x-button x-tooltip="左上左上左上左上左上左上左上左上左上左上"
                  placement="left-top">左上</x-button>
        <x-button x-tooltip="左边"
                  placement="left"
                  effect="light">左边</x-button>
        <x-button x-tooltip="左右"
                  placement="left-bottom">左下</x-button>
      </div>
      <div class="right">
        <x-button x-tooltip="右上右上右上右上右上右上右上右上"
                  placement="right-top">右上</x-button>
        <x-button x-tooltip="右边"
                  placement="right"
                  effect="light">右边</x-button>
        <x-button x-tooltip="右下"
                  placement="right-bottom">右下</x-button>
      </div>
      <div class="bottom">
        <x-button x-tooltip="下左下左"
                  placement="bottom-left">下左</x-button>
        <x-button x-tooltip="下边"
                  placement="bottom"
                  effect="light">下边</x-button>
        <x-button x-tooltip="下右"
                  placement="bottom-right">下右</x-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-tooltip-demo'
}
</script>

<style lang="less" scoped>
.tooltip-container {
  width: 400px;
  text-align: center;
}

.tooltip-container .right {
  width: 70px;
  float: right;
}

.tooltip-container .left {
  width: 70px;
  float: left;
}

.tooltip-container .bottom {
  clear: both;
}
</style>
