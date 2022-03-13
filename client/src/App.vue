<template>
  <div id="app">
    <!-- <HelloWorld />-->
    <NavBar @uploadFile="uploadFile" :isLoggedIn="isLoggedIn" />
    <nav class="navbar container" style="height: 66px">Margin Control</nav>
    <router-view
      :folders="folders"
      @getFolders="getFolders"
      @saveSettings="saveSettings"
      @createNote="createNote"
      @deleteFolder="deleteFolder"
      @createFolder="createFolder"
      @getNotes="getNotes"
    />
    <Footer />
    <UploadFile
      id="uploadFile"
      @addNote="addNote"
      aria-hidden="true"
      :folders="folders"
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
export default {
  components: {
    //HelloWorld,
    NavBar,
    Footer,
    UploadFile,
  },
  mounted() {
    MicroModal.init();
  },
  data: () => ({
    folders: [],
    isLoggedIn: false,
    serverAddress: process.env.VUE_APP_SERVER,
  }),
  created() {
    //this.isLoggedInF();
  },
  methods: {
    isLoggedInF() {
      const code = localStorage.getItem('userHash');
      if (code) {
        this.isLoggedIn = true;
        this.getFolders();
      } else this.$router.push('/login');
    },
    async login() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const goaRes = await googleUser.grantOfflineAccess({
          scope: 'https://www.googleapis.com/auth/drive.file',
        });
        const res = await axios({
          url: this.serverAddress + '/login',
          method: 'POST',
          'Content-Type': 'application/json',
          data: {
            code: goaRes.code,
          },
        });
        if (res.data.code !== 401)
          localStorage.setItem('userHash', res.data.data.userHash);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        await axios({
          method: 'GET',
          url: this.serverAddress + '/logout',
        });
        localStorage.clear();
        this.isLoggedInF();
        this.folders = [];
      } catch (error) {
        console.error(error);
      }
    },
    async getFolders() {
      try {
        const { data } = await axios({
          url:
            this.serverAddress + '/folder/' + localStorage.getItem('userHash'),
          method: 'GET',
        });
        this.folders = data;
      } catch (error) {
        console.error(error);
      }
    },
    async addNote(object) {
      try {
        await axios({
          url: this.serverAddress + '/note/ocr',
          method: 'POST',
          contentType: 'application/json',
          data: object,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async saveSettings(settings) {
      try {
        await axios({
          url: this.serverAddress + '/settings',
          method: 'POST',
          contentType: 'application/json',
          data: settings,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async createNote(object) {
      try {
        const { noteName, id } = object;
        await axios({
          method: 'POST',
          url: this.serverAddress + '/note',
          'Content-Type': 'application/json',
          data: {
            noteName: noteName,
            userHash: localStorage.getItem('userHash'),
            folderId: id,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFolder(id) {
      console.log(id);
      // const res = await axios({
      //   method: 'Delete',
      //   url: this.serverAddress + '/folder',
      //   'Content-Type': 'application/json',
      //   data: {
      //     folderId: this.folderId3,
      //     userHash: localStorage.getItem('userHash'),
      //   },
      // });
      // alert('Done', res);
    },
    async createFolder(object) {
      try {
        await axios({
          method: 'POST',
          url: this.serverAddress + '/folder',
          'Content-Type': 'application/json',
          data: {
            userHash: localStorage.getItem('userHash'),
            folderName: object.folderName,
            teacherName: object.teacher,
            grade: object.grade,
          },
        });
      } catch (error) {
        console.error(error);
      }
      this.getFolders();
    },
    async getNotes(id) {
      try {
        const { data } = await axios({
          url: this.serverAddress + '/notes/' + id,
          method: 'GET',
        });
        this.notes = data.data.files;
      } catch (error) {
        console.error(error);
      }
    },
    uploadFile() {
      MicroModal.show('uploadFile');
    },
  },
};
</script>

<style>
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
.bg-identity {
  background-color: #b46cc0 !important;
}
.btn-identity {
  background-color: #c664ba !important;
  color: white !important;
}
.btn-identity:hover {
  background-color: #b46cc0 !important;
  color: white !important;
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
