<template>
  <form @submit.prevent="formSubmit">
    <h1 class="h3 mb-3 fw-normal">Please log in</h1>

    <input
      v-model="username"
      type="text"
      class="form-control"
      placeholder="username"
      required
    />
    <input
      v-model="password"
      type="password"
      class="form-control"
      placeholder="password"
      required
    />

    <button class="w-100 btn btn-lg btn-primary" type="submit">
      Sign in
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    async formSubmit () {
      try {
        await this.loginUser({
          username: this.username,
          password: this.password
        })
        await this.$router.push({ name: 'Home' })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style></style>
