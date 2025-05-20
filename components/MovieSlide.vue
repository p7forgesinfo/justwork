<script setup lang="ts">
defineProps({
  slide: {
    type: Object as PropType<Slide>,
    required: true
  }
});
</script>

<template>
  <v-card
    class="movie-slide"
    :title="slide.title.title"
    :text="slide.title.synopsis"
  >
    <v-card-item>
      <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" aspect-ratio="16/9" cover/>
    </v-card-item>
    <v-card-item>
      <v-chip-group>
        <v-chip v-for="genre in slide.title.genres" :key="(genre as MetaItem).oid">
          {{ (genre as MetaItem).name }}
        </v-chip>
      </v-chip-group>
    </v-card-item>
    <v-card-item class="movie-slide__labels">
      <span v-for="label in slide.title.labels" :key="(label as MetaItem).oid">
        #{{ (label as MetaItem).name }}
      </span>
    </v-card-item>
  </v-card>
</template>

<style lang="scss">
.movie-slide {
  &__labels {
    display: flex;
    gap: 8px;
    color: rgb(35, 25, 179);
    cursor: pointer;
  }
}
</style>
