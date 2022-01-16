<template>
  <div class="container-fluid">
    <TimeLine/>
    <h1 class="my-4">Documents</h1>
    <Document
      v-for="(document, i) of documents"
      :key="i"
      :document="document"
    />
  </div>
</template>

<script>
import Document from '@/components/Document.vue';
import TimeLine from '@/components/TimeLine.vue';
export default {
  components: {
    Document,
    TimeLine
  },
  props: {
    id: Number,
  },
  data: () => ({
    documents: [{ name: 'App.vue' }, { name: 'test.vue' }],
  }),
};
</script>

<style lang="scss" scoped></style>
