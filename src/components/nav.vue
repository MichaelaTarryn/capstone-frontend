<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/register"
                    >Register</router-link
                  >
        </li>
           <li class="nav-item">
                  <router-link class="nav-link" to="/landing"
                    >Home</router-link
                  >
        </li>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>