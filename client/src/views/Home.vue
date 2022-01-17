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
      />
      <div
        class="m-3 d-flex justify-content-center align-items-center"
        style="align-self: stretch; width: 27rem"
      >
        <i class="bi bi-folder-plus display-5" @click="openFolderModal"></i>
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
      @createFolder="createFolder"
    />
  </div>
</template>

<script>
import Folder from '@/components/Folder.vue';
import CreateFolder from '@/components/CreateFolder.vue';
import axios from 'axios';
export default {
  components: {
    Folder,
    CreateFolder,
  },
  data: () => {
    return {
      folders: 12,
      response: [],
      isLoggedIn: false,
      noteName: '',
      tabId: '',
      folderName: '',
      teacher: '',
      grade: '',
      folderId: '',
      folderId2: '',
      folderId3: '',
    };
  },
  created() {
    this.isLoggedInF();
  },
  methods: {
    isLoggedInF() {
      const code = localStorage.getItem('userHash');
      if (code) this.isLoggedIn = true;
      //else this.$router.push("/login")
    },
    async getData() {
      const res = await axios({
        url: 'http://localhost:3000/notes/' + this.folderId2,
        method: 'GET',
      });
      this.response = res.data.data.files;
    },
    async getData2() {
      const res = await axios({
        url: 'http://localhost:3000/folder/' + localStorage.getItem('userHash'),
        method: 'GET',
      });
      this.folders = res.data.data.files;
    },
    async logout() {
      await axios({
        method: 'GET',
        url: 'http://localhost:3000/logout',
      });
      localStorage.clear();
      this.isLoggedInF();
      this.response = [];
    },
    async createNote() {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/note',
        'Content-Type': 'application/json',
        data: {
          noteName: this.noteName,
          userHash: localStorage.getItem('userHash'),
          folderId: this.folderId,
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
    async createFolder() {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/folder',
        'Content-Type': 'application/json',
        data: {
          userHash: localStorage.getItem('userHash'),
          folderName: this.folderName,
          teacherName: this.teacher,
          grade: this.grade,
        },
      });
      alert('Done', res);
    },
    openFolderModal() {},
  },
  computed: {
    spacer: function () {
      return Number.parseInt((this.folders % 3) + 5);
    },
  },
};
</script>

<style>
/* The Modal (background) */
.modal-back {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  transition: 1s;
}
</style>
