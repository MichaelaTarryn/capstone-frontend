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
      <select class="form-select" id="like" @change="sortLike">
        <option value="All">Sort By Likes</option>
        <option value="asc">Lowest To Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>
      </div>
      <div class="col-md-4">
      <select class="form-select" id="CAPTION2" @change="sorta" v-model="name">
        <option value="All">Sort By alphabetically</option>
        <option value="asc">Z To A</option>
        <option value="desc">A to Z</option>
      </select>
  
      </div>
      <hr />
    </div>
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
          <button @click="this.$store.dispatch('checkme')"> View more</button>
      
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
  <div v-else> <div class="loader"><h5> Please login in , thank you</h5></div>
  </div>

  
</template>

<script>

export default {
  data() {
    return {
      search: "",
      asc: true,
     name:"All",
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
           let up = this.name;
           if (up === "asc") {
        this.$store.state.post.sort((a, b) => {
          b.caption > a.caption
           return -1;
        
        });
      } else {
        this.$store.state.post.sort((a, b) => {
         a.caption  > b.caption
          return -1;
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
/* @media screen and (max-width:1318px){
    .card-img-top{
      height:20vw;
    }
  
  }
  @media screen and (max-width:981px){
    .card-img-top{
      objext:20vw;
    }
  
  } */

  .loader {
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;
}

.loader:before {
  content: '';
  width: 48px;
  height: 5px;
  background: #f0808050;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}

.loader:after {
  content: '';
  width: 100%;
  height: 100%;
  background: #f08080;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow324 {

  0%,
    100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1);
  }
}
</style>
