<template>
    <div class="container" v-if="user">
     <hr/>
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
     <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000" id="mission2" >
        To solve three simple problems: Mobile photos always come out looking mediocre. Our awesome looking filters transform your photos into professional-looking snapshots. Sharing on multiple platforms is a pain – we help you take a picture once, then share it (instantly) on multiple services
     
      </div>
    </div>
    <div class="row">
    
     <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000" id="header1" >
      To capture and share the world's moments.” Instagram branding revolves around creating visual impressions that leave its clients with long-lasting memories, and this is what this mission statement alludes to. It can be associated with the following components. Sharing of ideas.
      </div>
      <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000" id="mission" >
     <h1> MISSION OF  𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h1>
     </div>
     
    </div>
    </div>

  </div>
  <div v-else> <h1> Please login in , thank you</h1>
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

@media screen and (max-width:992px){
  #vision1{
    margin-top: 40px;
  }
  #mission{
    margin-top:60px;
  }
  }
  @media screen and (max-width:769px){
    #mission2{
    margin-bottom:60px;
  }
  }
  @media screen and (max-width:768px){
  #header{
    margin-top:20xp;
    border-right: var(--color-);
  }
  #mission2{
    margin-bottom:50px;
  }
  #header1{
    margin-top:60px;
    border-right: var(--color-);
  }
   /* #vision1{
    margin-top: 40px;
  }  */
  #mission{
    margin-top:50px;
    margin-bottom: 20px;
    border-right: var(--color-);
  } 
  }
  @media screen and (max-width:560px){
  #mission{
    margin-top:10px;
  }
  }
  @media screen and (max-width:424px){

  h1{
    font-size: medium;
  }
  #mission2{
    margin-top:10px;
    font-size: medium;
  }
  #header{
    margin-top:20px;
  }
  #header1{
    margin-top:120px;
  }
  #para{
    font-size: medium;
  }
  #mission{
margin-bottom: 40px;
  }
  }
  @media screen and (max-width:350px){
    h1{
      margin-top:20px;
    }
    #header{
    padding:20px;
    }
    #header1{
    padding-top:120px;
    }
    #mission2{
    padding:25px;
    }
  }
  @media screen and (max-width:349px){
    h1{
      margin-top:20px;
    }
    #header{
    padding:20px;
    }
    #header1{
    padding-top:120px;
    }
    #mission2{
    padding:25px;
    }
  }
  @media screen and (max-width:307px){
    h1{
      margin-top:20px;
    }
    #header{
    padding:10px;
    }
    #header1{
    font-size:small
    }
    #para{
      font-size: small;
    }
    #mission2{
    padding:20px;
    font-size:small
    }
    #vision{
      font-size: small;
    }
  }

</style>