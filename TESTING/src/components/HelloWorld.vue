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
      userHash: '',
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
      //TEST 1: WELCOME ROUTE
      this.test1();

      //TEST 2-3: LOGIN UND REGISTER

      //TEST 4: GIBT ALLE FOLDER IM ROOT-FOLDER DES USERS ZURÜCK
      // this.test4();
      //TEST 5: LOGOUT FUNKTION

      //TEST 6: ERSTELLT EINE NOTIZ
      // this.test6();
      //TEST 7: ERSTELLT EINE NOTIZ MIT LEEREM NAMEN --SOLLTE EINEN FEHLER AUSGEBEN--
      // this.test7();
      //TEST 8: ALLE FOLDER IM PIECEOFMIND-FOLDER ANZEIGEN LASSEN
      this.test8();
      //TEST 9: EINEN FOLDER ERSTELLEN
      // this.test9();
      //TEST 10: EINEN FOLDER MIT LEEREM NAMEN ERSTELLEN --SOLLTE EINEN FEHLER AUSGEBEN--
      // this.test10();
      //TEST 11: EINEN FOLDER MIT SONDERZEICHEN IM NAMEN ERSTELLEN
      // this.test11();
      //TEST 12: EINEN FOLDER MIT LEEREM LEHRERNAMEN ERSTELLEN --SOLLTE EINEN FEHLER AUSGEBEN--
      // this.test12();
      //TEST 13: EINEN FOLDER MIT SONDERZEICHEN IM NAMEN ERSTELLLEN AUßER . und - --SOLLTE EINEN FEHLER AUSGEBEN--
      // this.test13();
      //TEST 14: EINEN FOLDER MIT BUCHSTABEN ALS NOTE --SOLLTE EINEN FEHLER AUSGEBEN--
      //this.test14();
      //TEST 15: EINEN FOLDER MIT SONDERZEICHEN ALS NOTE ERSTELLEN --SOLLTE EINEN FEHLER AUSGEBEN--
      // this.test15();
      //TEST 16: EINEN FOLDER MIT LEERER NOTE ERSTELLEN --SOLLTE EINEN FEHLER AUSGEBEN--
      // this.test16();
      //TEST 17: FOLDER LÖSCHEN
      // this.test17();
      //TEST 18: DOKUMENT LÖSCHEN
      // this.test18();
      //TEST 19: DOKUMENTE ANZEIGEN LASSEN
      this.test19();
    },
    async test1() {
      //TEST 1
      const res1 = await axios({ url: 'http://localhost:3000/welcome', method: 'get' });
      console.log(`Testergebnis 1: ${res1.data}`);
    },
    async test2() {
      // TESTPLAN => LOGIN FUNCTION
    },
    async test3() {
      // TESTPLAN => REGISTER FUNCTION
    },
    async test4() {
      // TEST 4
      const res4 = await axios({ url: 'http://localhost:3000/testdrive', method: 'get' });
      console.log(`Testergebnis 4: ${JSON.stringify(res4.data.driveRes.data.files)}`);
    },
    async test5() {
      // TESTPLAN => LOGOUT FUNCTION
    },
    async test6() {
      //TEST 6
      const folderID = '1f56O5B2-BrpSn_pGnj4a9kT78t2HoNBq';
      const docname = 'Testdokument';
      const createNoteObject = { userHash: this.userHash, noteName: docname, folderId: folderID };
      const res6 = await axios({
        url: 'http://localhost:3000/note',
        method: 'POST',
        'content-type': 'application/json',
        data: createNoteObject,
      });
      console.log(res6.data);
    },
    async test7() {
      //TEST 7
      const folderID = '1f56O5B2-BrpSn_pGnj4a9kT78t2HoNBq';
      const docname = '';
      const createNoteObject = { userHash: this.userHash, noteName: docname, folderId: folderID };
      const res7 = await axios({
        url: 'http://localhost:3000/note',
        method: 'POST',
        'content-type': 'application/json',
        data: createNoteObject,
      });
      console.log(res7.data);
    },
    async test8() {
      //TEST 8
      const res8 = await axios({
        url: `http://localhost:3000/folder/${this.userHash}`,
        method: 'GET',
      });
      console.log('Testergebnis 8:');
      console.log(res8.data);
    },
    async test9() {
      //TEST 9
      const folder9 = {
        userHash: this.userHash,
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
      console.log('Testergebnis 9:');
      console.log(res9.data);
    },
    async test10() {
      //TEST 10
      const folder10 = {
        userHash: this.userHash,
        folderName: '',
        teacherName: 'Bobert Raumgartner',
        grade: 4,
      };
      const res10 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder10,
      });
      console.log('Testergebnis 10:');
      console.log(res10.data);
    },
    async test11() {
      //TEST 11
      const folder11 = {
        userHash: this.userHash,
        folderName: '°^"²³§$%&/(()=?\\}][{`´*+#_-:.;,<>|',
        teacherName: 'Bobert Raumgartner',
        grade: 4,
      };
      const res11 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder11,
      });
      console.log('Testergebnis 10:');
      console.log(res11.data);
    },
    async test12() {
      //TEST 12
      const folder12 = {
        userHash: this.userHash,
        folderName: 'Folder12',
        teacherName: '',
        grade: 4,
      };

      const res12 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder12,
      });

      console.log('Testergebnis 12:');
      console.log(res12.data);
    },
    async test13() {
      const folder13 = {
        userHash: this.userHash,
        folderName: 'Folder13',
        teacherName: '°^"²³§$%&/(()=?\\}][{`´*+#_-:.;,<>|',
        grade: 4,
      };

      const res13 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder13,
      });

      console.log('Testergebnis 13:');
      console.log(res13.data);
    },
    async test14() {
      const folder14 = {
        userHash: this.userHash,
        folderName: 'Folder14',
        teacherName: 'Bobert Raumgartner',
        grade: 'ABC',
      };

      const res14 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder14,
      });

      console.log('Testergebnis 14:');
      console.log(res14.data);
    },
    async test15() {
      const folder15 = {
        userHash: this.userHash,
        folderName: 'Folder15',
        teacherName: 'Bobert Raumgartner',
        grade: '*"!',
      };

      const res15 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder15,
      });

      console.log('Testergebnis 15:');
      console.log(res15.data);
    },
    async test16() {
      const folder16 = {
        userHash: this.userHash,
        folderName: 'Folder16',
        teacherName: 'Bobert Raumgartner',
        grade: '',
      };

      const res16 = await axios({
        url: 'http://localhost:3000/folder',
        method: 'POST',
        'content-type': 'application/json',
        data: folder16,
      });

      console.log('Testergebnis 16:');
      console.log(res16.data);
    },
    async test17() {
      const data17 = { userHash: this.userHash, folderId: '15Hui-_Eb2Es-PqLzunxvmiImiYHPfovB' };
      const res17 = await axios({
        method: 'delete',
        url: `http://localhost:3000/folder`,
        'content-type': 'application/json',
        data: data17,
      });
      console.log('Testergebnis 17 gelöscht:');
      console.log(res17.data);
    },
    async test18() {
      const data18 = {
        userHash: this.userHash,
        noteId: '1bHbgh7IXLZ5gzrc8VZYAupL261irlDmlQEm-69oGlpA',
      };
      const res18 = await axios({
        method: 'delete',
        url: `http://localhost:3000/note`,
        'content-type': 'application/json',
        data: data18,
      });
      console.log('Testergebnis 18 gelöscht:');
      console.log(res18.data);
    },
    async test19() {
      const folderId = '1f56O5B2-BrpSn_pGnj4a9kT78t2HoNBq';
      //TEST 8
      const res19 = await axios({
        url: `http://localhost:3000/notes/${folderId}`,
        method: 'GET',
      });
      console.log('Testergebnis 19:');
      console.log(res19.data);
    },
  },
  created() {
    this.userHash = localStorage.getItem('userHash');
  },
};
</script>

<style></style>
