import Vue from 'vue'

/**
 * 將組件编译后追加至元素中，给组件添加remove方法
 * @param {*} component
 * @param {*} props
 * @param {*} el
 * @returns
 */
export default function (component, props, el) {
  component.name = 'x-' + component.name

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
