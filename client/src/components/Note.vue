<template>
  <div class="container">
    <p class="h4">{{ note.name }}</p>
    <div class="container-fluid shadow rounded-4 blur">
      <h3>{{note.name}}</h3>
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
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
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
