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
      const userhash = localStorage.getItem('userHash');

      //TEST 1
      const res1 = await axios({ url: 'http://localhost:3000/welcome', method: 'get' });
      console.log(`Testergebnis 1: ${res1.data}`);

      //TEST 4 ALLE ORDNER
      const res4 = await axios({ url: 'http://localhost:3000/testdrive', method: 'get' });
      console.log(`Testergebnis 4: ${JSON.stringify(res4.data.driveRes.data.files)}`);

      //TEST 6 DOKUMENT ERSTELLEN
      //   const folderID = '1s15MYPUMzHz1IgXnwa1dgBhBn1Mfaipo';
      //   const docname = 'Testdokument';
      //   const createNoteObject = { userhash: userhash, noteName: docname, folderId: folderID };
      //   const res6 = await axios({
      //     url: 'http://localhost:3000/note',
      //     method: 'POST',
      //     'content-type': 'application/json',
      //     data: createNoteObject,
      //   });
      //   console.log(res6.data);

      //TEST 7 DOKUMENT ERSTELLEN MIT LEEREM NAMEN

      //TEST 8 FOLDER FÜR BESTIMMTEN USER
      const res8 = await axios({
        url: `http://localhost:3000/folder/${userhash}`,
        method: 'GET',
      });
      console.log(res8.data);

      //TEST 9 ERSTELLEN VON FOLDER
      const folder9 = {
        userhash: userhash,
        folderName: 'TESTORDNER',
        teacherName: 'Bobert Raumgartner',
        grade: 4,
      };
      const res9 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder9,
      });
      console.log(res9.data);
      //TEST 10 ERSTELLEN VON FOLDER OHNE NAMEN

      //TEST 11 ERSTELLEN VON FOLDER LEHRERNAME LEER ODER SONDERZEICHEN

      //TEST 12 ERSTELLEN VON FOLDER NOTE LEER, BUCHSTABE ODER SONDERZEICHEN
    },
  },
};
</script>

<style></style>
