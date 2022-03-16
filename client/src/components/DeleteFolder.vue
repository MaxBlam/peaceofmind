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
          <h5 class="modal-title">Delete Folder</h5>
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
            <div class="alert alert-danger" role="alert">
              <h6>Are you absolutely sure?</h6>
              Unexpected bad things will happen if you don't read this! <br />
              This action cannot be undone. This will permanently delete the
              {{ currentFolder.name }} folder and documents
            </div>
            <label class="form-label"
              >Please type
              <span class="fw-bold">{{ currentFolder.name }}</span> to
              confirm.</label
            >
            <input type="text" class="form-control" v-model="input" />
          </div>
          <button
            type="button"
            aria-label="Add Note"
            data-micromodal-close
            class="btn btn-danger"
            :disabled="input != currentFolder.name"
            @click="deleteFolder"
          >
            I understand the consequences, delete this folder
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentFolder: Object,
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    input: '',
  }),
  methods: {
    deleteFolder() {
      this.$emit('deleteFolder', this.currentFolder.folder_id);
      this.input = '';
    },
  },
};
</script>
