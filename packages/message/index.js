import Element from './message'
import create from '~/utils/create-prototype'
import { isString, isNumber } from '~/utils/data-type'

function createMessage (content, type, duration) {
  if (!isString(content) && content === '') return

  const props = {
    content: content,
    type: type
  }

  if (isNumber(duration)) props.duration = duration

  const message = create(Element, props)
  message.$on('onClose', message.remove)

  return message.hide.bind(this)
}

const methods = Object.keys(Element.data().iconType)
const Message = {}

methods.forEach((key) => {
  Message[key] = (content, duration) => createMessage(content, key, duration)
})

export default Message
