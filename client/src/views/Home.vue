<template>
  <div>
    <div
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
        @delete="delFolderModal"
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
    <DeleteFolder
      @deleteFolder="deleteFolder"
      :currentFolder="currentFolder"
      id="deleteFolder"
    />
  </div>
</template>

<script>
import axios from 'axios';
import MicroModal from 'micromodal';
import Folder from '@/components/Folder.vue';
import CreateFolder from '@/components/CreateFolder.vue';
import CreateNote from '@/components/CreateNote.vue';
import DeleteFolder from '@/components/DeleteFolder.vue';
export default {
  components: {
    Folder,
    CreateFolder,
    CreateNote,
    DeleteFolder,
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
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/note',
        'Content-Type': 'application/json',
        data: {
          noteName: noteName,
          userHash: localStorage.getItem('userHash'),
          folderId: this.currentFolder.folder_id,
        },
      });
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
    async deleteFolder() {
      // const res = await axios({
      //   method: 'Delete',
      //   url: 'http://localhost:3000/folder',
      //   'Content-Type': 'application/json',
      //   data: {
      //     folderId: this.folderId3,
      //     userHash: localStorage.getItem('userHash'),
      //   },
      // });
      // alert('Done', res);
    },
    async createFolder(object) {
      await axios({
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
      this.$emit('getFolders');
    },
    openNoteModal(folder) {
      this.currentFolder = folder;
      MicroModal.show('createNote');
    },
    delFolderModal(folder) {
      this.currentFolder = folder;
      MicroModal.show('deleteFolder');
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
