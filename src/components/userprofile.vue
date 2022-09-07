<template>
   
   <div class="container">
    <hr>
  <!-- <div class="row">
     <div class="col-md-2">
      <button> Go back</button>
     </div> 
  </div> -->
 <hr>
 <div class="row">
   <div v-if="userprofile">
   <div class="col-md-12 d-flex justify-content-center" >
     <img :src="userprofile.profilePic" alt="" class="rounded-circle" >
    </div>  
         
   <div class="row">
     <div  id="ouser" class="col-md-12">
        <h2>{{userprofile.username}}</h2>
    </div>
  </div>
  <div class="row"> 
    <div  id="fullname1" class="col-md-12">
        {{userprofile.fullname}}
    </div>
  </div> 
    <div class="row"> 
    <div  id="bio" class="col-md-12">
        {{userprofile.bio}}
    </div>
  </div>
  <div class="row"> 
    <div  id="bio" class="col-md-12">
        {{userprofile.userJob}}
    </div>
  </div>
      <div class="row"> 
    <div  id="links" class="col-md-12">
        {{userprofile.link}}
    </div>
 
</div>
 
      </div>
      </div>
   <div class="row" > 
    <br>
    <br>
    <hr>
    <br>
      <div class="row" >
    <div class="col-md-4"  v-for="post in userPosts" :key="post" :post="post">
     
       <img :src="post.img" alt="" id="upost" class="img-fluid" >
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
 export default{
props: ["id"],
computed: {
    user() {
        return this.$store.state.user
    },
    userPosts() {
        return this.$store.state.userPosts
    },
    userprofile(){
        return this.$store.state.userprofile
    }
},

mounted() {
    this.$store.dispatch("getUserprofile",this.id);
    this.$store.dispatch("getUserPosts", this.id);
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
.img-fluid{
  height: 400px;
  width:auto;
  margin-bottom:20px;
}
.img-fluid :hover{
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