<template>
  <div class="container">
    <div class="row">
    <div  id=logo class="col-md-2">
      <h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
    </div>
    <div  id="searches" class="col-md-2">
   <router-link class="nav-link" to="/landing">Home</router-link>
    </div>
    <div  id="searches" class="col-md-2">
   <router-link class="nav-link" to="/search">search followers </router-link>
    </div>
    
    <div  id="searches" class="col-md-2">
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
  <div class="row">
    <div class="col-md-4" >

    </div>
  </div>
  <hr>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
        return this.$store.state.user
    },
    userPosts() {
        return this.$store.state.userPosts
    } 
  },
  mounted(){
    this.$store.dispatch('getUserPosts', this.id)
  },
}
</script>

<style scoped> 
.container{
    min-height:fit-content;
    background-color: rgb(250, 246, 246);
    /* background-color: rgb(179, 126, 126); */
    
}
.nav-link:hover{
    color: rgb(198, 134, 134);
    text-decoration-line: underline;
    border-bottom-color: #abcdef;

}
h5{
color: rgb(198, 134, 134);
}
</style>