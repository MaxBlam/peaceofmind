<template>
  <div class="overflow-hidden d-flex flex-wrap justify-content-center my-4">
    <div class="card col-11 col-md-3 my-2 mx-2" v-for="n of trimmedNotes" :key="n.id">
      <div class="card-body">
        <h5 class="card-title">{{ n.name }}</h5>
        <p class="card-text text-truncate">No content provided</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated ? mins ago</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    trimmedNotes: function () {
      return [...this.notes].reverse().slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped></style>
