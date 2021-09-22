<template>
  <div id="app">
    <nav class="navbar navbar-expand bg-light container-fluid shadow-sm fixed-top">
      <ul class="navbar-collapse navbar-nav  d-flex flex-row justify-content-center">
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png" alt="" width="30" />
          </a>
        </li>
        <li class="nav-item ms-auto px-2" @click="setActive('Home')">
          <router-link to="/" class="nav-link text-dark" v-bind:class="{ 'fw-bold': active == 'Home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item px-2" @click="setActive('About')">
          <router-link to="/about" class="nav-link text-dark" v-bind:class="{ 'fw-bold': active == 'About' }"
            >About</router-link
          >
        </li>
        <li class="nav-item me-auto px-2">
          <a class="nav-link text-dark" href="https://github.com/MaxBlam/peaceofmind" target="_blank"
            >Github</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#team">Contact</a>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 'Home',
    };
  },
  methods: {
    setActive(element) {
      this.active = element;
    },
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
  background: rgba(0, 103, 185, 1);
  border-radius: 5px;
}
html {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 103, 185, 1) rgb(250,250,250);
}
</style>
