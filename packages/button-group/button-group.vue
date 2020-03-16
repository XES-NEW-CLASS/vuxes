<template>
  <div :class="bem()">
    <slot></slot>
  </div>
</template>
<script>
import create from '~/utils/create-basic'

export default create({
  name: 'button-group'
})
</script>
