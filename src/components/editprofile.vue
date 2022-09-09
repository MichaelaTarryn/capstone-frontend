<template>
  <div class="container" v-if="user">
   <hr> 
  <div class="row">
    <div id="first" class="col-md-2">
      <router-link :to="{ name: 'profile', params: { id: user.id }}">
        <button class="btn">Go back  {{user.username}} if you want too</button>
      </router-link>
    </div>
    <hr>
  </div>
  <form action="" class="editline" @submit.prevent="updateUser">
  <div class="row">
 
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">Fullname:</label>
 </div>
 <div class="col-md-12"> 
        <input type="text" id="fullname" name="fullname" v-model="user.fullname">
 </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">Username:</label>
 </div>
          <div class="col-md-12"> 
        <input type="text" id="username" name="username" v-model="user.username">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">ProfilePic:</label>
 </div>
          <div class="col-md-12"> 
        <input type="text" id="profilePic" name="profilePic" v-model="user.profilePic">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">Bio:</label>
 </div>
          <div class="col-md-12"> 
        <input type="text" id="bio" name="bio" v-model="user.bio">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
    <label for="">Job Role:</label>
 </div>
          <div class="col-md-12"> 
        <input type="text" id="userJob" name="bio" v-model="user.userJob">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
      <div id="submit"><button id="submit"  @click="$store.dispatch('updateUser', user)"> saved changes</button> 
        </div>
         </div>
  </div>
  </form>
<hr>

  </div>
</template>

<script>
export default {
  props : ["user"],
  data (){
    return{
      fullname:"",
      username:"",
      profilePic:"https://i.postimg.cc/nhC2SmNk/pofile-pic.jpg",
      bio:"",
      userJob:"",
    }

  },
    computed: {
    user() {
        return this.$store.state.user
    },
    },

 methods: {
    Goback1() {
      this.$store.dispatch("Goback1", this.$route.params.id);
    },
  },
}
</script>

<style scoped>
.container{
    min-height:fit-content;
    background-color: rgb(250, 246, 246);
    /* background-color: rgb(179, 126, 126); */
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
.nav-link:hover{
    color: rgb(198, 134, 134);
    text-decoration-line: underline;
    border-bottom-color: #abcdef;

}

#username{
    width:390px;
    text-align: center;
}
#fullname{
    width:390px;
    text-align: center;
}
#bio{
    width:390px;
    margin-bottom: 20px;
    text-align: center;
}
#profilePic{
    width:390px;
}
#userJob{
    width:390px;
    text-align:center;
    margin-bottom: 20px;
}
#btn:hover{
  color: rgb(198, 134, 134);
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
h5{
color: rgb(198, 134, 134);
}
.editline{
line-height: 50px;
min-height: fit-content;
}
</style>