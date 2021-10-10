<template>
  <div>
    <p>Hi, my Name is</p>
    <p>{{ test }}</p>

    <button @click="login">
      <span v-if="token == ''" style="background-color: red; color: white">Please Log in</span>
      <span v-else style="background-color: green; color: white">Please Log in</span>
    </button>

    <h1 v-if="response != ''">{{ response }}</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      test: 'TEST 123',
      token: '',
      response: '',
    };
  },
  methods: {
    async getTest() {
      const res = await axios({
        url: 'http://localhost:3000/welcome',
        method: 'GET',
      });
      this.test = res.data;
    },
    async login() {
      const googleUser = await this.$gAuth.signIn();
      if (!googleUser) return;
      this.token = googleUser.getAuthResponse().id_token;

      const res = await axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        'Content-Type': 'application/json',
        data: {
          token: this.token,
        },
      });

      this.response = res.data;
    },
  },
  created() {
    this.getTest();
  },
};
</script>

<style lang="scss" scoped></style>
