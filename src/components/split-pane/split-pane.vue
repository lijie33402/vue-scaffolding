<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: this.triggerWidth / 2 }">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMousedown" :style="{ left: triggerLeft, width: `${triggerWidth}px` }"></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: this.triggerWidth / 2 }">
      <slot name="right"></slot>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'splitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 12
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    },
  },
  data () {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${ this.value * 100 }%`
    },
    triggerLeft () {
      return `calc(${ this.value * 100 }% - ${ this.triggerWidth / 2 }px)`
    }
  },
  methods: {
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMousemove (event) {
      if (!this.canMove) return 
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>

<style lang="less" scoped>
.split-pane-wrapper {
  position: relative;
  height: 100%;
  .pane {
    position: absolute;
    height: 100%;
    &-left {
      // width: 30%;
      background-color: rosybrown;
    }
    &-right {
      right: 0;
      bottom: 0;
      // left: 30%;
      background-color: blueviolet;
    }
    &-trigger-con {
      // width: 8px;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: red;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>