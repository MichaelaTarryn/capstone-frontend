<template>
  <div class="container">
    <div class="row">
    <div  id=logo class="col-md-2">
      <h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
    </div>
    <div  id="searches" class="col-md-2">
   <router-link class="nav-link" to="/landing">Home</router-link>
    </div>
    <div  id="searches" class="col-md-2">
   <router-link class="nav-link" to="/search">search followers </router-link>
    </div>
    
    <div  id="searches" class="col-md-2">
     <router-link class="nav-link" to="/addapost">Add a Post </router-link>
    </div>
    <div v-if="user" id="searches" class="col-md-3">
        <router-link
          :to="{ name: 'profile', params: { id: user.id }}"
          class="nav-link"
          >View profile</router-link
        >
      </div>
  </div>
  
  <hr>
  </div>
  <div class="container">
    <div class="row" v-if="userSinglePosts">
    <div class="col-md-6" v-for="userSinglepost in  userSinglePosts"
        :key="userSinglepost">
    </div>
    <div class="col-md-12"> 
      {{userSinglePosts}} 
    </div>
    <div class="col-md-12">
      <img id="userpic"  class="img-fluid" :src="userSinglePosts.img" alt="">
    </div>
    <div  id="details" class="col-md-6">
      {{userSinglePosts.username}}
   <button id="likes"><i class="bi bi-star"></i></button>
      {{userSinglePosts.likes}}
      <button
     
      type="button"
      class="btn"
      data-bs-toggle="modal"
      :data-bs-target="'#edit'+userSinglePosts.postId"
    >
    Edit Post
    </button> 
    <!-- Modal --> 
  <div
    class="modal fade"
    :id="'edit'+userSinglePosts.postId"
    tabindex="-1"
    aria-labelledby="exampleModalLabe2"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Post</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="name">img: </label>
            <input type="name" maxlength="20" required id="add-title" v-model="userSinglePosts.img"/>
          </div>
          <div>
            <label for="price">caption: </label>
            <input type="name" required id="add-caption" v-model="userSinglePosts.caption"  />
          </div>
           <div>
            <label for="img">People tag: </label>
            <input type="name" required id="add-People" v-model="userSinglePosts.peopleTag"  />
          </div>
          <div>
            <div>
               <label for="name">Add location: </label>
            <input type="text" required id="add-location"   v-model="userSinglePosts.addlocation" />
            </div>
        
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="closeBtn" data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            id="Btn"
            data-bs-dismiss="modal" @click="$store.dispatch('EditPost')"
            
          >
            <i class="bi bi-plus-circle"></i>
            Edit Product
          </button>
        </div>
      </div>
    </div>
  </div> 
       </div>
       
  </div>
  <div class="row" v-if="userSinglePosts">
    <div id="usercomment" class="col-md-6">
     <label id="usercomment1" for="">{{userSinglePosts.username}}</label> :
    
     <label id="comments" for="">{{userSinglePosts.description}}</label> 
     <button id="remove"> Remove comment</button>
    
     
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      img: "",
      caption: "",
      peopleTag: "",
      addlocation: "",
      likes:0,
    }},
  computed: {
    user() {
        return this.$store.state.user
    },
    userPosts() {
        return this.$store.state.userPosts
    },
    userSinglePosts(){
      return this.$store.state.userSinglePosts
    }

  },
  mounted(){
    this.$store.dispatch('getUserSinglePost',this.$route.params.id),
    this.$store.dispatch('getPost');
  },
 
}
</script>

<style scoped> 
.container{
    min-height:fit-content;
    background-color: rgb(250, 246, 246);
    /* background-color: rgb(179, 126, 126); */
    
}
.nav-link:hover{
    color: rgb(198, 134, 134);
    text-decoration-line: underline;
    border-bottom-color: #abcdef;

}
h5{
color: rgb(198, 134, 134);
}
.img-fluid{
  height: 350px;
  width:350px;
  margin-bottom:20px;
}
#likes {
  margin-left: 20px;
  height: 30px;
  background-color: rgb(179, 126, 126);
}
#edit{
  float:right;
}
#details{
  margin: auto;
}
#add-caption{
  margin-top:20px;
}
#add-location{
  margin-top:20px;
}
#add-People{
  margin-top:20px;
}
#usercomment{
  margin:auto;
  margin-top:20px;
  background-color: rgb(236, 226, 226);
  border:2px solid rgb(97, 92, 92);
  align-content: center;
}
#usercomment1{
  margin-top:20px;
  background-color: rgb(236, 226, 226);
  margin-bottom: 20px;
}

#comments{
  margin-bottom:20px;
  
  align-content: center;
}

#remove{
  margin-top: 20px;
  display: flex;
 float:right;
}
</style>