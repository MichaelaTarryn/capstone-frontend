<template>
   <div class="container" v-if="user">
     <div class="row">
    <div  id=logo class="col-md-2">
      <h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
    </div>
    <div  id="searches" class="col-md-2">
   <router-link class="nav-link" to="/search">search followers </router-link>

    </div>
    <div  id="searches" class="col-md-2">
  <router-link class="nav-link" to="/addapost">Add a Post</router-link>
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
  <hr>
  <div class="row">
    <div id="first" class="col-md-2">
<button class="btn" @click="Goback">Go back</button>
    </div>
    <hr>
  </div>

  <form @submit.prevent="addPost">
    <div class="row">
    <div class="col-md-12"> 
      <div id="imgupload">  <label for=""> Enter img url  please:</label>
        </div>
         </div>
  </div>
    <div class="row">
    <div class="col-md-12"> 
        <input type="text" id="img2" name="img"  placeholder="img url ......" v-model="img">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
       <label for=""> Enter caption please :</label>
         </div>
          <div class="col-md-12"> 
        <input type="text" id="caption" name="caption" placeholder="Write caption ......" v-model="caption">
         </div>
  </div>
  <div class="row">
          <div class="col-md-12"> 
            <div class="col-md-12"> <label for=""> People Tag :</label></div>
           
        <input type="text" id="tag1" name="tag1" placeholder="Enter people you want to tag.." v-model="peopleTag">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"><label for=""> Add location</label></div>
          <div class="col-md-12"> 
            
        <input type="text" id="tag1" name="tag1" placeholder="Enter the location you want to tag in.." v-model="addlocation">
         </div>
  </div>
  <div class="row">
    <div class="col-md-12"> 
      <div id="submit"><button id="submit" @click="addPost"> Submit</button> 
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
 methods: {
    Goback() {
      this.$store.dispatch("Goback");
    },
    addPost() {
      return this.$store.dispatch("addPost", {
        img: this.img,
        caption: this.caption,
        addlocation: this.addlocation,
        peopleTag: this.peopleTag
      });
    },
  },

  computed:{
    user() {
      return this.$store.state.user;
    },
    getPost() {
      return this.$store.state.post;
    },
  }
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

#caption{
  margin-left:30px;
  width:530px;
  height:90px;
  margin-bottom:20px;
  margin-top:5px;
}
#tag1{
  margin-top:13px;
  margin-left:30px;
  width:530px;
  height:40px;
  margin-bottom:20px;
}
#img2{
  margin-top:13px;
  margin-left:30px;
  width:530px;
  height:40px;
  margin-bottom:20px;
}
#imgupload{
  margin-top: 45px;
  justify-content: space-evenly;
}
#submit{
  /* margin:auto; */
  height:60px;
  width:90px;
  margin:auto;
}
 /*code to change background color*/
 .nav-link:active {
            color: rgb(247, 252, 247);
        }

  .nav-link:visited {
  color: rgb(11, 11, 11);
}
.nav-link:hover{
    color: rgb(198, 134, 134);
    text-decoration-line: underline;
    border-bottom-color: #abcdef;

}
.active, .nav-link {
  color: rgb(198, 134, 134);
}
h5{
color: rgb(198, 134, 134);
}
#FOOTER{
  MARGIN-TOP:40PX;
}
</style>
