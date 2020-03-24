<template>
  <div :class="bem()">
    <span :class="bem('trigger')"
          ref="trigger">
      <slot></slot>
    </span>

    <transition :name="transition"
                @after-leave="doDestory">
      <div :class="[
           bem('popper'),
           placement ? 'x-tooltip--' + placement : 'x-tooltip--top'
        ]"
           v-if="show"
           ref="popper">
        <div :class="bem('arrow')"></div>
        <div :class="bem(content)">
          <slot name="content">
            <div v-text="content"></div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Popper from '~/mixins/popper'
import create from '~/utils/create-basic'

export default create({
  name: 'tooltip',
  mixins: [Popper],
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    transition: {
      type: String,
      default: 'fade'
    }
  }
})
</script>
