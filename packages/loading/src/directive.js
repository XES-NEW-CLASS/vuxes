import Vues from 'vue'
import Loading from './loading'
import { getStyle, addClass, removeClass } from '~/utils/dom'

const LoadingMask = Vues.extend(Loading)
// 处理绑定v-loading元素
function dealBindingTask (el, binding) {
  // 如果为v-loading = true
  if (binding.value) {
    // 如果添加到body
    if (binding.modifiers.body) {
      el.originalPosition = getStyle(document.body, 'position')
      addClass(el.mask, 'x-loading__maskbody')
      insertDom(document.body, el, binding)
    } else {
      el.originalPosition = getStyle(el, 'position')
      insertDom(el, el, binding)
    }
    el.originalVueObject.visible = true
  } else {
    setTimeout(() => {
      if (binding.modifiers.body) {
        removeClass(el.mask, 'x-loading__maskbody')
      }
      removeClass(el, 'x-loading__maskelement')
      removeClass(el, 'x-loading__hidden')
    }, 300)
    el.originalVueObject.visible = false
  }
}

function insertDom (el, childDom, binding) {
  if (!['absolute', 'fixed'].includes(el.originalPosition)) {
    addClass(el, 'x-loading__maskelement')
  }
  if (binding.modifiers.lock) {
    addClass(el, 'x-loading__hidden')
  }
  el.appendChild(childDom.mask)
}

export default {
  install (Vue) {
    Vue.directive('loading', {
      bind (el, binding) {
        const mask = new LoadingMask({
          el: document.createElement('div'),
          data: {
            text: el.getAttribute('x-loading-text'),
            icon: el.getAttribute('x-loading-icon'),
            theme: el.getAttribute('x-loading-theme'),
            addClass: el.getAttribute('x-loading-addClass')
          }
        })
        el.originalVueObject = mask
        el.mask = mask.$el
        dealBindingTask(el, binding)
      },
      update (el, binding) {
        dealBindingTask(el, binding)
      },
      unbind (el, binding) {
        dealBindingTask(el, { value: false, modifiers: binding.modifiers })
        el.instance && el.instance.$destroy()
      }
    })
  }
}
