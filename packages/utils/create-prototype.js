import Vue from 'vue'
import bem from '../mixins/bem'
import config from './config'

/**
 * 將組件编译后追加至元素中，给组件添加remove方法
 * @param {*} component
 * @param {*} props
 * @param {*} el
 * @returns
 */
export default function (component, props, el) {
  component.name = config.prefix + component.name
  component.mixins = component.mixins || []
  component.mixins.push(bem)

  const instance = new Vue({
    render: h => h(component, { props })
  }).$mount()

  const wrap = el || document.body
  wrap.appendChild(instance.$el)

  const comp = instance.$children[0]
  comp.remove = function () {
    wrap.removeChild(instance.$el)
    instance.$destroy()
  }
  return comp
}
