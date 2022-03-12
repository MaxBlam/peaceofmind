<template>
  <div class="modal">
    <div tabindex="-1" data-micromodal-close class="modal__overlay">
      <div class="modal-content container" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h5 class="modal-title">Create New Note</h5>
          <button
            type="button"
            class="btn"
            aria-label="Close modal"
            data-micromodal-close
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Note Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name_Chemistry.docx"
              v-model="noteName"
            />
          </div>
          <button
            type="button"
            aria-label="Add Note"
            data-micromodal-close
            class="btn btn-identity"
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
