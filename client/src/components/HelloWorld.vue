<template>
  <div>
    <p>Hi, my Name is</p>
    <p>{{ test }}</p>

    <button @click="login">
      <span v-if="token == ''" style="background-color: red; color: white">Please Log in</span>
      <span v-else style="background-color: green; color: white">Please Log in</span>
    </button>

    <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>MIME</th>
        <th>Kind</th>
        <th>Go To</th>
      </thead>
      <tbody>
        <tr v-for="(file, id) in filterFiles" :key="id">
          <td>{{ file.id }}</td>
          <td>{{ file.name }}</td>
          <td>{{ file.mimeType }}</td>
          <td>{{ file.kind }}</td>
          <td><button @click="openPage(file.id)">Go</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      test: 'TEST 123',
      token: '',
      response: [],
    };
  },
  computed: {
    filterFiles() {
      return this.response.filter((el) => el.mimeType == 'application/vnd.google-apps.document');
    },
  },
  methods: {
    openPage(id) {
      window.open(`https://docs.google.com/document/d/${id}`);
    },
    async getTest() {
      const res = await axios({
        url: 'http://localhost:3000/welcome',
        method: 'GET',
      });
      this.test = res.data;
    },
    async login() {
      const googleUser = await this.$gAuth.signIn();
      // if (!googleUser) return;
      // this.token = googleUser.getAuthResponse().id_token;
      const goaRes = await googleUser.grantOfflineAccess({
        scope: 'https://www.googleapis.com/auth/drive.metadata',
      });
      console.log(goaRes);
      console.log('++++++++++++++++++');
      const res = await axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        'Content-Type': 'application/json',
        data: {
          code: goaRes.code,
        },
      });
      console.log(res.data);
      this.response = res.data;
    },
  },
  created() {
    this.getTest();
  },
};
</script>

<style lang="scss" scoped></style>
