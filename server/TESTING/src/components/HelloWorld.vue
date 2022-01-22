<template>
  <div>
    <div>
      <button class="btn bg-identity text-light p-2" @click="login()">Sign In with Google</button>
      <button class="btn bg-identity text-light p-2" @click="register()">Register</button>
      <span>logged in: {{ loggedIn }}</span>
      <button class="btn bg-identity text-light p-2" @click="logout()">Logout</button>
    </div>

    <div></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      loggedIn: false,
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
  },
};
</script>

<style></style>
