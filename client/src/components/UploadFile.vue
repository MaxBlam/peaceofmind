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
          <div class="mb-3">
            <label class="form-label">Choose File</label>
            <input
              type="file"
              class="form-control"
              accept="image/*"
              @change="processFile($event)"
            />
          </div>
          <div class="progress">
            <div
              class="
                progress-bar
                bg-identity
                progress-bar-striped progress-bar-animated
              "
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="`width: ${progress}%`"
            >
              {{ progress }}%
            </div>
          </div>
          <p class="mb-3">{{ status }}</p>
          <div class="mb-3">
            <label class="form-label">Choose Folder</label>
            <select class="form-select" v-model="folder">
              <option v-for="f of folders" :key="f.id" :value="f.id">
                {{ f.name }}
              </option>
            </select>
          </div>

          <button
            type="button"
            aria-label="Add Note"
            data-micromodal-close
            class="btn bg-identity text-light"
            @click="addNote"
            :disabled="file == '' || folder == {}"
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tesseract from 'tesseract.js';
export default {
  data: () => ({
    file: '',
    folder: {},
    someData: {},
    language: 'eng',
    progress: 0,
    status: '',
  }),
  props: {
    folders: Array,
  },
  methods: {
    addNote() {
      //
    },
    processFile(input) {
      this.someData = input.target.files[0]; // Get inputs
      this.convertImgToText();
    },
    async convertImgToText() {
      Tesseract.recognize(this.someData, this.language, {
        logger: (m) => {
          this.progress = m.progress * 100;
          this.status = m.status;
        },
      }).then(({ data: { text } }) => {
        this.file = text;
        this.status = 'Done!';
      });
    },
  },
};
</script>
