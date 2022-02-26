<template>
  <div>
    <h1>Home</h1>
    <p v-if="user">{{ user }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style></style>
