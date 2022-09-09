<template>
   <div class="container" v-if="user">
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
  <!-- <div class="row">
    <div class="col-md-12"><label for=""> If you post isn't PG13 PLEASE click on the warning button</label></div>
          <div class="col-md-12"> 
            
        <button @click="warning()">warning</button>
         </div>
  </div> -->
  <div class="row">
    <div class="col-md-12"> 
      <div id="submit"><button id="submit"> Submit</button> 
        </div>
         </div>
        
  </div>
</form>
<hr>
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
    warning(){
      document.getElementById("img2").style.filter="blur(10px)";
    }
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
@media screen  and (max-width: 768px){
  #caption{
    width:400px;
  }
  #img2{
    width: 400px;
  }
  #tag1{
    width: 400px;
  }
}
@media screen  and (max-width: 534px){
  #caption{
    width:280px;
  }
  #img2{
    width: 280px;
  }
  #tag1{
    width: 280px;
  }
}
@media screen  and (max-width: 325px){
  #caption{
    width:250px;
  }
  #img2{
    width: 250px;
  }
  #tag1{
    width: 250px;
  }
}
</style>
