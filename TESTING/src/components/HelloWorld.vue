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
      const res1 = await axios({ url: 'http://localhost:3000/welcome', method: 'get' });
      const test1res = 'Willkommen beim Piece of Mind!';
      if (res1.data == test1res) {
        this.tests.push({ id: '1', outcome: true });
        console.log(`Test 1 Erfolgreich: ${JSON.stringify(this.tests.find((el) => el.id == 1))}`);
      } else {
        this.tests.push({ id: '1', outcome: false });
        console.log(
          `Test 1 Nicht Erfolgreich: ${JSON.stringify(this.tests.find((el) => el.id == 1))}`,
        );
      }

      const res2 = await axios({ url: 'http://localhost:3000/testdrive', method: 'get' });
      const test2res = [
        {
          id: '1BfHK_zg_ojeqHuvMctur29lGSkqkJhIg',
          name: 'Ordner 4',
          mimeType: 'application/vnd.google-apps.folder',
        },
        {
          id: '18jkkhMGc3CvO_cg7PjdoLCDNYmF-miXw',
          name: 'Ordner 3',
          mimeType: 'application/vnd.google-apps.folder',
        },
        {
          id: '15fnUR09fxNoXy4i7FYK9Xy69TROxyOSE',
          name: 'Ordner 2',
          mimeType: 'application/vnd.google-apps.folder',
        },
        {
          id: '1s15MYPUMzHz1IgXnwa1dgBhBn1Mfaipo',
          name: 'Ordner 1',
          mimeType: 'application/vnd.google-apps.folder',
        },
      ];
      if (res2.data.driveRes.data.files == test2res) {
        this.tests.push({ id: '2', outcome: true });

        console.log(`Test 2 Erfolgreich: ${JSON.stringify(this.tests.find((el) => el.id == 2))}`);
      } else {
        this.tests.push({ id: '2', outcome: false });
        console.log(
          `Test 2 Nicht Erfolgreich: ${JSON.stringify(this.tests.find((el) => el.id == 2))}`,
        );
      }
    },
  },
};
</script>

<style></style>
