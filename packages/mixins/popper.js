export default {
  props: {
    trigger: String,
    title: String,
    content: {
      type: String,
      default: ''
    },
    header: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'top'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: this.value,
      position: {
        top: 0,
        left: 0
      }
    }
  },
  mounted () {
    const trigger = this.$refs.trigger
    if (!trigger) {
      return console.error('Could not find trigger ref in your component that uses poppermixin')
    }

    this._trigger = trigger

    if (this.trigger === 'click') {
      trigger.addeventlistener('click', this.toggle)
    } else if (this.trigger === 'hover') {
      trigger.addeventlistener('mouseenter', this.handleMouseEnter)
      trigger.addeventlistener('mouseleave', this.handleMouseLeave)
    } else if (this.trigger === 'focus') {
      trigger.addeventlistener('focus', this.showpopper)
      trigger.addeventlistener('blur', this.hidepopper)
    }
  },
  methods: {
    toggle (evt) {
      this.show = !this.show
      this.$emit('toggle', this.show)
      if (!this.show) return

      this.setpopperPosition()
    },
    showpopper () {
      this.show = true
      this.setpopperPosition()
    },
    hidepopper () {
      this.show = false
    },
    handleMouseEnter () {
      this.showpopper()
      clearTimeout(this._timer)
    },
    handleMouseLeave () {
      this._timer = setTimeout(() => {
        this.hidepopper()
      }, 200)
    },
    setpopperPosition () {
      this.$nextTick(() => {
        const popper = this.$refs.popper
        const trigger = this.$refs.trigger

        switch (this.placement) {
          case 'top':
            this.position.left = trigger.offsetLeft - (popper.offsetWidth / 2) + (trigger.offsetWidth / 2)
            this.position.top = trigger.offsetTop - popper.offsetHeight
            break
          case 'top-left':
            this.position.left = trigger.offsetLeft
            this.position.top = trigger.offsetTop - popper.offsetHeight
            break
          case 'top-right':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth - popper.offsetWidth
            this.position.top = trigger.offsetTop - popper.offsetHeight
            break
          case 'left':
            this.position.left = trigger.offsetLeft - popper.offsetWidth
            this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popper.offsetHeight / 2)
            break
          case 'left-top':
            this.position.left = trigger.offsetLeft - popper.offsetWidth
            this.position.top = trigger.offsetTop
            break
          case 'left-bottom':
            this.position.left = trigger.offsetLeft - popper.offsetWidth
            this.position.top = trigger.offsetTop + trigger.offsetHeight - popper.offsetHeight
            break
          case 'right':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth
            this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popper.offsetHeight / 2)
            break
          case 'right-top':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth
            this.position.top = trigger.offsetTop
            break
          case 'right-bottom':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth
            this.position.top = trigger.offsetTop + trigger.offsetHeight - popper.offsetHeight
            break
          case 'bottom':
            this.position.left = trigger.offsetLeft - (popper.offsetWidth / 2) + (trigger.offsetWidth / 2)
            this.position.top = trigger.offsetTop + trigger.offsetHeight
            break
          case 'bottom-left':
            this.position.left = trigger.offsetLeft
            this.position.top = trigger.offsetTop + trigger.offsetHeight
            break
          case 'bottom-right':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth - popper.offsetWidth
            this.position.top = trigger.offsetTop + trigger.offsetHeight
            break
          default:
            // if user set wrong placement, then use default 'top'
            this.position.left = trigger.offsetLeft - (popper.offsetWidth / 2) + (trigger.offsetWidth / 2)
            this.position.top = trigger.offsetTop - popper.offsetHeight
            break
        }

        popper.style.top = `${this.position.top}px`
        popper.style.left = `${this.position.left}px`
      })
    },
    doDestory () {
      if (this._trigger) {
        this._trigger.addeventlistener('click', this.toggle)
        this._trigger.addeventlistener('mouseenter', this.handleMouseEnter)
        this._trigger.addeventlistener('mouseleave', this.handleMouseLeave)
        this._trigger.addeventlistener('focus', this.showpopper)
        this._trigger.addeventlistener('blur', this.hidepopper)
      }
    }
  }
}
