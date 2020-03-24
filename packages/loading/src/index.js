import Vue from 'vue'
import Loading from './loading'
import { merge } from '~/utils/helper'
import { getStyle, addClass, removeClass } from '~/utils/dom'

const LoadingClass = Vue.extend(Loading)

const defaults = {
  text: '',
  icon: '',
  theme: 'light',
  addClass: '',
  lock: false
}
// 关闭事件处理
LoadingClass.prototype.close = function () {
  removeClass(document.body, 'x-loading__maskelement')
  removeClass(document.body, 'x-loading__hidden')
  setTimeout(() => {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }, 300)
  this.$destroy()
}

function insertDom (el, childDom, option) {
  el.originalPosition = getStyle(document.body, 'position')
  if (!['absolute', 'fixed'].includes(el.originalPosition)) {
    addClass(el, 'x-loading__maskelement')
  }
  if (option.lock) {
    addClass(el, 'x-loading__hidden')
  }
  addClass(childDom, 'x-loading__maskbody')
  el.appendChild(childDom)
}

export default (option = {}) => {
  const _option = merge({
    target: document.body,
    visible: true
  }, defaults, option)
  const instance = new LoadingClass({
    el: document.createElement('div'),
    data: _option
  })
  insertDom(_option.target, instance.$el, _option)
  return instance
}
