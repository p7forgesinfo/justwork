<script setup lang="ts">
const page = useMainPageStore();

</script>

<template>
  <div class="main-page">
    <v-card class="main-page__message"  variant="outlined">
      <v-card-text>
        Мне не удалось найти откуда можно взять картинки для превьюшек, так как nginx такое медиа не отдает
        и отвечает с ошибкой "415 Unsupported Media Type", потому картинка первая, которая попалась.<br>
        Понятно, что нужно бы проработать крайние случаи в выборке данных, но не в тестовом же ;)<br>
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
  
    @include device(sm) {
      padding: 10px;
    }

    @include device(xs) {
      padding: 4px;
    }

  &__message {
    margin-bottom: 40px;
  }
  &__slides {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @include device(xl) {
      grid-template-columns: repeat(4, 1fr);
    }

    @include device(lg) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include device(md) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    @include device(sm) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    @include device(xs) {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }
}
</style>
