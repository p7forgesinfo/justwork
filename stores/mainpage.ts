import { defineStore } from "pinia";

export const useMainPageStore = defineStore("mainpage", () => {
  const { data, status } = useShowcaseApi('/mainpage');

  const slides = computed(() => data.value?.slides || []);

  return {
    slides,
    status
  }
});