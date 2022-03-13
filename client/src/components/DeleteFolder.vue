<template>
  <div class="modal">
    <div tabindex="-1" data-micromodal-close class="modal__overlay">
      <div class="modal-content container" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h5 class="modal-title">Delete Folder</h5>
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
          <button
            type="button"
            aria-label="Add Note"
            data-micromodal-close
            class="btn btn-identity transition-sm"
            @click="deleteFolder"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { folder: Object },
  methods: {
    deleteFolder() {
      this.$emit('deleteFolder', this.folder.id);
    },
  },
};
</script>
