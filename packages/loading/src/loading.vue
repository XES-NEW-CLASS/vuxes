<template>
  <transition :name="bem('transition')">
    <div
      v-show="visible"
      :class="[addClass, bem(), {'x-loading__dark': theme === 'dark'}]">
      <div :class="bem('iconbox')">
        <div>
          <i v-if="!!icon" :class="icon"></i>
          <i v-else class="tutor-icon-shuaxin"></i>
          <p v-if="text" :class="bem('text')">{{ text }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import create from '~/utils/create-basic'

export default create({
  name: 'loading',
  data () {
    return {
      visible: false,
      text: '',
      icon: '',
      theme: 'light',
      addClass: ''
    }
  }
})
</script>
