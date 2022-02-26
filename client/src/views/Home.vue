<template>
  <div>
    <div
      class="
        container-fluid
        d-flex
        justify-content-center
        align-content-center
        flex-wrap
        mt-3
      "
    >
      <Folder
        v-for="folder in folders"
        :key="folder.id"
        :to="`/folder/${folder.id}`"
        :folder="folder"
        @openNoteModal="openNoteModal"
      />
      <div
        class="m-3 d-flex justify-content-center align-items-center"
        style="align-self: stretch; width: 27rem; cursor: pointer"
        data-micromodal-trigger="createFolder"
      >
        <i class="bi bi-folder-plus display-5"></i>
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
import Folder from '@/components/Folder.vue';
import CreateFolder from '@/components/CreateFolder.vue';
import CreateNote from '@/components/CreateNote.vue';
import axios from 'axios';
import MicroModal from 'micromodal';
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
    async createNote(noteName) {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/note',
        'Content-Type': 'application/json',
        data: {
          noteName: noteName,
          userHash: localStorage.getItem('userHash'),
          folderId: this.currentFolder.folder_id,
        },
      });
      alert('Done', res);
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
    },
    async deleteFolder() {
      const res = await axios({
        method: 'Delete',
        url: 'http://localhost:3000/folder',
        'Content-Type': 'application/json',
        data: {
          folderId: this.folderId3,
          userHash: localStorage.getItem('userHash'),
        },
      });
      alert('Done', res);
    },*/
    async createFolder(object) {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/folder',
        'Content-Type': 'application/json',
        data: {
          userHash: localStorage.getItem('userHash'),
          folderName: object.folderName,
          teacherName: object.teacher,
          grade: object.grade,
        },
      });
      alert('Done', res);
    },
    openNoteModal(folder) {
      this.currentFolder = folder;
      MicroModal.show('createNote');
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
