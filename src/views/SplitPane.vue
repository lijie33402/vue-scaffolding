<template>
  <div class="split-pane-con">
    <!-- <split-pane v-model="offset"></split-pane> -->
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '@/components/split-pane'
export default {
  name: 'split_pane',
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.8
    }
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
.split-pane-con {
  width: 400px;
  height: 300px;
  background-color: aquamarine;
}
</style>
