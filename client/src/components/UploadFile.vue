<template>
  <div class="modal">
    <div tabindex="-1" data-micromodal-close class="modal__overlay">
      <div class="modal-content container" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h5 class="modal-title">Upload File</h5>
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

          <div class=" mb-3">
            <label class="form-label">Choose File</label>
            <input type="file" class="form-control" />
          </div>

          <button
            type="button"
            aria-label="Add Note"
            data-micromodal-close
            class="btn bg-identity text-light"
            @click="addNote"
          >
            Add Note to {{ folder }}
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
    folder: Object,
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
