<template>
  <transition>
    <div :class="preClass" v-show="visible">
      <div :class="`${preClass}-box`" :style="{width:width}">
        <div :class="`${preClass}-top`">
          <span :class="`${preClass}-tips`">提示</span>
          <span :class="`${preClass}-close`">×</span>
        </div>
        <div class="x-dialog-content">
          内容
        </div>
        <div class="x-dialog-bottom">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="x-dialog-mask"></div>
    </div>
  </transition>
</template>
<script>
import create from '~/utils/create-basic'

export default create({
  name: 'dialog',
  data () {
    return {
      preClass: 'x-dialog',
      visible: true
    }
  },
  props: {
    width: {
      type: String,
      default: '50%'
    }
  }

})
</script>
