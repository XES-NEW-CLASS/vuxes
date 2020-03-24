<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    @click="handle"
  >
    <i class="x-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import create from '~/utils/create-basic'

export default create({
  name: 'button',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default'
    },
    // 按钮尺寸
    size: String,
    // 按钮图标
    icon: String,
    // 是否加载中状态
    loading: Boolean,
    // 是否禁用状态
    disabled: Boolean,
    // 是否朴素按钮
    plain: Boolean,
    // 是否默认聚焦
    autofocus: Boolean,
    // 是否圆角按钮
    round: Boolean,
    // 是否圆形按钮
    circle: Boolean,
    // 是否长按钮
    long: Boolean
  },
  computed: {
    classes () {
      const classArr = [this.type, this.size].filter(item => !!item)
      return [
        this.bem(classArr),
        {
          'is-disabled': this.disabled,
          'is-loading': this.loading,
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-long': this.long
        }
      ]
    }
  },
  methods: {
    handle (v) {
      this.$emit('click', v)
    }
  }
})
</script>
