<template>
  <div
    class="
      container-fluid
      d-flex
      justify-content-start
      flex-wrap
      align-items-start
    "
    style="min-height: 100vh"
  >
    <Folder v-for="i in 12" :key="i" />
  </div>
</template>

<script>
import Folder from '@/components/Folder.vue';
export default {
  components: {
    Folder,
  },
};
</script>

<style lang="scss" scoped></style>
