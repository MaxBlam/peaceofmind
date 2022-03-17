<template>
  <div
    class="m-3 card rounded-3"
    v-bind:class="{
      'bg-dark': darkTheme,
      'shadow-lg': darkTheme,
      'text-light': darkTheme,
    }"
    style="width: 27rem"
  >
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
          class="bi bi-plus h3"
          v-bind:class="{ 'i-identity': !darkTheme, 'text-light': darkTheme }"
          style="cursor: pointer"
          @click="createNoteModal"
        ></i>
        <i
          class="bi bi-x-square-fill h4 mx-2"
          v-bind:class="{ 'i-identity': !darkTheme, 'text-light': darkTheme }"
          style="cursor: pointer"
          @click="delFolderModal"
        ></i>
      </div>
      <h6 class="card-subtitle mb-2 text-muted">
        Teacher: {{ folder.teacher_name }}
      </h6>
      <h6 class="card-subtitle mb-2 text-muted">Grade: {{ folder.grade }} %</h6>
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
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    createNoteModal() {
      this.$emit('createNoteModal', this.folder.folder_id);
    },
    delFolderModal() {
      this.$emit('delFolderModal', this.folder.folder_id);
    },
  },
};
</script>
