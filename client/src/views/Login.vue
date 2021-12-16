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
    "
  >
    <legend>Login</legend>
    <div class="mb-3">
      <label class="form-label">Email address</label>
      <input type="email" class="form-control" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="email" class="form-control" />
    </div>
    <button class="btn bg-identity text-light" @click="login()">Login</button>
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
          localStorage.setItem('userHash', res.data.data);
        else alert(res.data.data);
        console.log("test")
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
