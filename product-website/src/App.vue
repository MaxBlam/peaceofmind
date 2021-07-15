<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light container-fluid shadow-sm fixed-top">
      <ul
        class="collapse navbar-collapse navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-center"
      >
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png" alt="" width="30" />
          </a>
        </li>
        <li class="nav-item ms-auto" @click="setActive('Home')">
          <router-link
            to="/"
            class="nav-link text-dark"
            v-bind:class="{ 'fw-bold': active == 'Home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item" @click="setActive('About')">
          <router-link
            to="/about"
            class="nav-link text-dark"
            v-bind:class="{ 'fw-bold': active == 'About' }"
            >About</router-link
          >
        </li>
        <li class="nav-item me-auto">
          <a
            class="nav-link text-dark"
            href="https://github.com/MaxBlam/pieceofmind"
            >Github</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#team">Contact</a>
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
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
