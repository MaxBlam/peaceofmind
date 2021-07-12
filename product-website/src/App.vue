<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light container-fluid">
      <ul
        class="collapse navbar-collapse navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-center"
      >
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png" alt="" width="30" />
          </a>
        </li>
        <li class="nav-item ms-auto">
          <router-link to="/" class="nav-link text-dark">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link text-dark"
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
          <a class="nav-link text-dark" href="#">Contact</a>
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
    <router-view />
  </div>
</template>
