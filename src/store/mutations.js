import Vue from 'vue'

const mutations = {
  SET_STATE_VALUE (state, params) {
    state.stateValue = params
  },
  SET_APP_NAME (state, params) {
    state.appName = params
  },
  SET_APP_VERSION (state) {
    // 如果一开始并没有一个属性值，必须使用vue的set方法去更新
    Vue.set(state, 'appVersion', 'v2.0')
  }
}
export default mutations
