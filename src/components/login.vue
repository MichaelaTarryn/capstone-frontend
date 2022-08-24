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
    <br>
    <button  id="signin" class=button type="btn"> LOGIN</button>
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
    background-color: rgb(245, 235, 245);
    margin: auto;   
    height:50vh;
    width:660px;
    padding: 20px;

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
    width:80px;
    justify-content:space-evenly;
    margin-right:15px; 
    background-color: rgb(83, 69, 79);
}
</style>