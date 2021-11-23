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
      <Folder v-for="i in folders" :key="i" to="/" />
      <div
        class="m-3 d-flex justify-content-center align-items-center"
        style="align-self: stretch; width: 27vw"
        @click="newFolder"
      >
        <i class="fas fa-folder-plus display-3"></i>
      </div>
      <div class="m-3" style="width: 27vw" v-for="s in spacer" :key="s"></div>
    </div>
  </div>
</template>

<script>
import Folder from '@/components/Folder.vue';
import axios from 'axios';
export default {
  components: {
    Folder,
  },
  data: () => {
    return {
      folders: 12,
    };
  },
  methods: {
    newFolder() {
      this.$prompt('Enter new folder name').then((text) => this.addFolder(text));
    },
    async addFolder(text) {
      {
        console.log(text);
        await axios({
          url: '',
          method: 'POST',
        });
      }
    },
  },
  computed: {
    spacer: function () {
      return Number.parseInt((this.folders % 3) + 2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
