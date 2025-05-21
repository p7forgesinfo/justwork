const showcaseURL = import.meta.env.VITE_API_SHOWCASE_URL;

export const useShowcaseApi = (endpoint: string) => {
  const { allMetas } = storeToRefs(useMetadataStore());

  const getValuesFromMeta = (value: string) => allMetas.value.has(value)
    ? allMetas.value.get(value)
    : value;

  return useBaseApi(`${showcaseURL}${endpoint}`, {
    transform: (source: Showcase): Showcase => deepChangeValues(source, getValuesFromMeta),
  });
}