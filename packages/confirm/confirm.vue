<template>
  <div class="x-confirm"
       v-if="isShow"
       @click="cancel()">
    <div class="x-confirm_box"
         @click.stop>
      <div class="x-confirm_context">
        <span class="x-confirm-title">{{text.title}}</span>
        <i class="x-icon-close x-confirm-close"
           @click="cancel()"></i>
        <div class="x-confirm_msg"><i class="x-icon-warning x-confirm-icon-warn"></i><span>{{text.msg}}</span></div>
        <div class="x-confirm_btn">
          <span class="x-confirm_cancel"
                @click="cancel()">{{text.btn.cancel}}</span>
          <span class="x-confirm_submit"
                @click="submit()">{{text.btn.submit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  props: {
    text: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  methods: {
    cancel () {
      console.log('取消')
    },
    submit () {
      console.log('确定')
    }
  }
}
</script>
