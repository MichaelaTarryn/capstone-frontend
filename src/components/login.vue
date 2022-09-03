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
       <button  id="signup" class=button type="btn" @click="Signup"> SIGN UP</button> 
    </div>
     
        
    </form>
    
   


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
    height:50vh;
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

.names{
    margin-top: 100px;
    max-width:80px;
}
#signin{
    height: 50px;
    margin-top: 19px;
    margin-bottom:10px ;
    width:120px;
    justify-content:space-evenly;
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
</style>