<template>
  <div class="container-fluid">
    <TimeLine />
    <div class="container">
      <h1 class="my-4">Notes</h1>
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
    id: Number,
  },
  data: () => ({
    notes: [{ name: 'App.vue' }, { name: 'test.vue' }],
  }),
};
</script>

<style lang="scss" scoped></style>
