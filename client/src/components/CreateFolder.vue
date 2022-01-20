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
          <div class="mb-3">
            <label class="form-label">Grade</label>
            <select class="form-select" v-model="grade">
              <option selected value=""></option>
              <option :value="o" v-for="(o, i) of 6" :key="i">
                {{ o }}
              </option>
            </select>
          </div>
          <button
            type="button"
            class="btn bg-identity text-light"
            @click="$emit('createFolder', folder)"
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
