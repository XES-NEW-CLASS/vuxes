<template>
  <div class="demo-block">
<!--    <x-popover-->
<!--      title="测试用"-->
<!--      content="测试文案"-->
<!--      trigger="hover"-->
<!--      placement="top-start"-->
<!--      ref="myPopover"-->
<!--    ></x-popover>-->
<!--    <x-button v-popover:myPopover>hover 激活</x-button>-->
<!--    <x-popover-->
<!--      title="测试用"-->
<!--      content="测试文案"-->
<!--      trigger="hover"-->
<!--      placement="right"-->
<!--      ref="myPopover2"-->
<!--    ></x-popover>-->
<!--    <x-button v-popover="'myPopover2'">hover 激活</x-button>-->
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="click"
      placement="right"
      ref="myPopover3"
    ></x-popover>
    <x-button v-popover="myPopoverRef">click 激活</x-button>
  </div>
</template>

<script>
export default {
  name: 'x-popover-directive-demo',
  data () {
    return {
      myPopoverRef: null
    }
  },
  mounted () {
    this.myPopoverRef = this.$refs.myPopover3
  }
}

</script>
