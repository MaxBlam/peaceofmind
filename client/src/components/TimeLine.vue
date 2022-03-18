<template>
  <div class="overflow-hidden d-flex flex-wrap justify-content-center my-4">
    <div class="card col-11 col-md-3 my-2 mx-2">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text text-truncate">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card col-11 col-md-3 my-2 mx-2">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text text-truncate">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card col-11 col-md-3 my-2 mx-2">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text text-truncate">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
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
};
</script>

<style lang="scss" scoped></style>
