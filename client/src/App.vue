<template>
  <div>
    <Nav />
    <main class="form-signin">
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: { Nav }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input {
  margin-bottom: 10px;
}
</style>
