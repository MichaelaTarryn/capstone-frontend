<template>
  <div class="container">
     <div class="row">
      <div id="logo" class="col-md-3">𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜</div>
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
    <hr />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>