<template>
  <div>
    <div>
      <button class="btn bg-identity text-light p-2" @click="login()">Sign In with Google</button>
      <button class="btn bg-identity text-light p-2" @click="register()">Register</button>
      <span>logged in: {{ loggedIn }}</span>
      <button class="btn bg-identity text-light p-2" @click="logout()">Logout</button>
    </div>

    <div>
      <button class="btn bg-identity text-light p-2" @click="alltests()">Welcome!</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      loggedIn: false,
      tests: [],
    };
  },
  methods: {
    async login() {
      try {
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
        if (res.data.code !== 401) {
          localStorage.setItem('userHash', res.data.data);
          this.loggedIn = true;
        } else alert(res.data.data);
      } catch (error) {
        console.error(error);
      }
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
    async logout() {
      await axios({
        method: 'GET',
        url: 'http://localhost:3000/logout',
      });
      localStorage.clear();
      this.loggedIn = false;
    },
    async alltests() {
      //TEST 1
      const res1 = await axios({ url: 'http://localhost:3000/welcome', method: 'get' });
      console.log(`Testergebnis 1: ${res1.data}`);

      //TEST 4 ALLE ORDNER
      const res2 = await axios({ url: 'http://localhost:3000/testdrive', method: 'get' });
      console.log(`Testergebnis 2: ${JSON.stringify(res2.data.driveRes.data.files)}`);

      //TEST 6 DOKUMENT ERSTELLEN
      //   const folderID = '1s15MYPUMzHz1IgXnwa1dgBhBn1Mfaipo';
      //   const docname = 'Testdokument';
      //   const userhash = localStorage.getItem('userHash');
      //   const createNoteObject = { userhash: userhash, noteName: docname, folderId: folderID };
      //   const res3 = await axios({
      //     url: 'http://localhost:3000/note',
      //     method: 'POST',
      //     'content-type': 'application/json',
      //     data: createNoteObject,
      //   });
      //   // const test3res = '';
      //   console.log(res3.data);

      //TEST 8 DOKUMENT ERSTELLEN lEERER NAME

      //TEST 9 FOLDER FÜR BESTIMMTEN USER

      //TEST 10
    },
  },
};
</script>

<style></style>
