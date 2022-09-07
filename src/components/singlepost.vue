<template>
  <div class="container">

    <div class="row">
      <div class="col-md-3">
        <!-- <router-link
          :to="{ name: 'profile', params: { id: user.id } }"
          class="nav-link"
          >go back</router-link

        > -->
        <router-link class="nav-link" to="/search"> Go back </router-link>
      </div>
    </div>
    <hr />

    <div class="container">
      <!--  <div class="row" v-if="userSinglePosts">
    <div class="col-md-6" v-for="userSinglepost in  userSinglePosts"
        :key="userSinglepost">
    </div>
    <div class="col-md-12"> 
      {{userSinglePosts}}  
    </div>
    <div class="col-md-12">
      <img id="userpic"  class="img-fluid" :src="userSinglePosts.img" alt="">
    </div>
    <div  id="details" class="col-md-8">
      {{userSinglePosts.username}}
    <button id="likes" @click="this.$store.dispatch('Addlike',userSinglePosts)"><i class="bi bi-star"></i></button > 
      {{userSinglePosts.likes}}
      <button
     
      type="button"
      class="btn"
      data-bs-toggle="modal"
      :data-bs-target="'#edit'+userSinglePosts.postId"
    >
    Edit Post
    </button> 
    <button btn="btn" type="button" id="btnD" @click="this.$store.dispatch('deletePost',userSinglePosts)"> Delete post</button>
     Modal  
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
            data-bs-dismiss="modal" @click="this.$store.dispatch('EditPost', userSinglePosts)"
            
          >
            <i class="bi bi-plus-circle"></i>
            Edit Product
          </button>

        </div>
      </div>
    </div>
  </div> 
       </div>
       
       
  </div> -->

      <div class="row" v-if="getUserpostswithoutComments">
        <div class="col-md-6"></div>
        <div class="col-md-12">
          <!-- {{ getUserpostswithoutComments }} -->
        </div>
        <div class="col-md-12">
          <h3> This post was created by <router-link  :to="{ name: 'userprofile', params: { id: getUserpostswithoutComments.userId } }"
                >{{ getUserpostswithoutComments.username }} </router-link
              ></h3>
          
        </div>
        <div class="col-md-12">
          <img
            id="userpic"
            class="img-fluid"
            :src="getUserpostswithoutComments.img"
            alt=""
          />
        </div>
        <div id="details" class="col-md-8">
          <button
            id="likes"
            @click="
              this.$store.dispatch('Addlike', getUserpostswithoutComments)
            "
          >
            <i class="bi bi-star"></i>
          </button>
          {{ getUserpostswithoutComments.likes }}
          <button 
            type="button"
            class="btn"
            data-bs-toggle="modal"
            :data-bs-target="'#edit' + getUserpostswithoutComments.postId"
          >
            Edit Post
          </button>
          <button 
            btn="btn"
            type="button"
            id="btnD"
            @click="
              this.$store.dispatch('deletePost', getUserpostswithoutComments)
            "
          >
            Delete post
          </button>
          <!-- Modal -->
          <div
            class="modal fade"
            :id="'edit' + getUserpostswithoutComments.postId"
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
                    <input
                      type="name"
                      maxlength="20"
                      required
                      id="add-title"
                      v-model="getUserpostswithoutComments.img"
                    />
                  </div>
                  <div>
                    <label for="price">caption: </label>
                    <input
                      type="name"
                      required
                      id="add-caption"
                      v-model="getUserpostswithoutComments.caption"
                    />
                  </div>
                  <div>
                    <label for="img">People tag: </label>
                    <input
                      type="name"
                      required
                      id="add-People"
                      v-model="getUserpostswithoutComments.peopleTag"
                    />
                  </div>
                  <div>
                    <div>
                      <label for="name">Add location: </label>
                      <input
                        type="text"
                        required
                        id="add-location"
                        v-model="getUserpostswithoutComments.addlocation"
                      />
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
                    data-bs-dismiss="modal"
                    @click="
                      this.$store.dispatch(
                        'EditPost',
                        getUserpostswithoutComments
                      )
                    "
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
        <div class="row" v-for="comment in userSinglePosts" :key="comment">
          {{comment.post_user}}
          <div id="usercomment" class="col">
            <!-- <label id="usercomment1" for="">{{comment.username}}</label> : -->
            <input
            class="col-md-2"
              type="text"
              name=""
              id="usercomment1"
              v-model="comment.username"
              disabled
            />
            <input
            class="col-md-3"
              type="text"
              name=""
              v-model="comment.description"
              :id="'comments' + comment.commentId"
              disabled
            />

            <button 
            class="col-md-2 ms-5"
              id="remove"
              @click="this.$store.dispatch('deleteComment', comment)"
            >
              Remove comment
            </button>

            <button 
            class="col-md-2"
            id="btnedit1" @click="edit(comment.commentId)">
             Edit comment
            </button>

            <button 
            class="col-md-2"
              id="edit1"
              @click="this.$store.dispatch('EditComment', comment)"
            >
              Submit changes
            </button>
          </div>
        </div>
      </div>
    
      <div class="row">
        <div>
          <div id="commentM" class="col-md-10">
            <input
              type="text"
              id="username"
              placeholder="Username"
              v-model="user.username"
              disabled
            />

            <input
              type="text" id="description1"
              placeholder="Enter comment"
              v-model="description"
            />
            <button id="addcomment" @click="addComment">Submit comment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      img: "",
      caption: "",
      peopleTag: "",
      addlocation: "",
      description: "",
      likes: 0,
      on: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userPosts() {
      return this.$store.state.userPosts;
    },
    userSinglePosts() {
      return this.$store.state.userSinglePosts;
    },
    getUserpostswithoutComments() {
      return this.$store.state.userSinglePostswithoutcomments;
    },
    me() {
      return this.$store.state.me;
    },
  },
  mounted() {
    this.$store.dispatch("getUserSinglePost", this.$route.params.id);
      this.$store.dispatch(
        "getUserpostswithoutComments",
        this.$route.params.id
      );
      this.$store.dispatch("getPost");
      this.$store.dispatch("checkme");
  },

  methods: {
    update() {
      this.$store.dispatch("EditPost", this.post);
    },
    edit(i) {
      document.getElementById("comments" + i).disabled = this.on;
      document.getElementById("btnedit1").style.display = "none";
      document.getElementById("comments" + i).focus();
      this.on = !this.on;
      // this.$store.dispatch('EditComment',comment)
    },
    addComment() {
      return this.$store.dispatch("addComment", {
        description: this.description,
        post: this.id,
      });
    },
  },
};
</script>

<style scoped>
.container {
  min-height: fit-content;
  background-color: rgb(250, 246, 246);
  /* background-color: rgb(179, 126, 126); */
}

#username {
  margin-top: 20px;
  margin: auto;
  float: left;
  margin-left:100px;
}

#description1{
  width:300px;
  float: left;
}

h5 {
  color: rgb(198, 134, 134);
}
.img-fluid {
  height: auto;
  width: 350px;
  margin-bottom: 20px;
}
#likes {
  margin-left: 20px;
  height: 30px;
  background-color: rgb(179, 126, 126);
}
#commentM {

  background-color: rgb(255, 253, 253);
  border: 2px solid rgb(179, 126, 126);
  margin: auto; 
   margin-top:20px;
   padding-bottom: 10px;
   align-content: center;
   padding:30px;
}
#edit {
  float: right;
}
#details {
  margin: auto;
}
#add-caption {
  margin-top: 20px;
}
#add-location {
  margin-top: 20px;
}
#add-People {
  margin-top: 20px;
}
 #usercomment {
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  background-color: rgb(236, 226, 226);
  border: 2px solid rgb(97, 92, 92);
  align-content: center;
} 
/* #usercomment1 {
  margin-top: 20px;
  background-color: rgb(236, 226, 226);
  margin-bottom: 20px;

} */

/* #comments {
  margin-bottom: 20px;

  align-content: center;
} */

/* #remove {
  margin-top: 20px;
  display: flex;
  float: right;
}
#btnedit1{
  margin-top: 20px;
  display: flex;
  float: right;
}
#edit1 {
  margin-top: 20px;
  display: flex;
  float: right;
} */

#btnD {
  width: 160px;
  margin-left: 120px;
}

@media screen and (max-width:1200px){
  #usercomment{
    height:90px;
  }
}
</style>
