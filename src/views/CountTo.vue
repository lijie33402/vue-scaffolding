<template>
  <div>
    <count-to ref="count" @on-count-end="handleEnd" :end-val="endVal">
      <span slot="left">count:</span>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <button @click="updateNumber">更新数值</button>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 100
    }
  },
  methods: {
    getNumber () {
      // 父组件调用子组件内部方法
      return this.$refs.count.getCount()
    },
    updateNumber () {
      this.endVal += Math.random() * 100
    },
    handleEnd (number) {
      console.log(number)
    }
  }
}
</script>
