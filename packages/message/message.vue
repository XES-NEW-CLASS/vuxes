<template>
  <transition name="x-message-fade">
    <div :class="mainClass"
         :style="positionStyle"
         v-show="visible">
      <!-- iocn图标 -->
      <i :class="iconStyle" v-if="iconClass != ''"></i>
      <!-- 渲染文案 -->
      <solt>
        <p>{{ message }}</p>
      </solt>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'message',
  data () {
    return {
      preClass: 'x-message', // 默认class
      type: 'info', // type类型
      verticalOffset: 20, // 默认top值
      visible: false, // 可见状态
      iconClass: this.type, // icon样式 根据状态判断是否展示icon 为空不展示
      message: '', // 提示文案
      duration: 2000, // 展示时长
      timer: null
    }
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
    positionStyle () {
      const { verticalOffset } = this
      return {
        top: `${verticalOffset}px`
      }
    },
    // icon样式
    iconStyle () {
      const { iconClass, preClass } = this
      return !iconClass ? `${preClass}-icon x-icon-${iconClass}` : ''
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
        // this.visible = false
      }, this.duration)
    },
    // 清除时间
    clearTimer () {
      clearTimeout(this.timer)
    }
  },
  watch: {
    visible (val) {
      if (!val) {
        // $destroy只是完全销毁一个实例
        this.$destroy(true)
        // 移除当前节点
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
}
</script>
