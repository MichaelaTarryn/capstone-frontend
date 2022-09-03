<template>
    <div class="container">
    <!-- <div class="row">
      <div id="logo" class="col-md-2"><h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
      </div> 
      <div  id="searches" class="col-md-1">
   <router-link class="nav-link" to="/landing">Home</router-link>
    </div>
      <div id="searches" class="col-md-2">
        <router-link class="nav-link" to="/search"
          >search followers
        </router-link>
      </div>
      <div id="searches" class="col-md-1">
        <router-link class="nav-link" to="/addapost">Add a Post </router-link>
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
    <hr/> -->
    <div class="row">
      <div class="col-md-12">
        <h5> About MIMIGRAM</h5>
         <div id="para">
          Mimigram is a way to show beauty ,to spread the word to rally ,<br> to find community , bringing the whole world just at the end of a click.
         Founded in 2022 by Michaela Tarryn Ward.
        </div>
        <div class="col-md-12">
<div id="content">

        </div>
        </div>
        <div class="col-md-12"  >
          <div id="vision" data-aos="fade-up"
            data-aos-duration="2000"
           > Express yourself in new ways with the latest Instagram features. Connect with more people, build influence, and create compelling content that's distinctly yours.Share and grow your brand with our diverse, global community </div>
        </div>
        
      </div>
      <div class="row" id="vision1" >
      <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000" id="header" >
     <h1> VISION OF  𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h1>
     </div>
     <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000" >
        To solve three simple problems: Mobile photos always come out looking mediocre. Our awesome looking filters transform your photos into professional-looking snapshots. Sharing on multiple platforms is a pain – we help you take a picture once, then share it (instantly) on multiple services
     
      </div>
    </div>
    <div class="row">
    
     <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000" id="header1" >
      To capture and share the world's moments.” Instagram branding revolves around creating visual impressions that leave its clients with long-lasting memories, and this is what this mission statement alludes to. It can be associated with the following components. Sharing of ideas.
      </div>
      <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000" >
     <h1> MISSION OF  𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h1>
     </div>
     
    </div>
    </div>

  </div>
</template>

<script>
  import AOS from "aos";
export default {
  mounted(){
    AOS.init();
  },
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
#vision{
  margin-top:40px;
  height: 10vh;
  padding-bottom:40px;
}
#vision1{
  
  height: 20vh;
}
#header{
  text-align: center;
  border-right: 6px solid rgb(236, 186, 186);
 
}
#header1{
  border-right: 6px solid rgb(236, 186, 186);
}

#mission{
 height: 20;
}
hr{
        height: 2px;
        background-color: rgb(198, 134, 134);
        border: none;
    }
h5{
color: rgb(198, 134, 134);
}
h1{
color: rgb(198, 134, 134);
}
 #para{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  margin: auto;
  margin-bottom: 20px;
 }

#content{
height: 100vh;
  width: auto;
  background-image:url("https://i.postimg.cc/dt015qPr/social-media2.jpg");
  background-size:100% 100%;
  background-repeat: no-repeat;
}


</style>