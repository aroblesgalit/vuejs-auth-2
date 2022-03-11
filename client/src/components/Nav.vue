<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a v-if="user" class="nav-link" href="#" @click="handleLogout"
              >Logout</a
            >
            <router-link v-else class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!user" class="nav-link" to="/register"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Nav',
  methods: {
    ...mapActions(['logoutUser']),
    async handleLogout () {
      try {
        await this.logoutUser()
        await this.$router.push({ name: 'Login' })
      } catch (err) {
        console.error(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped></style>
