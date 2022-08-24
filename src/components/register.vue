<template>
  <div class="container">
    <div id="names"><h1>𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h1>
    <h5>Please register if you not a user yet ✌</h5>
    </div>
    <form @submit.prevent="register"> 
    <input type="text" id="name" placeholder="Please enter your Full Name...." v-model="fullname" required>
    <br>
    <input type="gmail" id="gmail" placeholder="Please enter your gmail.." v-model="gmail" required>
    <br>
    <input type="text" id="username" placeholder="Please create yourself a username.." v-model="username" required>
    <br>
     <input type="password" id="password" placeholder="Enter password.." v-model="password" required>
    <br>
    <div >
        <button id="signin" type="btn" @click="register"> Submit</button> 
        <button id="signin" type="btn" > Sign up</button></div>
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
    };
 },
 methods:{
    register(){
        return this.$store.dispatch("register",{
            fullname:this.fullname,
            email:this.email,
            password:this.password,
            username:this.username,
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
#signin{
    height: 50px;
    margin-top: 19px;
    margin-bottom:10px ;
    width:80px;
    justify-content:space-evenly;
    margin-right:15px; 
    background-color: rgb(83, 69, 79);
}
#signup{
    height: 50px;
    margin-bottom:10px ;
    width:80px;
    justify-content:space-evenly;
}
</style>