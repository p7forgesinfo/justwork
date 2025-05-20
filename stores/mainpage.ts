import { defineStore, storeToRefs } from "pinia";

export const useMainPageStore = defineStore("mainpage", () => {
  const { allMetas } = storeToRefs(useMetadataStore());

  const getValuesFromMeta = (value: string) => allMetas.value.has(value)
    ? allMetas.value.get(value)
    : value;

  const { data, status } = useApi('/v1/showcases/showcases/mainpage/', {
    transform: (source: Showcase): Showcase => deepChangeValues(source, getValuesFromMeta)
  })

  const slides = computed(() => data.value?.slides || []);

  return {
    slides,
    status
  }
});