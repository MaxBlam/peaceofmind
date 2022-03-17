<template>
  <fieldset
    class="
      container
      d-flex
      justify-content-center
      flex-wrap flex-column
      mt-5
      p-4
      border
      rounded
      text-center
    "
    v-bind:class="{
      'bg-dark': darkTheme,
      'modal-content': !darkTheme,
      'text-light': darkTheme,
    }"
  >
    <legend class="mb-3">Login</legend>
    <button
      class="btn btn-identity transition-sm"
      @click="$emit('login')"
      aria-label="Sign In"
    >
      Sign In with Google
    </button>
  </fieldset>
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
