<template>
  <div id="app" v-bind:class="{ 'bg-dark': darkTheme }">
    <!-- <HelloWorld />-->
    <NavBar
      @uploadFile="uploadFile"
      :userHash="userHash"
      :darkTheme="darkTheme"
    />
    <nav class="navbar container" style="height: 66px">Margin Control</nav>
    <div
      class="alert alert-danger mb-0 rounded-0 rounded-bottom"
      role="alert"
      v-if="updateAlert"
    >
      <i class="bi bi-exclamation-triangle-fill"></i> Update Available, please
      refresh!
    </div>
    <div
      class="alert alert-primary mb-0 rounded-0 rounded-bottom"
      role="alert"
      v-if="offline"
    >
      <i class="bi bi-info-circle-fill"></i> No internet connection found. App
      is running in offline mode.
    </div>
    <router-view
      :folders="folders"
      :currentFolder="currentFolder"
      :notes="notes"
      :darkTheme="darkTheme"
      :userHash="userHash"
      :loader="loader"
      @getFolders="getFolders"
      @saveSettings="saveSettings"
      @createNote="createNote"
      @delFolderModal="delFolderModal"
      @createNoteModal="createNoteModal"
      @createFolder="createFolder"
      @getNotes="getNotes"
      @deleteNote="deleteNote"
      @login="login"
      @logout="logout"
      @themeChange="themeChange"
    />
    <Footer :darkTheme="darkTheme" />
    <UploadFile
      id="uploadFile"
      @addNote="addNote"
      aria-hidden="true"
      :folders="folders"
      :darkTheme="darkTheme"
    />
    <DeleteFolder
      @deleteFolder="deleteFolder"
      :currentFolder="currentFolder"
      id="deleteFolder"
      :darkTheme="darkTheme"
    />
    <CreateNote
      id="createNote"
      aria-hidden="true"
      @createNote="createNote"
      :currentFolder="currentFolder"
      :darkTheme="darkTheme"
    />
    <CreateFolder
      id="createFolder"
      aria-hidden="true"
      @createFolder="createFolder"
      :darkTheme="darkTheme"
    />
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import MicroModal from 'micromodal';
import UploadFile from '@/components/UploadFile.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import DeleteFolder from '@/components/DeleteFolder.vue';
import CreateNote from '@/components/CreateNote.vue';
import CreateFolder from '@/components/CreateFolder.vue';
export default {
  components: {
    //HelloWorld,
    NavBar,
    Footer,
    UploadFile,
    DeleteFolder,
    CreateNote,
    CreateFolder,
  },
  mounted() {
    MicroModal.init();
  },
  data: () => ({
    folders: [],
    notes: [],
    serverAddress: process.env.VUE_APP_SERVER,
    userHash: null,
    offline: false,
    updateAlert: false,
    currentFolder: {},
    darkTheme: false,
    loader: false,
  }),
  created() {
    this.isLoggedInF();
    this.themeStorage();
    this.buildEventListeners();
  },
  methods: {
    isLoggedInF() {
      this.userHash = localStorage.getItem('userHash');
      if (this.userHash) {
        this.getClassrooms();
      } else {
        this.$router.push('/login');
      }
    },
    async login() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const goaRes = await googleUser.grantOfflineAccess({
          scope:
            'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.rosters https://www.googleapis.com/auth/classroom.coursework.me',
        });
        const res = await axios({
          url: this.serverAddress + '/login',
          method: 'POST',
          contentType: 'application/json',
          data: {
            code: goaRes.code,
          },
        });
        if (res.data.code === 200)
          localStorage.setItem('userHash', res.data.data.userHash);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
    logout() {
      axios({
        method: 'GET',
        url: this.serverAddress + '/logout',
      })
        .then(() => {
          localStorage.clear();
          this.folders = [];
          this.notes = [];
          this.isLoggedInF();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getFolders() {
      this.loader = true;
      axios({
        url: this.serverAddress + '/folder/' + this.userHash,
        method: 'GET',
      })
        .then(res => {
          this.folders = res.data;
          this.loader = false;
        })
        .catch(() => {
          this.$router.push('logout');
        });
    },
    getClassrooms() {
      axios({
        method: 'get',
        url: this.serverAddress + '/classrooms/' + this.userHash,
      })
        .then(() => {
          this.getClassroomFiles();
          this.getFolders();
        })
        .catch(() => {
          this.getFolders();
        });
    },
    getClassroomFiles() {
      axios({
        method: 'get',
        url: this.serverAddress + '/classroomfiles/' + this.userHash,
      })
        .catch(error => {
          console.log(error);
        });
    },
    addNote(object) {
      axios({
        url: this.serverAddress + '/note/ocr',
        method: 'POST',
        contentType: 'application/json',
        data: object,
      })
        .then(() => {})
        .catch(error => {
          console.log(error);
        });
    },
    saveSettings(settings) {
      axios({
        url: this.serverAddress + '/settings',
        method: 'POST',
        contentType: 'application/json',
        data: settings,
      })
        .then(() => {})
        .catch(error => {
          console.log(error);
        });
    },
    createNote(noteName) {
      MicroModal.close('createNote');
      axios({
        method: 'POST',
        url: this.serverAddress + '/note',
        'Content-Type': 'application/json',
        data: {
          noteName,
          userHash: this.userHash,
          folderId: this.currentFolder.folder_id,
        },
      })
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteFolder(id) {
      axios({
        method: 'Delete',
        url: this.serverAddress + '/folder',
        'Content-Type': 'application/json',
        data: {
          folderId: id,
          userHash: this.userHash,
        },
      })
        .then(() => {
          this.getFolders();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteNote(id) {
      axios({
        method: 'Delete',
        url: 'http://localhost:3000/note',
        'Content-Type': 'application/json',
        data: {
          noteId: id,
          userHash: this.userHash,
        },
      })
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    createFolder(object) {
      axios({
        method: 'POST',
        url: this.serverAddress + '/folder',
        'Content-Type': 'application/json',
        data: {
          userHash: this.userHash,
          folderName: object.folderName,
          teacherName: object.teacher,
          grade: object.grade,
        },
      })
        .then(() => {
          this.getFolders();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getNotes(id) {
      this.loader = true;
      axios({
        url: this.serverAddress + '/notes/' + id,
        method: 'GET',
      })
        .then(res => {
          this.currentFolder = this.folders.find(f => f.folder_id === id);
          this.notes = res.data.data.files;
          this.loader = false;
        })
        .catch(() => {
          this.$router.push('/logout');
        });
    },
    uploadFile() {
      MicroModal.show('uploadFile');
    },
    delFolderModal(id) {
      this.currentFolder = this.folders.find(f => f.folder_id === id);
      MicroModal.show('deleteFolder');
    },
    createNoteModal(id) {
      this.currentFolder = this.folders.find(f => f.folder_id === id);
      MicroModal.show('createNote');
    },
    updateAvailable() {
      this.updateAlert = true;
    },
    themeChange(theme) {
      this.darkTheme = theme;
      localStorage.setItem('darkTheme', theme);
    },
    themeStorage() {
      this.darkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      const res = localStorage.getItem('darkTheme');
      if (res) {
        this.darkTheme = JSON.parse(res);
      }
    },
    buildEventListeners() {
      window.addEventListener('swUpdated', this.updateAvailable, {
        once: true,
      });
      window.addEventListener('offline', () => (this.offline = true));
      window.addEventListener('online', () => (this.offline = false));
    },
  },
  watch: {
    $route(to) {
      if (to.name !== 'Login' && to.name !== 'Settings') {
        this.isLoggedInF();
      }
      if (to.name === 'Details') {
        this.notes = [];
      }
    },
  },
};
</script>

<style>
#app {
  height: 100%;
}
p {
  font-family: 'Abel', sans-serif;
}
h1 {
  font-family: 'Jost', sans-serif;
}
html::-webkit-scrollbar {
  width: 6px;
}
html::-webkit-scrollbar-thumb {
  background: rgb(48, 11, 90) 100%;
  border-radius: 5px;
}
html {
  scrollbar-width: thin;
  scrollbar-color: rgb(48, 11, 90) rgb(250, 250, 250);
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.bg-identity {
  background-color: #b46cc0 !important;
}
.btn-identity {
  background-color: #c664ba !important;
  color: white !important;
}
.btn-identity:hover {
  background-color: #90509b !important;
  color: white !important;
}
.btn-i-danger {
  background-color: #651585 !important;
  color: white !important;
}
.btn-i-danger:hover {
  background-color: rgb(48, 11, 90) !important;
  color: white !important;
}
.i-identity {
  color: rgb(48, 11, 90);
}
.transition-sm {
  transition: 0.5s !important;
}
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  display: none;
}
.modal.is-open {
  display: block;
}
</style>
