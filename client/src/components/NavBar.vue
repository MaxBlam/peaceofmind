<template>
  <nav
    class="navbar container-fluid fixed-top"
    v-bind:class="{
      'bg-dark': darkTheme,
      'bg-light': !darkTheme,
      'shadow-sm': !darkTheme,
    }"
  >
    <ul
      class="navbar-collapse navbar-nav d-flex flex-row justify-content-center"
    >
      <li>
        <a class="navbar-brand nav-item" href="/" title="App">
          <img src="@/assets/logo.svg" alt="Logo" width="50" />
        </a>
      </li>

      <li class="ms-auto">
        <button
          class="btn"
          aria-label="Upload"
          @click="uploadFile"
          v-if="isLoggedIn"
        >
          <i
            class="bi bi-upload h3"
            v-bind:class="{
              'i-identity': !darkTheme,
              'text-light': darkTheme,
            }"
          ></i>
        </button>
      </li>
      <li>
        <router-link
          class="btn"
          aria-label="Settings"
          to="/settings"
        >
          <i
            class="bi bi-gear h3"
            v-bind:class="{ 'i-identity': !darkTheme, 'text-light': darkTheme }"
          ></i>
        </router-link>
      </li>
      <li>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Navbar Toggler"
        >
          <i
            class="bi bi-list h3"
            v-bind:class="{ 'i-identity': !darkTheme, 'text-light': darkTheme }"
          ></i>
        </button>
      </li>
    </ul>
    <div
      class="offcanvas offcanvas-end"
      v-bind:class="{ 'bg-dark': darkTheme }"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5
          class="offcanvas-title"
          v-bind:class="{
            'text-light': darkTheme,
            'text-dark': !darkTheme,
          }"
        >
          Navigation
        </h5>
        <button
          type="button"
          class="btn text-reset navbar-toggler"
          data-bs-dismiss="offcanvas"
          aria-label="Navbar Close"
        >
          <i
            class="bi bi-x-lg"
            v-bind:class="{
              'text-light': darkTheme,
              'text-dark': !darkTheme,
            }"
          ></i>
        </button>
      </div>
      <div class="offcanvas-body">
        <ul
          class="navbar-nav justify-content-end flex-grow-1 pe-3"
          data-bs-dismiss="offcanvas"
        >
          <li class="nav-item px-2" v-if="isLoggedIn">
            <router-link
              to="/"
              exact
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              active-class="fw-bold"
              title="Go to App"
              >Home</router-link
            >
          </li>
          <li class="nav-item px-2" v-if="!isLoggedIn">
            <router-link
              to="/login"
              exact
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              active-class="fw-bold"
              title="Go to App"
              >Login</router-link
            >
          </li>
          <li class="nav-item px-2" v-else>
            <router-link
              to="/logout"
              exact
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              active-class="fw-bold"
              title="Go to App"
              >Log Out</router-link
            >
          </li>
          <li class="nav-item px-2">
            <a
            href="https://pieceofmind.at"
          rel="noreferrer"
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              title="About page"
              >About</a
            >
          </li>
          <li class="nav-item px-2">
            <a
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              href="https://github.com/MaxBlam/peaceofmind"
              target="_blank"
              rel="noreferrer"
              title="Github Repository"
              >Github</a
            >
          </li>
          <li class="nav-item px-2">
            <a
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              href="https://www.instagram.com/pieceofmind.at/"
              title="Instagram Profile"
              >Instagram</a
            >
          </li>

          <li class="nav-item px-2">
            <a
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              href="https://pieceofmind.at/#contact"
              title="Contact Us"
              >Contact</a
            >
          </li>

          <li class="nav-item px-2">
            <a
            href="https://pieceofmind.at/imprint"
          rel="noreferrer"
              class="nav-link"
              v-bind:class="{
                'text-light': darkTheme,
                'text-dark': !darkTheme,
              }"
              title="Imprint"
              >Imprint</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      default: () => false,
    },
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    uploadFile() {
      this.$emit('uploadFile');
    },
  },
};
</script>
