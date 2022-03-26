<template>
  <div class="modal micromodal-slide">
    <div tabindex="-1" data-micromodal-close class="modal__overlay">
      <div
        class="modal-content container  modal__container"
        v-bind:class="{
          'bg-dark': darkTheme,
          'modal-content': !darkTheme,
          'text-light': darkTheme,
        }"
        role="dialog"
        aria-modal="true"
      >
        <div class="modal-header">
          <h5 class="modal-title">Upload File</h5>
          <button
            type="button"
            class="btn"
            v-bind:class="{ 'text-light': darkTheme }"
            aria-label="Close modal"
            data-micromodal-close
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <input
              type="file"
              class="form-control"
              v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
              accept="image/*"
              @change="convertImgToText($event)"
            />
          </div>
          <div v-if="status !== ''">
            <div class="progress" v-bind:class="{ 'bg-dark': darkTheme }">
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
                {{ Math.floor(progress) }}%
              </div>
            </div>
            <p class="mb-3">{{ status }}...</p>
          </div>
          <div class="mb-3">
            <label class="form-label">Choose Folder</label>
            <select class="form-select" v-model="folderId">
              <option v-for="f of folders" :value="f.f_id" :key="f.f_id">
                {{ f.name }}
              </option>
            </select>
          </div>

          <button
            type="button"
            aria-label="Add Note"
            data-micromodal-close
            class="btn btn-identity transition-sm"
            @click="addNote"
            :disabled="file == '' || !folderId"
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
    folderId: null,
    someData: {},
    language: 'eng',
    progress: 0,
    status: '',
  }),
  props: {
    folders: {
      type: Array,
      default: () => [],
    },
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    addNote() {
      this.$emit('addNote', { text: this.file, folderId: this.folderId });
    },
    async convertImgToText(input) {
      this.someData = input.target.files[0]; // Get inputs
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
