<template>
   <div class="container" v-if="user"> 
  <hr/> 
      <div class="container2">
        <form  action="https://formspree.io/f/xayknzky"
  method="POST">
        <div class="row"> 
          <div id="pl" class="col-md-3">
            <h3> Contact info</h3>
            <p> 314 Imam Haron Rd, Lansdowne, Cape Town, 7780</p>
          </div>
          <div  id="send" class="col-md-7">
            <h3>Send a message</h3>
          <div class="row">
            <div><input type="text" id="full" name="fullname" placeholder="FULLNAME" required>  </div>  
            <div><input type="email" id="gmail" name="gmail" placeholder="GMAIL" required> </div>
          
            <div> <input type="text" name="message" id="mes" placeholder="MESSAGE" required>  </div>

            <div> <button id="submit"> Submit</button>  </div>
          </div>
          </div>
          <div id="icons" class="col-md-2">
              <button id="li"><i class="bi bi-linkedin"></i></button>
              <button id="li1"><i class="bi bi-github"></i></button>
             </div>
        </div>
        <div class="row">
          
        </div>

 </form>


    </div>
         
        
   </div>
   <div v-else> <h1> Please login in , thank you</h1>
  </div>
    
 
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
  border: 3px solid rgb(198, 134, 134);
}
#li1{
  width:70px;
  height:60px;
  border: 3px solid rgb(198, 134, 134);

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
  padding-top: 100px;
  padding-bottom: 200px;
height:auto;

  
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
#send{
  height:auto;

  border-right: 6px solid rgb(236, 186, 186);
}

#full{
  margin-top:10px;
  width: 100%;
}
#gmail{
  margin-top:10px;
  width: 100%;

}
#mes{
  margin-top:10px;
  width: 100%;
  margin-bottom: 10px;
}
#submit{
  width: 100%;
  margin-bottom: 10px;
  border: 2px solid rgb(198, 134, 134);
}

#pl{
  height:auto;
  padding:20px;
  border-right: 6px solid rgb(236, 186, 186);

}

#icons{

  margin-top:75px;
  display: flex;
  gap:30px;
}
@media screen and (max-width: 1400px) {
  /* For desktop: */
 
   #mes{
    margin-top:2px;

  } 
   #submit{
    width:300px;
  }
 
  }

  @media screen and (max-width:992px){
    h3{
      margin-left:1px;
    }
    #logo{
      display: none;
    }
  
  }
  @media screen and (max-width:766px) {
    #send,#pl{
    border-right: var(--color-);
  } 
  }
  @media screen  and (max-width:320px){
    #submit{
    width:200px;
  }
  }
   

</style>