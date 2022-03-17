<template>
  <nav class="navbar container-fluid fixed-top bg-light">
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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Navbar Toggler"
        >
          <i class="bi bi-list h3"></i>
        </button>
      </li>
    </ul>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Navigation</h5>
        <button
          type="button"
          class="btn text-reset navbar-toggler"
          data-bs-dismiss="offcanvas"
          aria-label="Navbar Close"
        >
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <div class="offcanvas-body">
        <ul
          class="navbar-nav justify-content-end flex-grow-1 pe-3"
          data-bs-dismiss="offcanvas"
        >
          <li class="nav-item px-2">
            <router-link
              to="/#"
              exact
              class="nav-link text-dark"
              active-class="fw-bold"
              title="Go to About"
              >Home</router-link
            >
          </li>
          <li class="nav-item px-2">
            <a
              href="https://pieceofmind-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              class="nav-link text-dark"
              title="Go to App"
              >App</a
            >
          </li>
          <li class="nav-item px-2">
            <a
              class="nav-link text-dark"
              href="https://github.com/MaxBlam/peaceofmind"
              target="_blank"
              rel="noreferrer"
              title="Github Repository"
              >Github</a
            >
          </li>
          <li class="nav-item px-2">
            <a
              class="nav-link text-dark"
              href="https://www.instagram.com/pieceofmind.at/"
              title="Instagram Profile"
              >Instagram</a
            >
          </li>

          <li class="nav-item px-2">
            <a class="nav-link text-dark" href="/#contact" title="Contact Us"
              >Contact</a
            >
          </li>

          <li class="nav-item px-2">
            <router-link
              to="/imprint"
              class="nav-link text-dark"
              active-class="fw-bold"
              title="Imprint"
              >Imprint</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
