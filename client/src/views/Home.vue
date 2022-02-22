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
    <CreateNote id="createNote" aria-hidden="true" @createNote="createNote" />
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
    openNoteModal(folder) {
      console.log(folder.id);
      MicroModal.show('createNote'); // [1]
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
