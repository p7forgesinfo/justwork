<script setup lang="ts">
const page = useMainPageStore();

</script>

<template>
  <div class="main-page">
    <v-card class="main-page__message"  variant="outlined">
      <v-card-text>
        Мне не удалось найти откуда можно взять картинки для превьюшек, так как nginx такое медиа не отдает
        и отвечает с ошибкой "415 Unsupported Media Type", потому картинка первая, которая попалась.<br>
        Понятно, что нужно бы проработать крайние случаи в выборке данных, но не тестовом же ;)<br>
        <br>
        P.S.: Жанры можно таскать влево/вправо
      </v-card-text>
    </v-card>
    <div class="main-page__slides">
      <v-progress-circular v-if="page.status === 'pending'" indeterminate />
      <movie-slide
        v-for="slide in page.slides"
        :key="slide.oid"
        :slide="slide"
      />
    </div>
  </div>
</template>

<style lang="scss">
.main-page {
  padding: 20px;
  
  @media screen and (max-width: 425px) {
    padding: 4px;
  }

  &__message {
    margin-bottom: 40px;
  }
  &__slides {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media screen and (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }
}
</style>
