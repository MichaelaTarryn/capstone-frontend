<template>
   <div class="container">
    <div class="row">
      <div id="logo" class="col-md-2"><h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
      </div> 
      <div  id="searches" class="col-md-2">
   <router-link class="nav-link" to="/landing">Home</router-link>
    </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/search"
          >search followers
        </router-link>
      </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/addapost">Add a Post </router-link>
      </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/about">About Mimigram</router-link>
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
      <div class="container2">
        <div class="row"> 
          <div id="pl" class="col-md-3">
            <h3> Contact info</h3>
            <p> 314 Imam Haron Rd, Lansdowne, Cape Town, 7780</p>
          </div>
          <div  id="send" class="col-md-7">
            <h3>Send a message</h3>
          <div class="row p-1">
            <div class="col-md-6"> <input type="text" id="full" placeholder="FULLNAME">  </div>
            <div class="col-md-6"> <input type="text" id="gmail" placeholder="GMAIL"> </div>
          
          </div>
          <div class="row p-1">
            <div class="col-md-12"> <input type="text" name="" id="mes" placeholder="MESSAGE">  </div>

          </div>
          <div class="row p-1">
            <div class="col-md-12"> <button id="submit"> Submit</button>  </div>
          </div>
          </div>
          <div id="icons" class="col-md-2">
              <button id="li"><i class="bi bi-linkedin"></i></button>
              <button id="li1"><i class="bi bi-github"></i></button>
             </div>
        </div>
        <div class="row">
          
        </div>


    </div>
         
        
   
   </div>
    <div ID="FOOTER">Copyright @2022 MIMIGRAM.All RIGHT RESERVED</div>
 
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
#li{
  width:70px;
  height:60px;
}
#li1{
  width:70px;
  height:60px;
}
p{
  margin-top:40px;
}
h3{
  color: rgb(198, 134, 134);
  margin-left:60px;
}
#contact{
  background-color: blue;
  height:50vh;
}

.container2{
  padding: 60px;
height:70vh;

  
}
#header{
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
}
.container2{
  margin: auto;
  box-shadow: 5px 10px rgb(236, 186, 186);
}

#full{
  margin-top:30px;
  width: 300px;
  margin-bottom: 10px;
}
#gmail{
  width: 300px;
  margin-top:30px;
}
#mes{
  width: 645px;
  margin-bottom: 10px;
}
#submit{
  width: 645px;
  margin-bottom: 10px;
}

#pl{
  height:40vh;

}

#icons{

  margin-top:75px;
  display: flex;
  gap:30px;
}
</style>