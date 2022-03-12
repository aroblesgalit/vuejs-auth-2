import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: null,
    registration: null
  },
  mutations: {
    SET_USER: (state, payload) => (state.user = payload),
    SET_REGS: (state, payload) => (state.registration = payload)
  },
  actions: {
    // async registerUser ({ commit }, data) {
    //   try {
    //     await axios.post('http://localhost:3000/api/user/register', data)
    //     commit('SET_REGS', 'Congratulations! You have successfully registered.')
    //   } catch (err) {
    //     console.error(err)
    //     // commit('SET_REGS', 'Registration failed. Please try again later.')
    //   }
    // },
    registerUser ({ commit }, data) {
      axios
        .post('http://localhost:3000/api/user/register', data)
        .then(() =>
          commit(
            'SET_REGS',
            'Congratulations! You have successfully registered.'
          )
        )
        .catch(err => {
          console.error(err)
          commit('SET_REGS', 'Registration failed. Please try again later.')
        })
    },
    async loginUser ({ commit }, data) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/user/login',
          data
        )
        commit('SET_USER', response.data)
      } catch (err) {
        console.error(err)
      }
    },
    async logoutUser ({ commit }) {
      try {
        await axios.get('http://localhost:3000/api/user/logout')
        commit('SET_USER', null)
      } catch (err) {
        console.error(err)
      }
    }
    // async fetchUser () {
    //   try {
    //     const response = await axios.get('http://localhost:3000/api/user/auth')
    //     console.log(response)
    //     // commit('SET_USER', response.data)
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }
  },
  getters: {
    getUser: state => state.user,
    getRegs: state => state.registration
  }
})
