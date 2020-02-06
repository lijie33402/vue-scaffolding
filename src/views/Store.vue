<template>
  <div>
    <a-input v-model="stateValue" />
    <p>{{ stateValue }} last letter is {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>{{ appName }}, appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}, firstLetter is {{ firstLetter }}</p>
    <button @click="changeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName,
    // }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.$store.commit('SET_STATE_VALUE', value)
      }
    },
    appName () {
      return this.$store.state.appName
    },
    appVersion () {
      return this.$store.state.appVersion
    },
    // 这个地方使用getters是因为这个值可能在多个组件中都会使用，在单个组件中其实就是computed作用一样
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    firstLetter () {
      // 模块中定义的getters和mutations都是直接全局用就可以，只有state需要加上模块名
      return this.$store.getters.firstLetter
    },
    userName () {
      return this.$store.state.user.userName
    },
    inputValueLastLetter () {
      return this.stateValue.substr(-1, 1)
    }
  },
  methods: {
    changeAppName () {
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      this.$store.commit('SET_APP_VERSION')
      this.$store.commit('SET_USER_NAME', 'LIJIE')
      this.$store.dispatch('updateAppName')
    }
  }
}
</script>
