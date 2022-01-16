<template>
  <div>
    <nav class="navbar bg-light container-fluid shadow-sm fixed-top">
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
            <img src="@/assets/logo.svg" alt="" width="50" />
          </a>
        </li>

        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i class="bi bi-list h3" style="color: rgb(48, 11, 90)"></i>
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
          class="btn text-reset navbar-toggler"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item px-2">
            <router-link
              to="/"
              exact
              class="nav-link text-dark"
              active-class="fw-bold"
              >Home</router-link
            >
          </li>
          <li class="nav-item px-2">
            <router-link
              to="/about"
              class="nav-link text-dark"
              active-class="fw-bold"
              >About</router-link
            >
          </li>
          <li class="nav-item px-2">
            <a
              class="nav-link text-dark"
              href="https://github.com/MaxBlam/peaceofmind"
              target="_blank"
              >Github</a
            >
          </li>
          <li class="nav-item px-2">
            <a
              class="nav-link text-dark"
              href="https://www.instagram.com/pieceofmind_htlww/"
              >Instagram</a
            >
          </li>

          <li class="nav-item px-2">
            <a class="nav-link text-dark" href="/about#contact">Contact</a>
          </li>

          <li class="nav-item px-2">
            <router-link
              to="/imprint#"
              class="nav-link text-dark"
              active-class="fw-bold"
              >Imprint</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
