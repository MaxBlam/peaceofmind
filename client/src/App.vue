<template>
  <div id="app">
    <nav
      class="navbar bg-light container-fluid shadow-sm fixed-top"
    >
      <ul
        class="
          navbar-collapse navbar-nav
          d-flex
          flex-row
          justify-content-center
        "
      >
        <li class="nav-item">
          <a class="navbar-brand" href="/#">
            <img src="./assets/logo.svg" alt="" width="50" />
          </a>
        </li>
        
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </ul>
    </nav>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item ms-auto px-2">
          <router-link to="/" class="nav-link text-dark" active-class="fw-bold"
            >Home</router-link
          >
        </li>
        <li class="nav-item px-2">
          <router-link
            to="/imprint"
            class="nav-link text-dark"
            active-class="fw-bold"
            >Imprint</router-link
          >
        </li>
        <li class="nav-item me-auto px-2">
          <a
            class="nav-link text-dark"
            href="https://github.com/MaxBlam/peaceofmind"
            target="_blank"
            >Github</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/#contact">Contact</a>
        </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

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
