<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
p {
  font-family: 'Abel', sans-serif;
}
html::-webkit-scrollbar {
  width: 6px;
}
html::-webkit-scrollbar-thumb {
  background: rgb(48, 11, 90) 100%;
  border-radius: 5px;
}
html {
  scrollbar-width: thin;
  scrollbar-color: rgb(48, 11, 90) rgb(250, 250, 250);
}
</style>
