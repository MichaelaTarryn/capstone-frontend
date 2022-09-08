<template>
  
  <div class="parent">

      <div class="spinner child"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spinner {
 position: relative;
 width: 60px;
 height: 60px;
 border-radius: 50%;
}

.spinner::before,
.spinner:after {
 content: "";
 position: absolute;
 border-radius: inherit;
}

.spinner:before {
 width: 100%;
 height: 100%;
 background-image: linear-gradient(0deg, rgb(208, 133, 133) 0%, #dedeec 100%);
 animation: spin8932 .5s infinite linear;
 left: 0%;
}

.spinner:after {
 width: 85%;
 height: 85%;
 background-color: rgb(250, 246, 246);
 top: 50%;
 /* left: 50%; */
 transform: translate(-50%, -50%);
}

@keyframes spin8932 {
 to {
  transform: rotate(360deg);
 }
}
.parent{
    display: flex;
    justify-content: center;
    height: 100vh;
}
</style>