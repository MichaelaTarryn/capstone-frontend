<template>
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
  <div class="container">
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
</nav>
</div> 
<hr/>
</div>
</template>

<script>
export default {
computed:{
  user() {
      return this.$store.state.user;
    },
}
}
</script>

<style scoped>
  .container {
  width: auto;
 min-height:fit-content;
  background-color: rgb(250, 246, 246);
}
#logo {
  margin-top: 20px;
  padding: auto;
  height: 30px;
}
hr{
        height: 2px;
        background-color: rgb(198, 134, 134);
        border: none;
    }

#searches {
  margin-left:30px;
  margin-top: 8px;
  padding: auto;
  height: 30px;
}
#searches1 {
  margin-left:40px;
  margin-top: 8px;
  padding: auto;
  height: 30px;
}
#searches2 {
  margin-left:20px;
  margin-top: 8px;
  padding: auto;
  height: 30px;
}
h5{
color: rgb(198, 134, 134);
margin-left: 20px;
}
.nav-link:hover{
    color: rgb(198, 134, 134);
    text-decoration-line: underline;
    border-bottom-color: #abcdef;

}
</style>