<template>
  <div
    class="modal-dialog modal-dialog-centered fade"
  >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">New Folder</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
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
            <option value="1" v-for="(o, i) of 6" :key="i">
              {{ o }}
            </option>
          </select>
        </div>
        <button type="button" class="btn bg-identity text-light">
          Add Folder
        </button>
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
};
</script>

<style lang="scss" scoped></style>
