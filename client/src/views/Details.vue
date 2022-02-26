<template>
  <div class="container-fluid">
    <TimeLine />
    <div class="container" v-if="notes.length > 0">
      <h1 class="my-4">Notes</h1>
      <Note
        v-for="(note, i) of notes"
        :key="i"
        :note="note"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Note from '@/components/Note.vue';
import TimeLine from '@/components/TimeLine.vue';
export default {
  components: {
    Note,
    TimeLine,
  },
  props: {
    id: String,
  },
  data: () => ({
    notes: [],
  }),
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await axios({
        url: 'http://localhost:3000/notes/' + this.id,
        method: 'GET',
      });
      this.notes = data.data.files;
    },
  },
};
</script>

<style lang="scss" scoped></style>
