<template>
    <div class="container">
    <div id="names"><h1>𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h1>
    <h5> Welcome to Login ✌</h5>
    </div>
    <form @submit.prevent="login"> 
    <br>
    <input type="text" id="gmail" placeholder="Please enter your gmail.." v-model="email" required>
    <br>
     <input type="password" id="password" placeholder="Enter password.." v-model="password" required>
     <div id="buttons">
         <button  id="signin" class=button type="btn"> LOGIN</button> 
         </div>
        </form>
        <div class="butonSign">
            <label> If you don't have an account with 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜 please sign up </label> <br>
       <button   id="signup" class=button type="btn" @click="Signup"> SIGN UP</button>
        </div>
         
  
  </div>
</template>

<script>
export default {
 data(){
    return {
        email:"",
        password:"",
    }
 },
 methods:{
    login(){
        this.$store.dispatch("login",{
            email:this.email,
            password:this.password,
        });
    },
    Signup(){
        this.$store.dispatch("Signup");
    }
 },

 computed:{
    users(){
        return this.$store.state.users;
    }
 }
}
</script>

<style scoped>
.container{
    background-color: rgb(250, 246, 246);
    margin: auto;   
    height:fit-content;
    width:660px;
    padding: 20px;
    margin-top:4%;

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

}
#butonSign{
    display: flex;
    justify-content: space-between;
    }
.names{
    margin-top: 100px;
    max-width:80px;
}
#signin{
    height: 50px;
    margin-top: 19px;
    margin-bottom:10px ;
    width:120px;
    /* justify-content:space-evenly; */
    margin-right:15px; 
    background-color: rgb(83, 69, 79);
}
#signup{
    height: 50px;
    margin-top: 19px;
    margin-bottom:10px ;
    width:120px;
    justify-content:space-evenly;
    margin-right:15px; 
    background-color: rgb(83, 69, 79);
}

h1{
    color: rgb(198, 134, 134);
}

#buttons{
    display:flex;
    justify-content: center;
    gap:6px;
}
@media screen  and (max-width:576px){
    .container{
        width:450px;
    }
}
@media screen  and (max-width:468px){
    #password{
        margin-bottom: 10px;
    }
    .container{
        width:350px;
    }
}
@media screen  and (max-width:339px){
    .container{
        width:300px;
    }
    #gmail{
        width:260px;
    }
    #password{
        width:260px;
    }
}
/* @media screen  and (max-width:468px){
    .container{
        width:350px;
    }
} */
</style>