<template>
  <div class="container">
    <div class="row">
      <div id="logo" class="col-md-3"><h5> 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</h5>
      </div>
      <div id="searches" class="col-md-3">
        <router-link class="nav-link" to="/search"
          >search followers
        </router-link>
      </div>
      <div id="searches" class="col-md-3">
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
    <hr/>
    <div class="row">
      <div class="col-md-2" v-for="story in story" :key="story">
        <img :src="story.img" alt="..." class="rounded-circle" />
        <div><i class="bi bi-plus-square"></i></div>
        {{ story.username }}
      </div>
    </div>
    <hr/>
    <div class="posts" v-for="posts in posts" :key="posts">
      <div class="row">
        <div class="col-sm-2">
          <img :src="posts.profile" id="profile" class="rounded-circle" />{{
            posts.usernames
          }}
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-12">
          <img :src="posts.img" id="pimh"  class="img-fluid"/>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">
            <button type="btn" id="likes"><i class="bi bi-star"></i></button>
            Likes :{{ posts.likes }}
          </div>
          <div class="col-md-4">{{ posts.caption }}</div>
        </div>
      </div>
      <hr />
    </div>
    <div ID="FOOTER">Copyright @2022 MIMIGRAM.All RIGHT RESERVED</div>
  </div>
</template>

<script>
export default {
  computed: {
    story() {
      return this.$store.state.story;
    },
    posts() {
      return this.$store.state.posts;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
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
.bi bi-plus-square {
  position: absolute;
  left: 200px;
  top: 120px;
}
#profile {
  margin-left: 20px;
  width: 90px;
}
#pimh {
  height: 500px;
  width: 900px;
  margin-bottom: 20px;
}
#likes {
  margin-left: 20px;
  height: 30px;
  background-color: rgb(179, 126, 126);
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
.rounded-circle {
  height: 90px;
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

</style>
