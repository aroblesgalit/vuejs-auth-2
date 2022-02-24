<template>
  <form>
    <h1 class="h3 mb-3 fw-normal">Please log in</h1>

    <input type="text" class="form-control" placeholder="username" required />
    <input
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
export default {
  name: 'Login'
}
</script>

<style></style>
