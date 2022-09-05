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
        <!-- <div class="navbar-nav"> -->
          <!-- <div id="searches" class="col-md-2"> -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link"  to="/landing">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/search">search followers </router-link>
            </li>

            <!-- </div> -->
            <!-- <div class="col-md-2" id="searches"> -->
            <!-- </div> -->
            <!-- <div class="col-md-2" id="searches"> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Mimigram</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact Mimigram</router-link>
            </li>
            <!-- </div> -->
            <!-- <div class="col-md-2" id="searches"> -->
            <!-- </div> -->
            <!-- <div class="col-md-2" id="searches" v-if="user"> -->
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" :to="{ name: 'profile', params: { id: user.id } }"
                >View profile</router-link
              >
            </li>
            <!-- </div> -->
          </ul>
        </div>
      </div>
    <!-- </div> -->
  </nav>

  <!-- <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
  <!-- <div class="container">
     <div class="row">
      <div id="logo" class="col-md-3">𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</div>
      <div id="searches" class="col-md-3">
        <router-link class="nav-link" to="/search"
          >search followers
        </router-link>
      </div>
      <div id="searches" class="col-md-3">
        <router-link class="nav-link" to="/addapost">Add a Post </router-link>
      </div>
      <div v-if="user" id="searches" class="col-md-3">
        <router-link
          :to="{ name: 'profile', params: { id: user.id }}"
          class="nav-link"
          >View profile</router-link
        >
      </div>
    </div>
    <hr />
  </div> -->
  <!-- <div class="container">
<div class="row">
  <nav class="navbar navbar-expand-lg "  >
    <div id="logo" class="col-md-2">
    <h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
       
    </div>
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
 
     
<div id="searches" class="col-md-2 "  >

        <router-link class="nav-link" to="/landing">Home</router-link>
      
</div>
<div class="col-md-2" id="searches" >
  
        <router-link class="nav-link" to="/search"
          >search followers
        </router-link>
      
</div>
  <div class="col-md-2" id="searches" >
    
        <router-link class="nav-link" to="/about">About Mimigram</router-link>
   
  </div>
      <div class="col-md-2" id="searches">
      
        <router-link class="nav-link" to="/contact">Contact Mimigram</router-link>
    
     </div>
     <div class="col-md-2" id="searches" v-if="user">

    
 
        <router-link
          :to="{ name: 'profile', params: { id: user.id }}"
          class="nav-link"
          >View profile</router-link
        >
      
   </div>
   
  </div>
</nav
><hr/>
</div> 

</div> -->
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
/* #searches1 {
  margin-left: 40px;
  margin-top: 8px;
  padding: auto;
  height: 30px;
}
#searches {
  margin-left: 30px;
  margin-top: 8px;
  padding: auto;
  height: 30px;
} */
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

/* #searches2 {
  margin-left: 20px;
  margin-top: 8px;
  padding: auto;
  height: 30px;
} */

.nav-link:hover {
  color: rgb(198, 134, 134);
  text-decoration-line: underline;
  border-bottom-color: #abcdef;
}
</style>
