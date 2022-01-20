<template>
  <div class="modal">
    <div tabindex="-1" data-micromodal-close class="modal__overlay">
      <div class="modal-content container" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h5 class="modal-title">
            Create New Document
          </h5>
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
            <label class="form-label">Document Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name_Chemistry.docx"
              v-model="documentName"
            />
          </div>
          <button
            type="button"
            class="btn bg-identity text-light"
            @click="$emit('createDocument', documentName)"
          >
            Add Document to {{}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    documentName: '',
  }),
  props: {
    folder: Object,
  },
};
</script>

<style scoped></style>
