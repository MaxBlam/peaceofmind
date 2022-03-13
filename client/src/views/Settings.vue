<template>
  <div class="container">
    <h3 class="my-4">Settings</h3>
    <form class="form">
      <p>In-Document Styling Preferences</p>
      <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text col-2" id="pColor-wrapping"
          >Paragraph Color</span
        >
        <input
          type="text"
          v-model="pColor"
          class="form-control"
          placeholder="Hex Code (e.g. #FFFFFF)"
          aria-label="Paragraph Color"
          aria-describedby="pColor-wrapping"
          maxlength="6"
          pattern="[A-Za-z0-9]"
        />
        <button
          class="input-group-text btn btn-identity transition-sm col-2"
          type="button"
          @click="pColor = ''"
        >
          Reset
        </button>
      </div>
      <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text col-2" id="liColor-wrapping"
          >List Color</span
        >
        <input
          type="text"
          v-model="liColor"
          class="form-control"
          placeholder="Hex Code (e.g. #FFFFFF)"
          aria-label="Paragraph Color"
          aria-describedby="liColor-wrapping"
          maxlength="6"
          pattern="[A-Za-z0-9]"
        />
        <button
          class="input-group-text btn btn-identity transition-sm col-2"
          type="button"
          @click="liColor = ''"
        >
          Reset
        </button>
      </div>
      <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text col-2" id="hColor-wrapping"
          >Heading Color</span
        >
        <input
          type="text"
          v-model="hColor"
          class="form-control"
          placeholder="Hex Code (e.g. #FFFFFF)"
          aria-label="Paragraph Color"
          aria-describedby="hColor-wrapping"
          maxlength="6"
          pattern="[A-Za-z0-9]"
        />
        <button
          class="input-group-text btn btn-identity transition-sm col-2"
          type="button"
          @click="hColor = ''"
        >
          Reset
        </button>
      </div>
      <button type="submit" class="btn btn-identity transition-sm col-2">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    pColor: '',
    hColor: '',
    liColor: '',
  }),
  methods: {
    saveSettings() {
      this.$emit('saveSettings', {
        pColor: this.pColor,
        hColor: this.hColor,
        liColor: this.liColor,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
