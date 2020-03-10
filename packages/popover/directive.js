let _prevDirective

/**
 * 绑定元素到reference
 * @param el 传入v-popover的dom元素
 * @param binding 传入的指令数据
 * @param vnode 传入v-popover的dom元素的vm虚拟节点
 */
function bindingReference (el, binding, vnode) {
  // 通过v-popover="xxx"调用
  if (binding.expression) {
    const { value } = binding
    if (!value) return
    if (typeof value === 'string') {
      const popover = vnode.context.$refs[value]
      popover.$refs.reference = el
    } else if (value && value._isVue && value.$vnode.tag.indexOf('x-popover') >= 0) {
      // 传入的是x-popover组件
      const newBindingData = vnode.data.directives.find(direct => direct.name === 'popover')
      // 避免相同popover的变化引起update
      if (_prevDirective && newBindingData.value === _prevDirective) return

      _prevDirective = newBindingData.value

      value.$refs.reference = el
      value.referenceAddActions && value.referenceAddActions()
    }
  // 通过v-popover:xxx调用
  } else {
    const popover = vnode.context.$refs[binding.arg]
    if (!popover) return
    popover.$refs.reference = el
  }
}

// 执行顺序：bind > mounted > update
export default {
  bind: (el, binding, vnode) => {
    bindingReference(el, binding, vnode)
  },
  update: (el, binding, vnode) => {
    bindingReference(el, binding, vnode)
  }
}
