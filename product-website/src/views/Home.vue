<template>
  <div>
    <div
      class="container-fluid d-flex justify-content-center align-content-center flex-column align-items-center text-light"
      id="parallax"
    >
      <h1 class="display-2 text-shadow">Introduction</h1>
      <p class="text-shadow">Work in progress!</p>
    </div>
    <div class="container">
test
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  /*components: {
    HelloWorld
  }*/
};
</script>

<style>
#parallax {
  background-image: url('../assets/ph.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.text-shadow {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
