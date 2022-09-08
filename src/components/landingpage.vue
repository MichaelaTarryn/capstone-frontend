<template>
  <div class="container" v-if="user">
    <hr>
    <div class="row">
      <div id="storys" class="col-md-2" v-for="story in story" :key="story">
        <img :src="story.img" alt="..." class="rounded-circle" />
        <div><i class="bi bi-plus-square"></i></div>
        {{ story.username }}
      </div>
    </div>
    <hr/>
    <div v-if="landingposts"> 
    <div class="posts" v-for="landingpost in landingposts" :key="landingpost">
      <div class="row">
        <div class="col-sm-2">
          <img :src="landingpost.profile" id="profile" class="rounded-circle"  />{{
            landingpost.usernames
          }}
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-12">
          <img :src="landingpost.img" id="pimh"   class="img-fluid mx-auto" width="500" />
        </div>
        <br />
        <div class="row " >
          <div class="col-md-6" id="cpation" >
            <button type="btn" id="likes"><i class="bi bi-star"></i> Likes :{{ landingpost.likes }}   </button>
            
          </div>
          <div class="col-md-6 justify-content-start" id="ik">{{ landingpost.caption }}</div>
        </div>
      </div>
</div> 
      <hr />
    </div>
   
  </div>
  <!-- <div v-else>
        <loader/>
      </div> -->
  <div v-else> <h1> Please login in , thank you</h1>
  </div>
 
</template>

<script>
export default {
  computed: {
   
    story() {
      return this.$store.state.story;
    },
    landingposts() {
      return this.$store.state.landingposts;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.container {
  width: auto;
 min-height:fit-content;
  background-color: rgb(250, 246, 246);
}
.row1 {
  display: flex;
}
#FOOTER {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.bi bi-plus-square {
  position: absolute;
  left: 200px;
  top: 120px;
}
#profile {
  margin-left: 20px;
  width: 90px;
}
#ik{
  display: flex;
  justify-content: flex-start;
}
#pimh {
  height: auto;
  margin-bottom: 20px;
  margin-left:10%;
}
#storys{
padding-left:30px;
margin-top: 20px;
}

#likes {
  display: flex;
  width: 180px;
  margin-left: 64%;
  height: 30px;
  background-color: rgb(179, 126, 126);
}
#logo {
  margin-top: 20px;
  /* padding: auto; */
  height: 30px;
}

#searches {
  margin-top: 20px;
  padding: auto;
  height: 30px;
}
.rounded-circle {
  height: 90px;
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
margin-left: 20px;
}

@media screen and (max-width:993px){
    #likes{
      
      margin-left:50%;
    }
  
  }
  @media screen and (max-width:769px){
    #likes{
      margin-left:35%;
    }

    #ik{
      margin-left:35%;
    }
  
  }
  @media screen and (max-width:376px){
    #likes{
      margin-left:15%;
      margin-bottom: 5px;
    }

    #ik{
      margin-left:15%;
    }
  
  }
</style>
