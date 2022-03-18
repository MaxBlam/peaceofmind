<template>
  <div class="container-fluid">
    <TimeLine :notes="notes"/>
    <div class="container">
      <div class="d-grid gap-2 my-3">
        <button class="btn btn-identity" type="button" @click="createNoteModal">
          <i class="bi bi-plus-lg"></i> Create Document
        </button>
        <button class="btn btn-i-danger" type="button" @click="delFolderModal">
          <i class="bi bi-exclamation-circle-fill"></i> Delete Folder
        </button>
      </div>
      <h3 class="my-4" v-bind:class="{ 'text-light': darkTheme }">Notes</h3>
      <div class="input-group mb-3">
        <span
          class="input-group-text"
          v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
          id="search"
          >Search Notes</span
        >
        <input
          v-model="search"
          type="text"
          class="form-control"
          v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
          placeholder="Chemistry"
          aria-label="search"
          aria-describedby="search"
        />
      </div>
      <div
        class="text-center"
        v-bind:class="{ 'i-identity': !darkTheme, 'text-light': darkTheme }"
        v-if="notes === null"
      >
        <p>Loading...</p>
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else>
        <Note
          v-for="(note, i) of filteredNotes"
          :key="i"
          :note="note"
          :darkTheme="darkTheme"
          @deleteNote="deleteNote"
        />
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
  data: () => ({
    search: '',
  }),
  props: {
    id: String,
    notes: { type: Array, default: () => [] },
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
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
    deleteNote(id) {
      this.$emit('deleteNote', id);
    },
  },
  computed: {
    filteredNotes() {
      return this.notes.filter(el =>
        el.name.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
