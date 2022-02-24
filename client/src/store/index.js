import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    newUser: (state, user) => (state.user = user)
  },
  actions: {
    async registerUser ({ commit }, data) {
      const response = await axios.post(
        'http://localhost:8080/api/user/register',
        data
      )

      commit('newUser', response.data)
    }
  },
  getters: {
    getUser: state => state.user
  }
})
