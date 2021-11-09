<template>
  <div id="app">
    <nav class="navbar navbar-expand bg-light container-fluid shadow-sm fixed-top">
      <ul class="navbar-collapse navbar-nav d-flex flex-row justify-content-center">
        <li class="nav-item">
          <a class="navbar-brand" href="/#">
            <img src="./assets/logo.svg" alt="" width="50" />
          </a>
        </li>
        <li class="nav-item ms-auto px-2">
          <router-link to="/" class="nav-link text-dark" active-class="fw-bold" 
            >Home</router-link
          >
        </li>
        <li class="nav-item px-2">
          <router-link to="/imprint" class="nav-link text-dark" active-class="fw-bold" 
            >Imprint</router-link
          >
        </li>
        <li class="nav-item me-auto px-2">
          <a class="nav-link text-dark" href="https://github.com/MaxBlam/peaceofmind" target="_blank"
            >Github</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
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
  scrollbar-color: rgb(48, 11, 90) rgb(250,250,250);
}
</style>
