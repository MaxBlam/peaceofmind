<template>
  <div
    class="text-center"
    v-bind:class="{
      'text-light': darkTheme,
    }"
  >
    <p>You will be logged out soon!</p>
    <p>
      You're being redirected to another page, it may take a few seconds. <br />
      If not, please click <router-link to="/login">here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
  created() {
    this.logout();
  },
  methods: {
    logout() {
      this.$emit('logout');
    },
  },
};
</script>

<style lang="scss" scoped></style>
