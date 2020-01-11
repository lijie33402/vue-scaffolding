<template>
  <div>
    <a-input v-model="inputValue" />
    <p>{{ inputValue }} last letter is {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>{{ appName }}, appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}, firstLetter is {{ firstLetter }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState } from 'vuex'
export default {
  name: 'store',
  data() {
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
    appName() {
      return this.$store.state.appName
    },
    appNameWithVersion() {
      return this.$store.getters.appNameWithVersion
    },
    firstLetter() {
      return this.$store.getters.firstLetter
    },
    userName() {
      return this.$store.state.user.userName
    },
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1)
    }
  }
}
</script>
