<template>
  <div>
    <nav class="navbar container" style="height: 50px; margin: 0.5rem">
      Margin Control
    </nav>
    <div
      class="
        container-fluid
        d-flex
        justify-content-start
        align-content-center
        flex-wrap
      "
    >
      <Folder v-for="i in 12" :key="i" />
    </div>
  </div>
</template>

<script>
import Folder from '@/components/Folder.vue';
export default {
  components: {
    Folder,
  },
  data: () => {
    return {
      folders: 12,
    };
  },
};
</script>

<style lang="scss" scoped></style>
