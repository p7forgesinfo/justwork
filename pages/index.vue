<script setup lang="ts">
const page = useMainPageStore();

</script>

<template>
  <div class="main-page">
    <v-progress-circular v-if="page.status === 'pending'" indeterminate />
    <movie-slide
      v-for="slide in page.slides"
      :key="slide.oid"
      :slide="slide"
    />
  </div>
</template>

<style lang="scss">
.main-page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
}
</style>
