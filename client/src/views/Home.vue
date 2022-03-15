<template>
  <div class="mt-4">
    <div class="text-center i-identity" v-if="folders === null">
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
        @openNoteModal="openNoteModal"
        @delFolderModal="delFolderModal"
      />
      <div
        class="m-3 d-flex justify-content-center align-items-center"
        style="align-self: stretch; width: 27rem; cursor: pointer"
        @click="createFolderModal"
      >
        <i class="bi bi-folder-plus display-5 i-identity"></i>
      </div>
      <div
        class="m-3"
        style="width: 27rem"
        v-for="(spacer, i) in spacer"
        :key="i"
      ></div>
    </div>
    <CreateFolder
      id="createFolder"
      aria-hidden="true"
      @createFolder="createFolder"
    />
    <CreateNote
      id="createNote"
      aria-hidden="true"
      @createNote="createNote"
      :currentFolder="currentFolder"
    />
  </div>
</template>

<script>
import MicroModal from 'micromodal';
import Folder from '@/components/Folder.vue';
import CreateFolder from '@/components/CreateFolder.vue';
import CreateNote from '@/components/CreateNote.vue';
export default {
  components: {
    Folder,
    CreateFolder,
    CreateNote,
  },
  props: {
    folders: {
      type: Array,
      default: () => [],
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
    createFolder(object) {
      this.$emit('createFolder', object);
    },
    /*async deleteTab() {
      const res = await axios({
        method: 'Delete',
        url: 'http://localhost:3000/note',
        'Content-Type': 'application/json',
        data: {
          noteId: this.tabId,
          userHash: localStorage.getItem('userHash'),
        },
      });
      alert('Done', res);
    },*/
    openNoteModal(folder) {
      this.currentFolder = folder;
      MicroModal.show('createNote');
    },
    delFolderModal(folder) {
      this.$emit('delFolderModal', folder);
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
