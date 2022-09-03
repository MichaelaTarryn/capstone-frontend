<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Nav/>

  <router-view/>
  <FooterC/>
</template>
<script>

import Nav from '@/components/nav.vue';

import FooterC from './components/footerC.vue';
export default{
  components: {
    Nav,
    FooterC
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #1c1d1e;
}

nav a.router-link-exact-active {
  color: rgb(239, 175, 175);
}  
</style>
