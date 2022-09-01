<template>
    <div class="container">
    <div class="row">
      <div id="logo" class="col-md-2"><h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
      </div> 
      <div  id="searches" class="col-md-1">
   <router-link class="nav-link" to="/landing">Home</router-link>
    </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/search"
          >search followers
        </router-link>
      </div>
      <div id="searches" class="col-md-1">
        <router-link class="nav-link" to="/addapost">Add a Post </router-link>
      </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/about">About Mimigram</router-link>
      </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/contact">Contact Mimigram</router-link>
      </div>
      <div v-if="user" id="searches" class="col-md-2">
        <router-link
          :to="{ name: 'profile', params: { id: user.id }}"
          class="nav-link"
          >View profile</router-link
        >
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-md-12">
        <h5> About MIMIGRAM</h5>
         <div id="para">
          Mimigram is a way to show beauty ,to spread the word to rally ,<br> to find community , bringing the whole world just at the end of a click.
         Founded in 2022 by Michaela Tarryn Ward.
        </div>
        <div class="col-md-12">
<div id="content">

        </div>
        </div>
        
      </div>
      <div class="col-md-12">
       
      </div>
    </div>
    <div ID="FOOTER">Copyright @2022 MIMIGRAM.All RIGHT RESERVED</div>
  </div>
</template>

<script>
export default {
    computed: {
    user() {
        return this.$store.state.user
    },

}
}
</script>

<style scoped>
.container {
 min-height:fit-content;
  background-color: rgb(250, 246, 246);
}
.row1 {
  display: flex;
}
#FOOTER {
  padding: 20px;
}
.nav-link:hover{
    color: rgb(198, 134, 134);
    text-decoration-line: underline;
    border-bottom-color: #abcdef;

}
hr{
        height: 2px;
        background-color: rgb(198, 134, 134);
        border: none;
    }
h5{
color: rgb(198, 134, 134);
}
 #para{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  margin: auto;
 }

#content{
height: 100vh;
  width: auto;
  background-image:url("https://i.postimg.cc/dt015qPr/social-media2.jpg");
  background-size:100% 100%;
  background-repeat: no-repeat;
}


</style>