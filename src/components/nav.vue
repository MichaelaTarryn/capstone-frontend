<template>
  <nav class="container navbar navbar-expand-lg bg-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-around"
        id="navbarNav"
      >
      
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link"  to="/landing">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/search">search followers </router-link>
            </li>

            
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Mimigram</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact Mimigram</router-link>
            </li>
            
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" :to="{ name: 'profile', params: { id: user.id } }"
                >View profile</router-link
              >
            </li>
            
          </ul>
        </div>
      </div>
   
  </nav>

</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.container {

  min-height: fit-content;
  background-color: rgb(250, 246, 246);
}
#logo {
  margin-top: 20px;
  padding: auto;
  height: 30px;
}

.navbar-brand {
  color: rgb(198, 134, 134);
  margin-left: 20px;
  margin-bottom: 10px;
}

hr {
  height: 2px;
  background-color: rgb(198, 134, 134);
  border: none;
}

nav a:hover {
  color: rgb(198, 134, 134) !important;
}


.nav-link:hover {
  color: rgb(198, 134, 134);
  text-decoration-line: underline;
  border-bottom-color: #abcdef;
}
</style>
