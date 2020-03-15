<template>
  <div class="x-dialog"
       v-if="visible"
       :value="value">
    <div class="x-dialog-box"
         :style="{width:width}">
      <div class="x-dialog-top">
        <span :class="tipsType">{{title}}</span>
        <i @click="close()"
           v-show="showClose"
           class="x-icon-close x-dialog-icon"></i>
      </div>
      <div class="x-dialog-content">
        <slot name="content"></slot>
      </div>
      <div class="x-dialog-bottom">
        <slot name="dialog-bottom"></slot>
        <div class="x-dialog-bottom_left"
             @click="cancel()">{{isCancelText}}</div>
        <div class="x-dialog-bottom_right"
             @click="confirm()">{{isConfirmText}}</div>
      </div>
    </div>
    <div class="x-dialog-mask"
         v-show="isMask"></div>
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
    },
    type: {
      type: String,
      default: 'center',
      validator (val) {
        const types = ['left', 'center']
        return types.includes(val) || !val
      }
    }
  },
  mounted () {
    if (this.value) {
      this.visible = true
    }
  },
  computed: {
    tipsType () {
      const { preClass, type } = this
      const className = [
        `${preClass}-tips`,
        {
          [`${preClass}-tips-${type}`]: !!type
        }
      ]
      return className
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm')
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
