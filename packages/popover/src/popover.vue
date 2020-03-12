<template>
  <span>
    <transition :name="transition"
                @after-enter="handleAfterEnter"
                @after-leave="handleAfterLeave">
      <div class="x-popper"
           :class="[bem(), popperClass, content && bem(['plain'])]"
           ref="popper"
           v-show="!disabled && showPopper"
           :style="{ width: width + 'px', left: '100px' }"
           role="tooltip"
           :id="tooltipId"
           :aria-hidden="(disabled || !showPopper) ? 'true' : 'false'">
        <div :class="bem('title')"
             v-if="title"
             v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>

<script>
import Vue from 'vue'
import directive from './directive'
import create from '~/utils/create-basic'
import popperMixin from '~/mixins/popper-mixin'
import { generateId, camelize } from '~/utils/helper'
import { on, off, addClass, removeClass } from '~/utils/dom'

export default create({
  name: 'popover',
  mixins: [popperMixin],
  install () {
    const { name } = this
    Vue.component(name, this)
    Vue.component(camelize(`-${name}`), this)
    Vue.directive('popover', directive)
  },
  props: {
    transition: { // 样式过度
      type: String,
      default: 'fade-in-linear'
    },
    popperClass: String, // 为 popper 添加类名
    content: String, // 显示的内容
    disabled: Boolean, // popper 是否禁用
    width: { // popper 的宽度，最小为150px
      type: [String, Number],
      validator: function (value) {
        return Number.isNaN(+value) ? 150 : value
      }
    },
    title: String, // popper 标题
    reference: {}, // slot 组件
    popper: {}, // popper 组件
    trigger: { // 触发 popper 的方式
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) >= 0
    },
    openDelay: { // popper 显示延迟
      type: Number,
      default: 0
    },
    closeDelay: { // popper 隐藏延迟
      type: Number,
      default: 200
    },
    visibleArrow: { // 是否有箭头显示
      default: true
    },
    arrowOffset: { // 箭头间距
      type: Number,
      default: 0
    },
    tabindex: { // tab下标
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      referenceElm: null, // slot 组件元素
      _timer: null // popper 显示/隐藏定时器id
    }
  },
  methods: {
    // reference元素添加绑定事件
    referenceAddActions () {
      this.removeReferenceActions()

      let reference = this.referenceElm = this.reference || this.$refs.reference
      const popper = this.popper || this.$refs.popper

      if (!reference) {
        const referenceSlot = this.$slots.reference
        if (referenceSlot && referenceSlot[0]) {
          reference = this.referenceElm = referenceSlot[0].elm
        }
      }

      if (reference) {
        addClass(reference, 'el-popover__reference')
        reference.setAttribute('aria-describedby', this.tooltipId)
        reference.setAttribute('tabindex', this.tabindex) // tab序列
        popper.setAttribute('tabindex', 0)

        if (this.trigger !== 'click') {
          on(reference, 'focusin', () => {
            this.handleFocus()

            // reference指向dom元素，其__vue__指向的是dom元素的vue实例，如果不存在说明reference不是vue实例
            const instance = reference.__vue__
            if (instance && typeof instance.focus === 'function') {
              instance.focus()
            }
          })
          on(popper, 'focusin', this.handleFocus)
          on(reference, 'focusout', this.handleBlur)
          on(popper, 'focusout', this.handleBlur)
        }
        on(reference, 'keydown', this.handleKeydown)
        on(reference, 'click', this.handleClick)
      }
      if (this.trigger === 'click') {
        on(reference, 'click', this.doToggle)
        on(document, 'click', this.handleDocumentClick)
      } else if (this.trigger === 'hover') {
        on(reference, 'mouseenter', this.handleMouseEnter)
        on(popper, 'mouseenter', this.handleMouseEnter)
        on(reference, 'mouseleave', this.handleMouseLeave)
        on(popper, 'mouseleave', this.handleMouseLeave)
      } else if (this.trigger === 'focus') {
        if (this.tabindex < 0) {
          console.warn('[Vuxes Warn][Popover]a negative taindex means that the element cannot be focused by tab key')
        }
        if (reference.querySelector('input, textarea')) {
          on(reference, 'focusin', this.doShow)
          on(reference, 'focusout', this.doClose)
        } else {
          on(reference, 'mousedown', this.doShow)
          on(reference, 'mouseup', this.doClose)
        }
      }
    },
    removeReferenceActions () {
      const reference = this.referenceElm

      if (!reference) return

      off(reference, 'click', this.doToggle)
      off(reference, 'mouseup', this.doClose)
      off(reference, 'mousedown', this.doShow)
      off(reference, 'focusin', this.doShow)
      off(reference, 'focusout', this.doClose)
      off(reference, 'mousedown', this.doShow)
      off(reference, 'mouseup', this.doClose)
      off(reference, 'mouseleave', this.handleMouseLeave)
      off(reference, 'mouseenter', this.handleMouseEnter)
      off(document, 'click', this.handleDocumentClick)
    },
    handleAfterEnter () {
      this.$emit('after-enter')
    },
    handleAfterLeave () {
      this.$emit('after-leave')
      // TODO
      // this.doDestroy()
    },
    doToggle () {
      this.showPopper = !this.showPopper
    },
    doShow () {
      this.showPopper = true
    },
    doClose () {
      this.showPopper = false
    },
    handleFocus () {
      addClass(this.referenceElm, 'focusing')
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = true
    },
    handleBlur () {
      removeClass(this.referenceElm, 'focusing')
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = false
    },
    handleClick () {
      removeClass(this.referenceElm, 'focusing')
    },
    handleKeydown (ev) {
      if (ev.keyCode === 27 && this.trigger !== 'manual') { // esc按键
        this.doClose()
      }
    },
    handleDocumentClick (e) {
      let reference = this.reference || this.$refs.reference
      const popper = this.popper || this.$refs.popper

      if (!reference) {
        const referenceSlot = this.$slots.reference
        if (referenceSlot && referenceSlot[0]) {
          reference = this.referenceElm = referenceSlot[0].elm
        }
      }

      // 非popover内元素点击需要隐藏掉popper
      // this.$el执行本组件dom实例
      if (!this.$el ||
        !reference ||
        this.$el.contains(e.target) ||
        reference.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return
      this.showPopper = false
    },
    handleMouseEnter () {
      clearTimeout(this._timer)
      if (this.openDelay) {
        this._timer = setTimeout(() => {
          this.showPopper = true
        }, this.openDelay)
      } else {
        this.showPopper = true
      }
    },
    handleMouseLeave () {
      clearTimeout(this._timer)
      if (this.closeDelay) {
        this._timer = setTimeout(() => {
          this.showPopper = false
        }, this.closeDelay)
      } else {
        this.showPopper = false
      }
    },
    cleanTimer () {
      if (this.openDelay || this.closeDelay) {
        clearTimeout(this._timer)
      }
    }
  },
  computed: {
    // popper的id
    // 该id也会被绑在reference上，做关联用
    // 为何要随机生成id呢，这存在概率返回的id相同呀？
    tooltipId () {
      return `x-popover-${generateId()}`
    }
  },
  watch: {
    showPopper (val, old) {
      if (this.disabled) {
        return
      }
      val ? this.$emit('show') : this.$emit('hide')
    }
    // '$refs.reference' (reference) {
    //   if (!reference || this.reference) return
    //   this.referenceAddActions()
    // }
  },

  mounted () {
    this.referenceAddActions()
  },

  beforeDestroy () {
    this.cleanTimer()
  },

  destroyed () {
    this.removeReferenceActions()
  }
})
</script>
