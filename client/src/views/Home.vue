<template>
  <div>
    <nav class="navbar container" style="height: 50px; margin: 0.5rem">
      Margin Control
    </nav>
    <div
      class="
        container-fluid
        d-flex
        justify-content-center
        align-content-center
        flex-wrap
      "
    >
      <Folder v-for="i in 12" :key="i" />
      <div class="m-3 d-flex justify-content-center align-items-center" style="height:200px;width:27vw"><i class="fas fa-folder-plus display-3"></i></div>
      <div class="m-3" style="width:27vw" v-for="s in spacer" :key="s"></div>
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
      folders: 13,
    };
  },
  computed: {
    spacer: function () {
      return Number.parseInt(this.folders % 3+2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
