import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user)
  },
  actions: {
    async registerUser ({ commit }, data) {
      const response = await axios.post(
        'http://localhost:3000/api/user/register',
        data
      )

      commit('SET_USER', response.data)
    }
  },
  getters: {
    getUser: state => state.user
  }
})
