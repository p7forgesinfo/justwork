const showcaseURL = import.meta.env.VITE_API_SHOWCASE_URL;

export const useShowcaseApi = (endpoint: string, meta: Map<string, MetaItem>) => {
  console.log('META', meta)
  const getValuesFromMeta = (value: string) => meta.has(value)
    ? meta.get(value)
    : value;

  return useBaseApi(`${showcaseURL}${endpoint}`, {
    transform: (source: Showcase): Showcase => deepChangeValues(source, getValuesFromMeta),
  })
}
