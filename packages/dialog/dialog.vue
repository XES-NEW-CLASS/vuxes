<template>
  <div class="x-dialog" v-if="visible" :value="value">
    <div class="x-dialog-box" :style="{width:width}">
      <div class="x-dialog}-top">
        <span class="x-dialog-tips">{{title}}</span>
        <i @click="close()" v-show="showClose" class="x-icon-close x-dialog-icon"></i>
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
</template>
<script>
import create from '~/utils/create-basic'

export default create({
  name: 'dialog',
  data () {
    return {
      preClass: 'x-dialog',
      visible: false
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
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.value) {
      this.visible = true
    }
  },
  methods: {
    close () {
      this.$emit('close', false)
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      if (val) {
        this.$emit('open')
      }
    }
  }

})
</script>
