import Vue from 'vue'

import { PopupManager } from '../utils/popup'
const PopperJS = Vue.prototype.$isServer ? function () {} : require('../utils/popper')

const stop = e => e.stopPropagation()

export default {
  data () {
    return {
      // 是否显示 popper
      showPopper: false,
      // PopperJs 实例
      popperJS: null,
      // 当前 popper 位置
      currentPlacement: '',
      // 是否将 arrow 添加到元素中
      appended: false
    }
  },
  props: {
    value: Boolean, // 传入是以v-modal方式，用以manual方式
    placement: { // popper 展示的位置
      type: String,
      default: 'bottom',
      validator: value => ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(value) >= 0
    },
    popperOptions: { // popper 配置选项
      type: Object,
      default () {
        return {
          gpuAcceleration: false // gpu加速样式定位。Popper将在高PPI显示器上使用3D变换，在低PPI显示器上使用2D变换
        }
      }
    },
    visibleArrow: Boolean,
    offset: {
      default: 0
    },
    arrowOffset: {
      type: Number,
      default: 35
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    // 此处是为了trigger=manual
    value: {
      immediate: true,
      handler (value) {
        this.showPopper = value
        this.$emit('input', value)
      }
    },

    // 此处是为了popper的dom元素的body添加与位置更新
    showPopper (isShow) {
      if (this.disabled) return
      isShow ? this.updatePopper() : this.destroyPopper()
      this.$emit('input', isShow)
    }
  },

  methods: {
    // 更新popper
    updatePopper () {
      const { popperJS } = this
      if (popperJS) {
        popperJS.update()
        if (popperJS._popper) {
          popperJS._popper.style.zIndex = PopupManager.nextZIndex()
        }
      } else {
        this.createPopper()
      }
    },
    // 创建PopperJS实例
    createPopper () {
      if (this.$isServer) return
      this.currentPlacement = this.currentPlacement || this.placement

      const { popperOptions } = this
      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference

      if (!reference) {
        const referenceSlot = this.$slots.reference
        if (referenceSlot && referenceSlot[0]) {
          reference = this.referenceElm = referenceSlot[0].elm
        }
      }

      if (!popper || !reference) return
      if (this.visibleArrow) this.appendArrow(popper) // popper 中插入 arrow dom元素
      // appendChild会把元素从原有位置移动到目标元素！
      if (this.appendToBody) document.body.append(popper)
      if (this.popperJS && this.popperJS.destroy) this.popperJS.destroy() // 第一次显示时没有popperJS实例，不会销毁的

      popperOptions.placement = this.currentPlacement
      popperOptions.offset = this.offset
      popperOptions.arrowOffset = this.arrowOffset
      this.popperJS = new PopperJS(reference, popper, popperOptions)
      this.popperJS.onCreate(_ => {
        this.$emit('created', this)
        this.resetTransformOrigin()
        this.updatePopper() // 首次显示时，会执行到这里。需要更新一下。
      })
      typeof popperOptions.onUpdata === 'function' &&
        this.popperJS.onUpdate(popperOptions.onUpdata)
      this.popperJS._popper.style.zIndex = PopupManager.nextZIndex()
      this.popperElm.addEventListener('click', stop)
    },
    // 重置 arrow 原始位置
    resetTransformOrigin () {
      if (!this.transformOrigin) return
      const placementMap = { // arrow 的位置。如果 popper 需要展示在元素上面，那么 arrow 在 popper 下面
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      }
      const placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0]
      const origin = placementMap[placement]
      this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string'
        ? this.transformOrigin
        : ['top', 'bottom'].indexOf(placement) >= 0 ? `center ${origin}` : `${origin} center`
    },
    // 添加 arrow dom元素
    appendArrow (target) {
      if (this.appended) return

      this.appended = true
      let hash
      // 若元素有存在以_v-开头的属性，保存其值作为hash值
      for (const item in target.attributes) {
        if (/^_v-/.test(target.attributes[item].name)) {
          hash = target.attributes[item].name
          break
        }
      }

      const arrow = document.createElement('div')

      hash && arrow.setAttribute(hash, '')
      arrow.setAttribute('x-arrow', '')
      arrow.className = 'popper__arrow'
      target.appendChild(arrow)
    },
    // 销毁popper
    destroyPopper () {}
  }
}
