<template>
<div>
  <div class="progress" style="width: 100%;
  height: 4px;
    z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;" :style="{'background': `${progress_bg}`}">
    <div class="progress-bar" style="position: absolute;
    width: 100%;
    height: 4px;" :style="{'transform': `translateX(-${status != 'start' ?0 :value }%)`,'transition':`all ${status == 'start' ?10 :1 }s cubic-bezier(0.075, 0.82, 0.165, 1)`,'background': `${status == 'failure' ?color.failure :color.success}` }"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'VLoadingBar',
  props: {
    status: {
      type: String,
      require: true,
      validator: val => {
        return ['start', 'success', 'failure'].includes(val)
      }
    },
    color: {
      type: Object,
      default () {
        return {
          success: '#20a0ff',
          failure: '#E7392A',
        }
      }
    },
    progress_bg: {
      type: String,
      default: '#999'
    },
    step: {
      type: Number,
      default: 100
    },
    duration: {
      type: Number,
      default: 5
    }
  },

  data() {
    return {
      value: this.step,
    }
  },
  watch: {},
  methods: {},
  mounted() {
    this.value = 100
    setTimeout(() => {
      this.value = 20
    }, 10)
  }
}
</script>
