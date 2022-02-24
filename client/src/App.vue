<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>

        <div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Register</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="form-signin">
      <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <input
          type="text"
          class="form-control"
          placeholder="username"
          required
        />
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
    </main>
  </div>
</template>

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

.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
