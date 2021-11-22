<template>
  <div class="d-flex justify-center flex-column text-center">
    <div class="text-h1">Home Page</div>
    <div class="pa-3" style="width: 100%">
      <button v-if="!isLoggedIn" @click="login()">Log In</button>
      <button v-if="!isLoggedIn" @click="register()">Register</button>
      <button v-if="isLoggedIn" class="purple white--text my-5" @click="logout()">Log Out</button>
    </div>
    <hr />
    <input type="text" v-model="folderId2" placeholder="FolderId" />
    <button v-if="isLoggedIn" @click="getData()">Get Data</button>
    <button v-if="isLoggedIn" @click="getData2()">Get Folders</button>
    <hr />
    <div v-if="isLoggedIn">
      <input type="text" v-model="noteName" placeholder="Note Name" />
      <input type="text" v-model="folderId" placeholder="Folder ID" />
      <button class="green darken-2 white--text my-5" @click="createNote()">Create Note</button>
    </div>
    <hr />
    <div v-if="isLoggedIn">
      <input type="text" v-model="tabId" placeholder="Note-ID" />
      <button class="orange darken-2 white--text my-5" @click="deleteTab()">Delete Note</button>
    </div>
    <div v-if="isLoggedIn">
      <input type="text" v-model="folderId3" placeholder="Note-ID" />
      <button class="orange darken-2 white--text my-5" @click="deleteFolder()">Delete Folder</button>
    </div>
    <hr />
    <div v-if="isLoggedIn">
      <input type="text" v-model="folderName" placeholder="Folder Name" />
      <input type="text" v-model="teacher" placeholder="Teacher" />
      <input type="text" v-model="grade" placeholder="Grade" />
      <button class="orange darken-2 white--text my-5" @click="createFolder()">Create Folder</button>
    </div>
    <hr />
    <div>
      {{ response }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
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
  components: {},
  methods: {
    async login() {
      const googleUser = await this.$gAuth.signIn();
      const goaRes = await googleUser.grantOfflineAccess({
        scope: 'https://www.googleapis.com/auth/drive.file',
      });
      const res = await axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        'Content-Type': 'application/json',
        data: {
          code: goaRes.code,
        },
      });
      if (res.data.code !== 401) localStorage.setItem('userHash', res.data.data);
      else alert(res.data.data);
      this.isLoggedInF();
    },
    async register() {
      const googleUser = await this.$gAuth.signIn();
      const goaRes = await googleUser.grantOfflineAccess({
        scope: 'https://www.googleapis.com/auth/drive.file',
      });
      const res = await axios({
        url: 'http://localhost:3000/register',
        method: 'POST',
        'Content-Type': 'application/json',
        data: {
          code: goaRes.code,
        },
      });
      if (res.data.code === 401) alert(res.data.data);
    },
    isLoggedInF() {
      const code = localStorage.getItem('userHash');
      if (code) this.isLoggedIn = true;
      else this.isLoggedIn = false;
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
      this.response = res.data.data.files;
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
    async deleteTab() {
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
    },
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
  },
  created() {
    this.isLoggedInF();
  },
};
</script>
