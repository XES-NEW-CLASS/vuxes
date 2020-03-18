import create from '~/utils/create-basic'

export default create({
  name: 'row',
  componentName: 'row',
  props: {
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格间隔，默认0
    gutter: {
      type: Number,
      default: 0
    },
    // 布局模式
    type: String,
    // flex 布局下的水平排列方式，start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'start'
    },
    // flex 布局下的垂直排列方式，top/middle/bottom
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style () {
      const ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    },

    classes () {
      const classArr = [this.type].filter(item => !!item)
      return [
        this.bem(classArr),
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : ''
      ]
    }
  },

  render (h) {
    return h(this.tag, {
      class: this.classes,
      style: this.style
    }, this.$slots.default)
  }
})
