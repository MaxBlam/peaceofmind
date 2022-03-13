<template>
  <div class="container-fluid">
    <TimeLine />
    <div class="container" v-if="notes.length > 0">
      <h3 class="my-4">Notes</h3>
      <Note v-for="(note, i) of notes" :key="i" :note="note" />
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
  },
  data: () => ({
    notes: [],
  }),
  created() {
    this.getData();
  },
  methods: {
    getNotes() {
      this.$emit('getNotes', this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
