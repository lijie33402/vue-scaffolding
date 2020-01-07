<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lijie'
    }
  },
  befroeRouteUpdate (to, from, next) {
    // 页面已经渲染可以使用vue实例 this
  }
}
</script>
