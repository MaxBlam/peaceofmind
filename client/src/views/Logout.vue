<template>
  <p>You will be logged out soon</p>
</template>

<script>
export default {
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
