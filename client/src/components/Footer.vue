<template>
  <footer class="py-3 my-4" v-bind:class="{ 'bg-dark': darkTheme }">
    <ul
      class="nav justify-content-center pb-3 mb-3"
      v-bind:class="{ 'border-bottom': !darkTheme }"
    >
      <li class="nav-item">
        <a
          href="https://pieceofmind.at"
          rel="noreferrer"
          class="nav-link px-2 text-muted"
          title="About"
          >About</a
        >
      </li>
      <li class="nav-item">
        <a
          href="https://pieceofmind.at/imprint"
          rel="noreferrer"
          class="nav-link px-2 text-muted"
          title="Imprint"
          >Imprint</a
        >
      </li>
      <li class="nav-item">
        <a
          href="https://www.instagram.com/pieceofmind.at/"
          target="_blank"
          rel="noreferrer"
          title="Instagram Profile"
          class="nav-link px-2 text-muted"
          >Instagram</a
        >
      </li>
      <li class="nav-item">
        <a href="#faq" class="nav-link px-2 text-muted">FAQs</a>
      </li>
      <li class="nav-item">
        <a
          href="https://github.com/MaxBlam/peaceofmind"
          target="_blank"
          rel="noreferrer"
          title="Github Repository"
          class="nav-link px-2 text-muted"
          >Github</a
        >
      </li>
    </ul>
    <p class="text-center text-muted">© 2022 Piece of Mind</p>
  </footer>
</template>
<script>
export default {
  props: {
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
