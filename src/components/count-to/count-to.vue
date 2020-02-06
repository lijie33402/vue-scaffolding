<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
  </div>
</template>

<script>
import CountUp from 'countup'
export default {
  computed: {
    eleId () {
      // _uid是组件唯一标识id
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: '.'
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      counter: {}
    }
  },
  methods: {
    getCount () {
      console.log(this.$refs.number.innerText)
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$emit('on-count-end', this.getCount())
      }, this.duration * 1000 + 5)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
    })
    setTimeout(() => {
      this.counter.start()
      this.emitEndEvent()
    }, this.delay)
  }
}
</script>
<style lang="less" scoped>
@import './count-to.less';
.count-to-number {
  color: aquamarine
}
</style>
