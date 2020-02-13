<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{ food }}</p>
    <button @click="handleClick('back')">back</button>
    <button @click="handleClick('push')">push parent</button>
    <button @click="getInfo">请求数据</button>
    <img :src="imgSrc" /> -->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  data () {
    return {
      imgSrc: ''
    }
  },
  components: {
    HelloWorld
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('确定离开？')
    if (leave) next()
    else next(false)
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'lijie'
          }
        })
      }
    },
    getInfo () {
      getUserInfo({ userId: 123 }).then(res => {
        console.log(res)
        this.imgSrc = res.data.img
      })
    }
  }
}
</script>
<style lang="less">
.home{
  .ivu-col{
    height: 50px;
    margin-top: 10px;
    background: pink;
    background-clip: content-box;
  }
  .blue{
    .ivu-col{
      background: blue;
      background-clip: content-box;
    }
  }
}
</style>