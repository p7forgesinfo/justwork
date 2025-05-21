const showcaseURL = import.meta.env.VITE_API_SHOWCASE_URL;

export const useShowcaseApi = (endpoint: string, meta: Map<string, MetaItem>) => {
<<<<<<< HEAD
  console.log('META', meta)
=======

>>>>>>> master
  const getValuesFromMeta = (value: string) => meta.has(value)
    ? meta.get(value)
    : value;

  return useBaseApi(`${showcaseURL}${endpoint}`, {
    transform: (source: Showcase): Showcase => deepChangeValues(source, getValuesFromMeta),
  })
}
