import { defineStore } from "pinia";

const showcaseURL = import.meta.env.VITE_API_SHOWCASE_URL;

export const useMainPageStore = defineStore("mainpage", () => {
  const { allMetas } = storeToRefs(useMetadataStore());

  const getValuesFromMeta = (value: string) => allMetas.value.has(value)
    ? allMetas.value.get(value)
    : value;

  const { data, status } = useBaseApi(`${showcaseURL}/mainpage`, {
    transform: (source: Showcase): Showcase => deepChangeValues(source, getValuesFromMeta),
  })

  const slides = computed(() => data.value?.slides || []);

  return {
    slides,
    status
  }
});