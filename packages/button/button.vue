<template>
  <button :class="bem([type])"
          type="button">
    <slot></slot>
  </button>
</template>

<script>
import create from '~/utils/create-basic'
import { oneOf } from '~/utils/helper'

export default create({
  name: 'button',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'danger'])
      },
      type: String,
      default: 'default'
    }
  }
})
</script>
