<template>
  <div>
    <h1>Home</h1>
    <p v-if="user">{{ user }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['fetchUser'])
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.fetchUser()
  }
}
</script>

<style></style>
