<template>
  <div class="container">
    <p class="h4" v-bind:class="{ 'text-light': darkTheme }">{{ note.name }}</p>
    <div class="container-fluid pb-2">
      <div class="row shadow rounded-3 overflow-hidden">
        <div class="col-md-8 col-sm-12 bg-light col-lg-10 blur">
          <h3>{{ note.name }}</h3>
          <ol class="list-group list-group-numbered">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
            </li>
          </ol>
        </div>
        <a
          class="
            border-0
            btn-identity
            col-md-2 col-sm-12 col-lg-1
            py-2 py-md-0
            text-decoration-none
            d-flex
            align-items-center
            justify-content-center
          "
          :href="`https://docs.google.com/${fileType}/d/${note.id}`"
          target="_blank"
        >
          Open
        </a>
        <button
          class="border-0 btn-i-danger col-md-2 col-sm-12 col-lg-1 py-2 py-md-0"
          @click="deleteNote"
        >
          <i class="bi bi-trash h3"></i>
        </button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
    },
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    deleteNote() {
      this.$emit('deleteNote', this.note.id);
    },
  },
  computed: {
    fileType: function () {
      if (this.note.mimeType.includes('document')) {
        return 'document';
      }
      return 'file';
    },
  },
};
</script>

<style scoped>
.blur {
  filter: blur(4px);
  -webkit-filter: blur(4px);
}
</style>
