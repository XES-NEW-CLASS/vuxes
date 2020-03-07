export default {
  data () {
    return {
      // 是否显示 popper
      showPopper: false
    }
  },
  props: {
    value: Boolean // 传入是以v-modal方式，用以manual方式
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        console.log(1, value)
        this.showPopper = value
        this.$emit('input', value)
      }
    }
  }
}
