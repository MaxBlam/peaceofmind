<template>
  <div class="card m-3 rounded-3" style="width: 27rem">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <img
          src="@/assets/folder.svg"
          alt="Folder SVG"
          class="text-primary"
          style="width: 15%; cursor: pointer"
          @click="$router.push(`/folder/${folder.folder_id}`)"
        />
        <h5
          class="ms-2 me-auto card-title d-inline"
          @click="$router.push(`/folder/${folder.folder_id}`)"
          style="cursor: pointer"
        >
          {{ folder.name }}
        </h5>
        <i
          class="bi bi-plus h3 i-identity"
          style="cursor: pointer"
          @click="openNoteModal"
        ></i>
        <i
          class="bi bi-x-square-fill h4 mx-2 i-identity"
          style="cursor: pointer"
          @click="delFolderModal"
        ></i>
      </div>
      <h6 class="card-subtitle mb-2 text-muted">
        Teacher: {{ folder.teacher_name }}
      </h6>
      <h6 class="card-subtitle mb-2 text-muted">Grade: {{ folder.grade }}</h6>
      <p class="card-text">
        {{ folder.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    folder: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    openNoteModal() {
      this.$emit('openNoteModal', this.folder);
    },
    delFolderModal() {
      this.$emit('delFolderModal', this.folder.folder_id);
    },
  },
};
</script>
