import { defineStore } from "pinia";

export const useMainPageStore = defineStore("mainpage", () => {
  const { data, status } = useShowcaseApi<Showcase>('/mainpage');
  const slides = computed<Slide[]>(() => data.value?.slides || []);

  return { slides, status }
});