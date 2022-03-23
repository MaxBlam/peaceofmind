<template>
  <div class="mt-4" v-bind:class="{ 'bg-dark': darkTheme }">
    <div class="text-center i-identity" v-if="loader">
      <p>Loading...</p>
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div
      v-else
      class="
        container-fluid
        d-flex
        justify-content-center
        align-content-center
        flex-wrap
      "
    >
      <Folder
        v-for="folder in folders"
        :key="folder.id"
        :to="`/folder/${folder.id}`"
        :folder="folder"
        :darkTheme="darkTheme"
        @createNoteModal="createNoteModal"
        @delFolderModal="delFolderModal"
      />
      <div
        class="m-3 d-flex justify-content-center align-items-center"
        style="align-self: stretch; width: 27rem; cursor: pointer"
        @click="createFolderModal"
      >
        <i
          class="bi bi-folder-plus display-5"
          v-bind:class="{ 'i-identity': !darkTheme, 'text-light': darkTheme }"
        ></i>
      </div>
      <div
        class="m-3"
        style="width: 27rem"
        v-for="(spacer, i) in spacer"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script>
import MicroModal from 'micromodal';
import Folder from '@/components/Folder.vue';
export default {
  components: {
    Folder,
  },
  props: {
    folders: {
      type: Array,
      default: () => [],
    },
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
    loader: {
      type: Boolean,
      default: () => true,
    },
  },
  data: () => {
    return {
      currentFolder: {},
    };
  },
  methods: {
    createNote(noteName) {
      this.$emit('createNote', {
        noteName: noteName,
        f_id: this.currentFolder.folder_id,
      });
    },
    deleteFolder(f_id) {
      this.$emit('deleteFolder', f_id);
    },
    createNoteModal(id) {
      this.$emit('createNoteModal', id);
    },
    delFolderModal(id) {
      this.$emit('delFolderModal', id);
    },
    createFolderModal() {
      MicroModal.show('createFolder');
    },
  },
  computed: {
    spacer: function () {
      return Number.parseInt((this.folders.length % 3) + 5);
    },
  },
};
</script>

<style></style>
