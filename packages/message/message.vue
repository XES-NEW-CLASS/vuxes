<template>
  <transition name="x-message-fade">
    <div :class="mainClass"
         :style="mainStyle"
         v-show="visible">
      <i :class="`x-icon-${type}`"
         v-if="isIconShow"></i>
      <p class="x-message-text">{{ message }}</p>
    </div>
  </transition>
</template>
<script>
import { isFunction } from '~/utils/data-type'
export default {
  name: 'message',
  data () {
    return {
      preClass: 'x-message', // 默认class
      visible: true, // 可见状态
      timer: null,
      msgType: ['info', 'error', 'success', 'warning'], // icon类型
      onClose: null
    }
  },
  props: {
    message: String,
    type: String,
    duration: {
      type: Number,
      default: 2000
    },
    verticalOffset: {
      type: Number,
      default: 20
    },
    isIconShow: Boolean,
    fontColor: String
  },
  computed: {
    // 外层样式
    mainClass () {
      const { preClass, type } = this
      const className = [
        `${preClass}`,
        {
          [`${preClass}-${type}`]: !!type
        }
      ]
      return className
    },
    // 定位top值
    mainStyle () {
      const { verticalOffset, fontColor } = this
      return {
        top: `${verticalOffset}px`,
        color: `${fontColor}`
      }
    }
  },
  mounted () {
    // 开始计时
    this.startTime()
  },
  methods: {
    // 开始计时 根据时长关闭toast提示
    startTime () {
      if (this.duration <= 0) return
      this.clearTimer()
      this.timer = setTimeout(() => {
        this.close()
      }, this.duration)
    },
    // 清除时间
    clearTimer () {
      clearTimeout(this.timer)
    },
    // 关闭
    close () {
      // $destroy只是完全销毁一个实例
      this.$destroy(true)
      // 移除当前节点
      this.$el.parentNode.removeChild(this.$el)
      // 调用onclose函数
      if (isFunction(this.onClose)) {
        this.onClose()
      }
    }
  }
}
</script>
