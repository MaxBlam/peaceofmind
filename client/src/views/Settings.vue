<template>
  <div
    class="container"
    v-bind:class="{
      'text-light': darkTheme,
    }"
  >
    <h3 class="my-4">Settings</h3>
    <form class="form">
      <div v-if="userHash">
        <p>In-Document Styling Preferences</p>
        <div class="input-group flex-nowrap mb-3">
          <span
            class="input-group-text col-2"
            v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
            id="pColor-wrapping"
            >Paragraph Color</span
          >
          <input
            type="text"
            v-model="pColor"
            class="form-control"
            v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
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
          <span
            class="input-group-text col-2"
            v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
            id="liColor-wrapping"
            >List Color</span
          >
          <input
            type="text"
            v-model="liColor"
            class="form-control"
            v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
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
          <span
            class="input-group-text col-2"
            v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
            id="hColor-wrapping"
            >Heading Color</span
          >
          <input
            type="text"
            v-model="hColor"
            class="form-control"
            v-bind:class="{ 'bg-dark': darkTheme, 'text-light': darkTheme }"
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
        <button type="submit" class="btn btn-identity transition-sm col-2">
          Save
        </button>
      </div>
      <div>
        <p class="mt-3">App Settings</p>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            v-model="themeSwitch"
            @change="themeChange"
          />
          <label class="form-check-label">Dark Theme</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  created() {
    this.themeSwitch = this.darkTheme;
  },
  data: () => ({
    pColor: '',
    hColor: '',
    liColor: '',
    themeSwitch: false,
  }),
  props: {
    darkTheme: {
      type: Boolean,
      default: () => false,
    },
    userHash: {
      type: String,
      default: () => null,
    },
  },
  methods: {
    saveSettings() {
      this.$emit('saveSettings', {
        pColor: this.pColor,
        hColor: this.hColor,
        liColor: this.liColor,
      });
    },
    themeChange() {
      this.$emit('themeChange', this.themeSwitch);
    },
  },
};
</script>

<style lang="scss" scoped></style>
