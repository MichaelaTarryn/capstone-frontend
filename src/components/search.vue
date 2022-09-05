<template>
  <div class="container" v-if="user">

    <div class="row">
      <div id="first" class="col-md-2">
        <button class="btn" @click="Goback">Go back</button>
      </div>
      <div v-if="posts" class="col-md-3">
        <input
          class="form-control "
          type="search"
          placeholder="Enter CAPTION of post ..... please"
          aria-label="Search"
          v-model="search"
        />
      </div>
      <div class="col-md-3">
        <!-- <button id="filter" class="btn" type="button"> -->
      <select class="form-select" id="like" @change="sortLike">
        <option value="All">Sort By Likes</option>
        <option value="asc">Lowest To Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>
    <!-- </button> -->
      </div>
      <div class="col-md-4">
        <!-- <button  class="btn" type="button"> -->
      <select class="form-select" id="CAPTION2" @change="sorta">
        <option value="All">Sort By alphabetically</option>
        <option value="asc">Z To A</option>
        <option value="desc">A to Z</option>
      </select>
    <!-- </button> -->
      </div>
      <hr />
    </div>
    <!-- <div id="results">
    </div> -->
    <div class="" v-if="posts">
      <div class="row">
        <div class="card mx-auto m-3" v-for="post in posts"
        :key="post" style="width: 18rem;">
        <!-- <div class="col-md-4" > -->
  <img class="card-img-top img-fluid" :src="post.img" alt="Card image cap">
  <div class="card-body">
    <router-link
            :to="{ name: 'single', params: { id: post.postId} }"
          >
          <button> View more</button>
      
      </router-link>
    <p class="card-text">{{post.caption}}</p>
  <!-- </div> -->
</div>
        </div>
      </div> 
    </div>
   
    <div v-else>
      <h2>
         Loading ...  Your patients is deeply appreciated
    </h2></div>
  </div>
  <div v-else> <h1> Please login in , thank you</h1>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      search: "",
      asc: true,
    };
  },
  methods: {
    Goback() {
      this.$store.dispatch("Goback");
    },
    sortLike() {
      let up = document.getElementById("like").value;
      if (up === "asc") {
        this.$store.state.post.sort((a, b) => {
          return a.likes - b.likes;
        });
      } else {
        this.$store.state.post.sort((a, b) => {
          return b.likes - a.likes;
        });
      }
    },
    sorta() {
      // console.log("object");
           let up = document.getElementById("CAPTION2").value;
           if (up === "asc") {
        this.$store.state.post.sort((a, b) => {
          return b.caption > a.caption;
        });
      } else {
        this.$store.state.post.sort((a, b) => {
          return a.caption  > b.caption;
        });
      }

  }
},
  computed: {
    user() {
      return this.$store.state.user;
    },
    // posts() {
    //   return this.$store.state.post;
    // },
    posts() {
      return this.$store.state.post?.filter((post) => {
        let isMatch = true;
        if (!post.caption.toLowerCase().includes(this.search)) {
          isMatch = false;
        }
        return isMatch;
      });
    },

  },
  mounted() {
    this.$store.dispatch("GetUser");
    this.$store.dispatch("getPost");
  },
};
</script>

<style scoped>
.container {
  min-height:fit-content;
  /* height: 100vh; */
  background-color: rgb(250, 246, 246);
  /* background-color: rgb(179, 126, 126); */
}
#logo {
  margin-top: 20px;
  padding: auto;
  height: 30px;
}
#searches {
  margin-top: 20px;
  padding: auto;
  height: 30px;
}
#first {
  margin-bottom: 10px;
}
#CAPTION2{
  /* width:228px; */
}

.nav-link:hover {
  color: rgb(198, 134, 134);
  text-decoration-line: underline;
  border-bottom-color: #abcdef;
}
h5 {
  color: rgb(198, 134, 134);
}
.card{
  margin-left:60px;
  margin-bottom: 20px;
}
.card-img-top {
    width: 100%;
    height: 20vw;
   object-fit: cover; 
}
@media screen and (max-width:1318px){
    .card-img-top{
      height:20vw;
    }
  
  }
  @media screen and (max-width:981px){
    .card-img-top{
      objext:20vw;
    }
  
  }
</style>
