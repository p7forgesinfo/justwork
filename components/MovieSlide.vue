<script setup lang="ts">
const props = defineProps<{
  slide: Slide;
}>();

const page = useMainPageStore();

const posterUrl = computed(() => {
  const poster = props.slide.title.assets.find((asset) => asset.asset_type === 'Banner')

  return poster?.resize_url.replace('{w}x{h}', '600x340');
})
</script>

<template>
  <v-card
    class="movie-slide"
    :title="slide.title.title"
    :text="slide.title.synopsis"
  >
    <v-card-item>
      <v-img
        :src="posterUrl"
        aspect-ratio="16/9"
        cover
        height="340"
      />
    </v-card-item>
    <v-card-item>
      <v-chip-group>
        <v-chip
          v-for="genre in slide.title.genres"
          :key="genre.oid"
          @click="page.toggleTag(genre.name)"
        >
          {{ genre.name }}
        </v-chip>
      </v-chip-group>
    </v-card-item>
    <v-card-item class="movie-slide__labels">
      <span
        v-for="label in slide.title.labels"
        :key="label.oid"
        @click="page.toggleTag(label.name)"
      >
        #{{ label.name }}
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
