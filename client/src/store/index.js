import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null,
    isLoggedIn: false,
    registration: null
  },
  mutations: {
    SET_USER: (state, payload) => (state.user = payload),
    SET_AUTH: (state, payload) => (state.isLoggedIn = payload),
    SET_REGS: (state, payload) => (state.registration = payload)
  },
  actions: {
    async registerUser ({ commit }, data) {
      try {
        await axios.post('http://localhost:3000/api/user/register', data)
        commit('SET_REGS', 'success')
      } catch (err) {
        console.error(err)
        commit('SET_REGS', 'fail')
      }
    },
    async loginUser ({ commit }, data) {
      try {
        await axios.post('http://localhost:3000/api/user/login', data)
        commit('SET_AUTH', true)
      } catch (err) {
        console.error(err)
      }
    },
    async fetchUser ({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/user')
        commit('SET_USER', response.data)
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    getUser: state => state.user,
    getAuth: state => state.isLoggedIn,
    getRegs: state => state.registration
  }
})
