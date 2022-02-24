<template>
  <form>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input type="text" class="form-control" placeholder="username" required />
    <input
      type="password"
      class="form-control"
      placeholder="password"
      required
    />
    <input
      type="password"
      class="form-control"
      placeholder="confirm password"
      required
    />

    <button class="w-100 btn btn-lg btn-primary" type="submit">
      Sign in
    </button>
  </form>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style></style>
