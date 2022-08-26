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
  <router-link class="nav-link" to="/addapost">Add a Post</router-link>
    </div>
    <div id="searches" class="col-md-3">
        <router-link class="nav-link" to="/profile">View profile</router-link>
    </div>
  </div>
  <hr>
  <div class="row">
    <div id="first" class="col-md-2">
<button class="btn" @click="Goback1">Go back  {{user.username}} if you want too</button>
    </div>
    <hr>
  </div>
  <form action="" class="editline">
  <div class="row">
 
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">Fullname:</label>
 </div>
 <div class="col-md-12"> 
        <input type="text" id="fullname" name="fullname" v-model="fullname">
 </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">Username:</label>
 </div>
          <div class="col-md-12"> 
        <input type="text" id="username" name="username" v-model="username">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">ProfilePic:</label>
 </div>
          <div class="col-md-12"> 
        <input type="text" id="profilePic" name="profilePic" v-model="profilePic">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">Bio:</label>
 </div>
          <div class="col-md-12"> 
        <input type="text" id="bio" name="bio" v-model="bio">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
      <div id="submit"><button id="submit">saved changes</button> 
        </div>
         </div>
  </div>
  </form>
<hr>

  <DIV ID="FOOTER">Copyright @2022 MIMIGRAM.All RIGHT RESERVED </DIV>
  </div>
</template>

<script>
export default {
    computed: {
    user() {
        return this.$store.state.user
    },
    },

 methods: {
    Goback1() {
      this.$store.dispatch("Goback1");
    },
  },
}
</script>

<style scoped>
.container{
    min-height:fit-content;
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
#img{
    height:50px;
    width:60px;
    margin-left:170px;
    margin-bottom: 5px;
}
#tag{
    height:50px;
    width:90px;
    margin-left:190px;
    margin-bottom: 15px;
}
 

#username{
    width:390px;
}
#fullname{
    width:390px;
}
#bio{
    width:390px;
    margin-bottom: 20px;
}
#profilePic{
    width:390px;
}
#submit{
  margin-top:50px;
  margin:auto;
  height:60px;
  width:200px;
  margin-bottom: 40px;
}
#FOOTER{
  MARGIN-TOP:40PX;
}

.editline{
line-height: 50px;
min-height: fit-content;
}
</style>