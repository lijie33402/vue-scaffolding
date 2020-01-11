const state = {
  userName: 'lijie'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  async updateUserName ({ commit, state, rooState, dispatch }) {
    dispatch('xxx', '')
  },
  xxx() {
    //
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
