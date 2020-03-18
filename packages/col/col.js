import create from '~/utils/create-basic'
import config from '~/utils/config'

export default create({
  name: 'col',

  props: {
    // 栅格占据的列数
    span: {
      type: Number,
      default: 24
    },
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格左侧的间隔格数
    offset: Number,
    // 栅格向左移动格数
    pull: Number,
    // 栅格向右移动格数
    push: Number,
    // <768px 响应式栅格数或者栅格属性对象(例如： {span: 4, offset: 4})
    xs: [Number, Object],
    // ≥768px 响应式栅格数或者栅格属性对象(例如： {span: 4, offset: 4})
    sm: [Number, Object],
    // ≥992 响应式栅格数或者栅格属性对象(例如： {span: 4, offset: 4})
    md: [Number, Object],
    // ≥1200 响应式栅格数或者栅格属性对象(例如： {span: 4, offset: 4})
    lg: [Number, Object]
  },

  computed: {
    gutter () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'x-row') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },
  render (h) {
    const classList = []
    const style = {}

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px'
      style.paddingRight = style.paddingLeft
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span'
            ? `${config.prefix}col-${prop}-${this[prop]}`
            : `${config.prefix}col-${this[prop]}`
        )
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`${config.prefix}col-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        const props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `${config.prefix}col-${size}-${prop}-${props[prop]}`
              : `${config.prefix}col-${size}-${props[prop]}`
          )
        })
      }
    })

    return h(this.tag, {
      class: [this.bem(), classList],
      style
    }, this.$slots.default)
  }
})
