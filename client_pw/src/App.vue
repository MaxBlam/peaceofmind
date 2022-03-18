<template>
  <div id="app" v-bind:class="{ 'bg-dark': darkTheme }">
    <!-- <HelloWorld />-->
    <NavBar
    />
    <nav class="navbar container" style="height: 66px">Margin Control</nav>
    <router-view

    />
    <Footer />
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
h1 {
  font-family: 'Jost', sans-serif;
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
.bg-identity {
  background-color: #b46cc0 !important;
}
.btn-identity {
  background-color: #c664ba !important;
  color: white !important;
}
.btn-identity:hover {
  background-color: #90509b !important;
  color: white !important;
}
.btn-i-danger {
  background-color: #651585 !important;
  color: white !important;
}
.btn-i-danger:hover {
  background-color: rgb(48, 11, 90) !important;
  color: white !important;
}
.i-identity {
  color: rgb(48, 11, 90);
}
.transition-sm {
  transition: 0.5s !important;
}
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  display: none;
}
.modal.is-open {
  display: block;
}
</style>
