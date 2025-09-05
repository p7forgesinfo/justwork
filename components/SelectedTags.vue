<script setup lang="ts">
const page = useMainPageStore();

const remove = (tag: string) => {
  page.toggleTag(tag);
}
</script>

<template>
  <div
    v-if="page.selectedTagList.length"
    class="selected-tags"
  >
    <v-chip
      v-for="tag in page.selectedTagList"
      :key="tag"
      closable
      @click:close="remove(tag)"
    >
      {{ tag }}
    </v-chip>
  </div>
  <div
    v-else
    class="selected-tags__empty"
  />
</template>

<style lang="scss">
.selected-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
</style>


