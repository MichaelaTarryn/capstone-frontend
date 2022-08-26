<template>
  <div class="container" v-if="user">
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
      <div  id="searches" class="col-md-3">
        <router-link
          :to="{ name: 'profile', params: { id: user.id }}"
          class="nav-link"
          >View profile</router-link
        >
      </div>
    </div>
    <hr />
     <div class="row">
    <div id="first" class="col-md-2">
<button class="btn" @click="Goback">Go back</button>
    </div>
    <div id="search1" class="col-md-4">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-modal="search">
    </div>
    <hr>
  </div>
  <div id="results"  > 
    {{username}}
  </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            search:"",
        }
    },
 methods: {
    Goback() {
      this.$store.dispatch("Goback");
    },
  },
    computed: {
    user() {
        return this.$store.state.user
    } 
},
mounted(){
    this.$store.dispatch("GetUser");
}
}
</script>

<style scoped>
.container{
    height: 100vh;
    background-color: rgb(179, 126, 126);
}
#logo{
    margin-top: 20px;
    padding: auto;
    height:30px;
}
#searches{
    margin-top: 20px;
    padding: auto;
    height:30px;
}
#first{
    margin-bottom: 10px;
    margin-left:30px;
}
#search1{
    margin-left:90px;
}
</style>