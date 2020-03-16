<template>
  <button class="x-button"
          :disabled="disabled || loading"
          :autofocus="autofocus"
          :class="[
            type ? 'x-button--' + type : '',
            size ? 'x-button--' + size : '',
            {
              'is-disabled': disabled,
              'is-loading': loading,
              'is-plain': plain,
              'is-round': round,
              'is-circle': circle
            }
          ]"
          @click="handle">
    <i class="x-icon-loading"
       v-if="loading"></i>
    <i :class="icon"
       v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import create from '~/utils/create-basic'
import { oneOf } from '~/utils/helper'

export default create({
  name: 'button',
  props: {
    // 按钮类型
    type: {
      validator (value) {
        return oneOf(value, ['primary', 'info', 'success', 'warning', 'danger'])
      },
      type: String,
      default: 'default'
    },
    // 按钮尺寸
    size: {
      // validator (value) {
      //   return oneOf(value, ['large', 'medium', 'small', 'mini'])
      // },
      type: String
      // default: 'medium'
    },
    // 按钮图标
    icon: {
      type: String,
      default: ''
    },
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
    circle: Boolean
  },
  computed: {
    classes () {
      return [
        this.type ? 'x-button--' + this.type : '',
        this.size ? 'x-button--' + this.size : '',
        {
          'is-disabled': this.disabled,
          'is-loading': this.loading,
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle
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
