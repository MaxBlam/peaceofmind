<template>
  <div class="container-fluid">
    <TimeLine />
    <div class="container">
      <div class="d-grid gap-2 my-3">
        <button class="btn btn-identity" type="button" @click="createNoteModal">
          <i class="bi bi-plus-lg"></i> Create Document
        </button>
        <button class="btn btn-danger" type="button" @click="delFolderModal">
          <i class="bi bi-exclamation-circle-fill"></i> Delete Folder
        </button>
      </div>
      <h3 class="my-4">Notes</h3>
      <div class="text-center i-identity" v-if="notes === null">
        <p>Loading...</p>
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else>
        <Note v-for="(note, i) of notes" :key="i" :note="note" />
      </div>
    </div>
  </div>
</template>

<script>
import Note from '@/components/Note.vue';
import TimeLine from '@/components/TimeLine.vue';
export default {
  components: {
    Note,
    TimeLine,
  },
  props: {
    id: String,
    notes: Array,
  },
  created() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      this.$emit('getNotes', this.id);
    },
    delFolderModal() {
      this.$router.push('/');
      this.$emit('delFolderModal', this.id);
    },
    createNoteModal() {
      this.$emit('createNoteModal', this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
