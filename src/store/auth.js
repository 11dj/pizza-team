const state = {
  user: {},
  isUserLoggedIn: false,
  isLoading: 0,
  userAddress: '',
  userName: '',
  tokenBalance: 0,
  playerInfo: 'You haven\'t registered',
};
const mutations = {
  isUserLoggedIn (state, payload) {
    console.log(` payload >> ${payload}`)
    state.isStaffLoggedIn = false
    state.isPlayerLoggedIn = true
  },
};

const actions = {
  async isUserLogin ({commit}, payload) {
    console.log(`actions isUserLogin >> ${payload}`)
    commit('isUserLogin', payload)
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
