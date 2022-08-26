<template>

<div class="container" v-if="user">
<div class="row">
    <div  id=logo class="col-md-3">
      𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜
    </div>
    <div  id="searches" class="col-md-3">
   <router-link class="nav-link" to="/search">search followers </router-link>
    </div>
    <div  id="searches" class="col-md-3">
     <router-link class="nav-link" to="/addapost">Add a Post </router-link>
    </div>
    <div id="searches" class="col-md-3">
        <button id="logout" @click="Logout">Logout</button>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-md-3">
       <img :src="user.profilePic" alt="" class="rounded-circle" >
    </div>
     <div  id="ouser" class="col-md-6">
        <h2>{{user.username}}</h2>
    </div>
  </div>
  <div class="row"> 
    <div  id="fullname1" class="col-md-12">
        {{user.fullname}}
    </div>
  </div>
    <div class="row"> 
    <div  id="bio" class="col-md-12">
        {{user.bio}}
    </div>
  </div>
      <div class="row"> 
    <div  id="links" class="col-md-12">
        {{user.link}}
    </div>
  </div>
      <div class="row"> 
    <div  id="links" class="col-md-16">
        {{user.addlocation}}
    </div>
  </div>
   <div class="row" > 
    <div  id="links" class="col-md-12">
        <button  id="edit" type="btn" @click="edit"> Edit profile</button>
        <router-link
          :to="{ name: 'edit', params: { id: user.id }}"
          class="nav-link"
          >Edit</router-link
        >
    </div>
    <br>
    <br>
    <hr>
    <br>
      <div class="row" >
    <div class="col-md-4" v-for="post in userPosts" :key="post">
       <img :src="post.img" alt="" class="img-thumbnail" >
    </div>
  </div>
  </div>

  <div class="row">
  </div>
   <div ID="FOOTER">Copyright @2022 MIMIGRAM.All RIGHT RESERVED</div>
</div>

</template>

<script>
export default {
props: ["id"],
computed: {
    user() {
        return this.$store.state.user
    },
    userPosts() {
        return this.$store.state.userPosts
    } 
},
methods:{
  Logout(){
    this.$store.dispatch("Logout");
  },
  edit(){
    this.$store.dispatch("edit");
  }
},
mounted() {
    this.$store.dispatch("getUserPosts", this.id)
},
}
</script>

<style scoped>
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
.container{
    min-height:fit-content;
    background-color: rgb(179, 126, 126);
    
}
#fullname1{
    margin-top:30px;
}
#bio{
    margin-top:30px;

}
#links{
    margin-top:30px;
 
}
#edit{
    width:400px;
    margin-bottom: 10px;
}
.img-thumbnail{
  height: 370px;
  width:350px;
  margin-bottom:20px;
}
#FOOTER {
  padding: 20px;
}
.rounded-circle{
  height:80px;
}
#ouser{
  margin-top:20px;
  justify-content: baseline;
}
</style>