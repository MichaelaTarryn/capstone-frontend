<template>
  <div class="container">
    <div id="names"><h1>𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h1>
    <h5>Please register if you not a user yet ✌</h5>
    </div>
    <form @submit.prevent="register"> 
    <input type="text" id="name" placeholder="Please enter your Full Name...." v-model="fullname" required>
    <br>
    <input type="email" id="gmail" placeholder="Please enter your gmail.." v-model="email" required>
    <br>
    <input type="text" id="username" placeholder="Please create yourself a username.." v-model="username" required>
    <br>
     <input type="password" id="password" placeholder="Enter password.." v-model="password" required>
    <br>
    <div >
        <button id="signin" type="btn"> Submit</button> 
        </div>
    </form>
   
  </div>
</template>

<script>
export default {
 data(){
    return {
        fullname:"",
        email:"",
        password:"",
        username:"",
        userRole:"",
    };
 },
 methods:{
    register(){
        return this.$store.dispatch("register",{
            fullname:this.fullname,
            email:this.email,
            password:this.password,
            username:this.username,
            userRole: this.userRole,
        });
    },
 },
 computed:{
    user(){
        return this.$store.state.user;
    },
 },
}
</script>

<style scoped>
.container{
    background-color: rgb(245, 235, 245);
    margin: auto;   
    height:60vh;
    width:660px;
    padding: 20px;
    margin-top:4%;

}
#name{
    margin-top: 10px;
    width:300px;
    text-align: center;
}
#gmail{
    margin-top: 20px;
    width:300px;
     text-align: center;
}
#password{
    margin-top: 20px;
    width:300px;
     text-align: center;
     margin-bottom:20px;

}
#username{
    margin-top: 20px;
    width:300px;
    text-align: center;
}
.names{
    margin-top: 100px;
    max-width:80px;
}


#signup{
    height: 50px;
    margin-bottom:10px ;
    width:80px;
    justify-content:space-evenly;

}
h1{
    color: rgb(198, 134, 134);
}

@media screen  and (max-width:576px){
    .container{
        width:450px;
    }
}
@media screen  and (max-width:465px){
    .container{
        width:350px;
    }
}
@media screen  and (max-width:355px){
    .container{
        width:290px;
    }
    #name{
        width:200px;
    }
    #gmail{
        width:200px;
    }
    #password{
        width:200px;
    }
    #username{
        width:200px;
    }
}
@media screen  and (max-width:300px){
    .container{
        width:250px;
    }
    #name{
        width:100px;
    }
    #gmail{
        width:100px;
    }
    #password{
        width:100px;
    }
    #username{
        width:100px;
    }
}
</style>