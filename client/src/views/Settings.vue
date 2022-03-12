<template>
  <div class="container">
    <h3 class="my-4">Settings</h3>
    <form class="form">
      <p>Document Styling Preferences</p>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping"
          >Paragraph Color</span
        >
        <input
          type="text"
          v-model="color"
          class="form-control"
          placeholder="#FFFFFFF"
          aria-label="Paragraph Color"
          aria-describedby="addon-wrapping"
        />
        <button class="input-group-text btn btn-danger" type="button" @click="color = ''">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: '#',
  }),
};
</script>

<style lang="scss" scoped></style>
