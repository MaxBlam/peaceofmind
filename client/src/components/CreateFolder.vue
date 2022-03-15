<template>
  <div class="modal">
    <div tabindex="-1" data-micromodal-close class="modal__overlay">
      <div class="modal-content container" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h5 class="modal-title">New Folder</h5>
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
            <label class="form-label">Subject</label>
            <input
              type="text"
              class="form-control"
              placeholder="Chemistry"
              v-model="folderName"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Teacher</label>
            <input
              type="text"
              class="form-control"
              placeholder="Mr Bobert Raumgartner"
              v-model="teacher"
            />
          </div>
          <div class="input-group mb-3">
            <label class="form-label">Grade</label>
            <input
              v-model="grade"
              type="range"
              class="form-range"
              min="0"
              max="100"
              step="5"
              id="customRange3"
            />
            <input
              v-model="grade"
              type="number"
              min="0"
              max="100"
              class="form-control"
              placeholder="Number in percent"
              aria-label="Grade"
            />
          </div>
          <button
            type="button"
            aria-label="Create Folder"
            data-micromodal-close
            class="btn btn-identity transition-sm"
            @click="$emit('createFolder', folder)"
            :disabled="folderName === ''"
          >
            Add Folder
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    grade: '',
    teacher: '',
    folderName: '',
  }),
  computed: {
    folder: function () {
      return {
        grade: this.grade,
        teacher: this.teacher,
        folderName: this.folderName,
      };
    },
  },
};
</script>

<style scoped></style>
