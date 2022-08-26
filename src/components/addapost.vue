<template>
   <div class="container">
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
<button class="btn" @click="Goback">Go back</button>
    </div>
    <hr>
  </div>
  <div class="row">
    <div class="col-md-3"> 
      <div id="imgupload">  <button id="img"> img</button>
        <input type="file" id="img2" name="img" accept="image/*">
        </div>
       
         </div>
          <div class="col-md-8"> 
        <input type="text" id="caption" name="caption" placeholder="Write caption ......">
         </div>
  </div>
  <div class="row">
    <div class="col-md-3"> 
      <div id="imgupload">  <button id="tag"> tag people</button>
        </div>
         </div>
          <div class="col-md-8"> 
        <input type="text" id="tag1" name="tag1" placeholder="Enter people you want to tag..">
         </div>
  </div>
  <div class="row">
    <div class="col-md-3"> 
      <div id="imgupload">  <button id="tag"> add location</button>
        </div>
         </div>
          <div class="col-md-8"> 
        <input type="text" id="tag1" name="tag1" placeholder="Enter the location you want to tag in..">
         </div>
  </div>
  <div class="row">
    <div class="col-md-6"> 
      <div id="submit"><button id="submit"> Submit</button> 
        </div>
         </div>
  </div>
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
#img2{
  width:220px;
  margin-left:208px;
}
#caption{
  margin-left:30px;
  width:530px;
  height:90px;
  margin-bottom:20px;
  margin-top:50px;
}
#tag1{
  margin-top:43px;
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
  float:right;
  height:60px;
  width:90px;
}
#FOOTER{
  MARGIN-TOP:40PX;
}
</style>
