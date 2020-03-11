<template>
  <transition>
    <div class="x-dialog" v-show="visible">
      <div class="x-dialog-box" :style="{width:width}">
        <div class="x-dialog}-top">
          <span class="x-dialog-tips">{{title}}</span>
          <i v-show="showClose" class="x-icon-close x-dialog-icon"></i>
        </div>
        <div class="x-dialog-content" v-html="content">
        </div>
        <div class="x-dialog-bottom">
          <div class="x-dialog-bottom_left">{{isCancelText}}</div>
          <div class="x-dialog-bottom_right">{{isConfirmText}}</div>
        </div>
      </div>
      <div class="x-dialog-mask" v-show="isMask"></div>
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
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    isMask: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: '呵呵'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    isCancelText: {
      type: String,
      default: '取消'
    },
    isConfirmText: {
      type: String,
      default: '确认'
    }
  }

})
</script>
