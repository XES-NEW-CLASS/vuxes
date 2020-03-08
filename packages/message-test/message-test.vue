<template>
  <transition name="message-move"
              v-on:after-leave="close"
              appear>
    <div :class="bem()"
         v-show="visible">
      <span><i :class="iconType[type]" />{{content}}</span>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'message-test',
  data () {
    return {
      visible: true,
      iconType: {
        info: 'x-icon-info info',
        error: 'x-icon-x-circle error',
        success: 'x-icon-check-circle success',
        warning: 'x-icon-alert-triangle warning',
        loading: 'x-icon-loader loading'
      },
      time: this.duration
    }
  },
  props: {
    content: String,
    type: String,
    duration: {
      type: Number,
      default: 1.5
    }
  },
  mounted () {
    if (this.duration) {
      setTimeout(this.hide, this.duration * 1000)
    }
  },
  methods: {
    hide () {
      this.visible = false
    },
    close () {
      if (!this.visible) {
        this.$emit('onClose')
      }
    }
  }
}
</script>
