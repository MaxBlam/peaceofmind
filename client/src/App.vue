<template>
  <div id="app">
    <!-- <HelloWorld />-->
    <NavBar @uploadFile="uploadFile" :isLoggedIn="isLoggedIn" />
    <nav class="navbar container" style="height: 66px">Margin Control</nav>
    <router-view :folders="folders" @getFolders="getFolders" />
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
    async logout() {
      await axios({
        method: 'GET',
        url: 'http://localhost:3000/logout',
      });
      localStorage.clear();
      this.isLoggedInF();
      this.folders = [];
    },
    async getFolders() {
      const { data } = await axios({
        url: 'http://localhost:3000/folder/' + localStorage.getItem('userHash'),
        method: 'GET',
      });
      this.folders = data;
    },
    async addNote(object) {
      await axios({
        url: 'http://localhost:3000/note/ocr',
        method: 'POST',
        contentType: 'application/json',
        data: object,
      });
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
  background-color: #C664BA !important;
  color: white !important;
}
.btn-identity:hover {
  background-color: #B46CC0 !important;
  color: white !important;
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
