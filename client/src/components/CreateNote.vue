<template>
  <div class="modal">
    <div tabindex="-1" data-micromodal-close class="modal__overlay">
      <div
        class="container rounded-3"
        role="dialog"
        aria-modal="true"
        v-bind:class="{
          'bg-dark': darkTheme,
          'modal-content': !darkTheme,
          'text-light': darkTheme,
        }"
      >
        <div class="modal-header">
          <h5 class="modal-title">Create New Note</h5>
          <button
            type="button"
            class="btn"
            aria-label="Close modal"
            data-micromodal-close
          >
            <i
              class="bi bi-x-lg"
              v-bind:class="{ 'text-light': darkTheme }"
            ></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Note Name</label>
            <input
              type="text"
              class="form-control"
              v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
              placeholder="Name_Chemistry.docx"
              v-model="noteName"
              @keyup.enter="addNote"
            />
          </div>
          <button
            type="button"
            aria-label="Add Note"
            class="btn btn-identity transition-sm"
            @click="addNote"
          >
            Add Note to {{ currentFolder.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    noteName: '',
  }),
  props: {
    currentFolder: Object,
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    addNote() {
      this.$emit('createNote', this.noteName);
      this.noteName = '';
    },
  },
};
</script>

<style scoped></style>
