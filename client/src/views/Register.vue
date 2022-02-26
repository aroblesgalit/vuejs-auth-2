<template>
  <div>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <form @submit.prevent="formSubmit">
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
        v-model="confirm"
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    async formSubmit () {
      try {
        if (this.password !== this.confirm) {
          return alert('Please confirm password matches.')
        }

        await this.registerUser({
          username: this.username,
          password: this.password
        })

        await this.$router.push({ name: 'Login' })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style></style>
