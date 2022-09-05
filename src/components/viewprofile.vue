<template>

<div class="container" v-if="user">
<!-- <div class="row">
    <div  id=logo class="col-md-2">
      <h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
    </div>
    <div  id="searches" class="col-md-1">
   <router-link class="nav-link" to="/landing">Home</router-link>
    </div>
    <div  id="searches" class="col-md-2">
   <router-link class="nav-link" to="/search">search followers </router-link>
    </div>
    <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/about">About Mimigram</router-link>
      </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/contact">Contact Mimigram</router-link>
      </div>
    <div  id="searches" class="col-md-2">
     <router-link class="nav-link" to="/addapost">Add a Post </router-link>
    </div>
    <div id="buttons" class="col-md-11">
        <button id="logout" @click="Logout">Logout</button>
           <button id="Delete" @click="deleteuser">Delete Account</button>
    </div>
  </div>
   --><hr>
  <div class="row">
    <div class="col-md-2">
      <router-link class="nav-link" to="/addapost">Add a Post </router-link>
    </div>
    <div id="buttons" class="col-md-10">
        <button id="logout" @click="Logout">Logout</button>
           <button id="Delete" @click="deleteuser">Delete Account</button>
    </div>
  </div>
 <hr>
 <div class="row">
 
  <div class="col-md-12 d-flex justify-content-center" >
       <img :src="user.profilePic" alt="" class="rounded-circle"  >
    </div>
    
 </div>
  <div class="row">
     <div  id="ouser" class="col-md-12">
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
    <div  id="bio" class="col-md-12">
        {{user.userJob}}
    </div>
  </div>
      <div class="row"> 
    <div  id="links" class="col-md-12">
        {{user.link}}
    </div>
  </div>
      <div class="row"> 
    <div  id="links" class="col-md-12">
        {{user.addlocation}}
    </div>
  </div>
   <div class="row" > 
    <div  id="links" class="col-md-12">
      <button id="edit"><router-link
          :to="{ name: 'edit', params: { id: user.id }}"
          class="nav-link"
          >Edit Profile</router-link
        ></button>
        
    </div>
    <br>
    <br>
    <hr>
    <br>
      <div class="row" >
    <div class="col-md-4"  v-for="post in userPosts" :key="post" :post="post">
     
       <img :src="post.img" alt="" id="upost" class="img-thumbnail" >
       <div>
         <router-link
            :to="{ name: 'single', params: { id: post.postId} }"
          >
          <button id="view"> View more</button>
      
      </router-link>
       </div>
       
    </div>
  </div>
  </div>

  <div class="row">
  </div>
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
  },
  deleteuser(){
    this.$store.dispatch("deleteuser", this.id);
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
    background-color: rgb(250, 246, 246);
    /* background-color: rgb(179, 126, 126); */
    
}
#view{
  margin-bottom: 20px;
}
#fullname1{
    margin-top:30px;
}
#bio{
    margin-top:30px;

}
#box{
  background-color: rgb(228, 215, 215);
}
#links{
    margin-top:30px;
    margin-bottom: 10px;
 
}
#buttons{
  HEIGHT:30PX;
  display: flex;
  justify-content: flex-end;
  gap: 10PX;
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
.img-thumbnail :hover{
  opacity: 0.5;
}
#FOOTER {
  padding: 20px;
}
.rounded-circle{
  height:120px;
}
.nav-link:hover{
    color: rgb(198, 134, 134);
    text-decoration-line: underline;
    border-bottom-color: #abcdef;

}
h5{
color: rgb(198, 134, 134);
}
#upost:hover{
    opacity: 0.5;

}
#profile{
  background-color: rgb(228, 215, 215);
  height: auto;
  margin-bottom: 20px;
}
#ouser{
  margin-top:20px;
  justify-content: baseline;
}@media screen and (max-width:768px){
    #buttons{
      justify-content: center;
    }
  
  }
  @media screen and (max-width:445px){
   
  #edit{
    width:200px;
  }
  }
</style>