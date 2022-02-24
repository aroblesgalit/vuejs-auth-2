<template>
  <form>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <form @submit="onSubmit">
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
      <input
        v-model="confirmPassword"
        type="password"
        class="form-control"
        placeholder="confirm password"
        required
      />

      <input
        class="w-100 btn btn-lg btn-primary"
        type="submit"
        value="Register"
      />
    </form>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    onSubmit (e) {
      e.preventDefault()

      if (this.password !== this.confirmPassword) return

      this.registerUser({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style></style>
