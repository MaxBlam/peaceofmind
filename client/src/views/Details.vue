<template>
  <div class="container-fluid">
    <TimeLine />
    <div class="container">
      <h3 class="my-4">Notes</h3>
      <div class="text-center i-identity" v-if="notes===null">
        <p>Loading...</p>
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else>
        <Note v-for="(note, i) of notes" :key="i" :note="note" />
      </div>
    </div>
  </div>
</template>

<script>
import Note from '@/components/Note.vue';
import TimeLine from '@/components/TimeLine.vue';
export default {
  components: {
    Note,
    TimeLine,
  },
  props: {
    id: String,
    notes: Array,
  },
  created() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      this.$emit('getNotes', this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
