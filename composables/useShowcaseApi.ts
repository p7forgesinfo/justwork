const showcaseURL = import.meta.env.VITE_API_SHOWCASE_URL;

export const useShowcaseApi = <T>(endpoint: string) => {
  const { allMetas } = storeToRefs(useMetadataStore());

  const getValuesFromMeta = <U>(value: U): U =>
    (typeof value === 'string' && allMetas.value.has(value))
      ? allMetas.value.get(value) as U
      : value;

  return useBaseApi<T>(`${showcaseURL}${endpoint}`, {
    transform: (source: T): T => deepChangeValues(source, getValuesFromMeta),
  });
}