<template>
  <div class="card m-3 rounded-3" style="width: 27rem">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <img
          src="@/assets/folder.svg"
          class="text-primary"
          style="width: 15%"
          alt=""
        />
        <h5 class="ms-2 me-auto card-title d-inline">Card title</h5>
        <i class="bi bi-plus h3" @click="createDocument"></i>
      </div>
      <div class="d-lg-none">
        <h6 class="card-subtitle mb-2 text-muted">Card subtitles</h6>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitles</h6>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitles</h6>
      </div>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      {{ folder }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    folder: {
      type: Number,
      default: () => ({}),
    },
  },
  methods: {
    createDocument() {
      this.$emit('createDocument', this.folder);
    },
  },
};
</script>
