<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">back</button>
    <button @click="handleClick('push')">push parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'lijie'
          }
        })
      }
    }
  }
}
</script>
