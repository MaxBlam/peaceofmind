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
