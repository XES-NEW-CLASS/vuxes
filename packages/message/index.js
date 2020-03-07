import Vue from 'vue'
import Toast from './message.vue'

const instances = [] // 多个创建
const ToastConstructor = Vue.extend(Toast)

const Message = options => {
  options = options || {} // 默认是个对象
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // 实例化message.vue
  const instance = new ToastConstructor({
    name: 'x-message',
    data: options
  })
  instance.$slots.default = [instance.message]
  // 手动挂载
  instance.$mount()
  document.body.appendChild(instance.$el)
  // 计算定位高度
  let verticalOffset = options.verticalOffset || 20
  // 多个创建时的高度计算
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 20
  })
  instance.verticalOffset = verticalOffset
  // 可见状态
  instance.visible = true
  // 添加新的数组中
  instances.push(instance)
  return instance
}
export default Message
