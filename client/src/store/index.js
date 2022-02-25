import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {},
    registration: null
  },
  mutations: {
    SET_USER: (state, payload) => (state.user = payload),
    SET_REGS: (state, payload) => (state.registration = payload)
  },
  actions: {
    async registerUser ({ commit }, data) {
      try {
        await axios.post('http://localhost:3000/api/user/register', data)
        commit('SET_REGS', 'success')
      } catch (err) {
        console.error(err)
        commit('SET_USER', 'fail')
      }
    }
  },
  getters: {
    getUser: state => state.user,
    getRegs: state => state.registration
  }
})
