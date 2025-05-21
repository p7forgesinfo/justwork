import { defineStore } from "pinia";

export const useMainPageStore = defineStore("mainpage", () => {
  const { allMetas } = storeToRefs(useMetadataStore());

  const { data, status } = useShowcaseApi('mainpage', allMetas.value)

  const slides = computed(() => data.value?.slides || []);

  return {
    slides,
    status
  }
});