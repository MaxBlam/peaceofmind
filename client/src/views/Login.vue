<template>
  <fieldset
    class="
      container
      d-flex
      justify-content-center
      flex-wrap flex-column
      mt-5
      p-4
      border
      rounded
      text-center
    "
  >
    <legend class="mb-3">Login</legend>
    <button
      class="btn btn-identity"
      @click="login()"
      aria-label="Sign In"
    >
      Sign In with Google
    </button>
  </fieldset>
</template>

<script>
import axios from 'axios';
export default {
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
        if (res.data.code !== 401)
          localStorage.setItem('userHash', res.data.data.userHash);
        else alert(res.data.data);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
