import Vue from 'vue'
import Toast from './message.vue'
import { isString, isNumber, isBoolean } from '~/utils/data-type'

const instances = [] // 多个创建
const ToastConstructor = Vue.extend(Toast)
let num = 0
const Message = options => {
  if (Vue.prototype.$isServer) return
  options = options || {} // 默认是个对象
  if (options === '') return
  if (isString(options)) {
    options = {
      message: options
    }
  }
  // 生成唯一domId
  const domId = `x-message-${num++}`
  // 执行close相关操作哦
  options.onClose = () => {
    Message.close(domId)
  }
  // 实例化message.vue
  const instance = new ToastConstructor({
    data: options
  }).$mount()
  // 添加到body中
  document.body.appendChild(instance.$el)
  // 添加domid
  instance.domId = domId
  // 计算定位高度
  let verticalOffset = isNumber(options.verticalOffset) ? options.verticalOffset : 20
  // 多个创建时的高度计算
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset
  console.log(instance.verticalOffset)
  // icon是否展示
  instance.isIconShow = isBoolean(options.isIconShow) ? options.isIconShow : true
  // 可见状态
  instance.visible = true
  // 展示时长
  instance.duration = isNumber(options.duration) ? options.duration : 2000
  // 添加新的数组中
  instances.push(instance)
  return instance
}

// Message函数中拓展 ["success", "error",'warning','info'] 方法
const MessageType = Toast.data().iconType
MessageType.forEach((type) => {
  Message[type] = options => {
    if (options === '') return
    if (isString(options)) {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})
// 关闭后移除重设位置
Message.close = (domId) => {
  let removeHeight
  instances.forEach((item, index) => {
    if (item.domId === domId) {
      removeHeight = item.verticalOffset
      instances.splice(index, 1)
    }
  })
  // 重新设置top值
  instances.forEach(item => {
    item.$el.style.top = parseInt(item.$el.style.top, 10) - removeHeight - 16 + 'px'
  })
}
export default Message
