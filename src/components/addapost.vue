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
      view profile
    </div>
  </div>
  <hr>
  <div class="row">
    <div id="first" class="col-md-2">
<button>Go back</button>
    </div>
  </div>
  <div class="row">
    <div class="col-md-2"> 
        <button id="img"> img</button>
         </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    height: 340vh;
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
}
#img{
    height:50px;
    width:50px;
}
</style>