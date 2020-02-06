<template>
  <div>
    <button @click="handleClick">click me!</button>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>
