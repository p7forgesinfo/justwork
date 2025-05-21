import { defineStore } from "pinia";

export const useMetadataStore = defineStore("metadata", () => {
  const { data: countries } = useApi<MetaItem[]>('/v1/metadata/countries/');
  const { data: genres } = useApi<MetaItem[]>('/v1/metadata/genres/');
  const { data: jobs } = useApi<MetaItem[]>('/v1/metadata/jobs/');
  const { data: kind } = useApi<MetaItem[]>('/v1/metadata/kind/');
  const { data: labels } = useApi<MetaItem[]>('/v1/metadata/labels/');
  const { data: rewards } = useApi<MetaItem[]>('/v1/metadata/rewards/');
  const { data: studios } = useApi<MetaItem[]>('/v1/metadata/rewards/');

  const allMetas = computed(() => {
    const all = [
      countries.value,
      genres.value,
      jobs.value,
      kind.value,
      labels.value,
      rewards.value,
      studios.value,
    ];

    const metasMap = new Map<string, MetaItem>();

    all.flat().forEach((item) => {
      if (item) {
        metasMap.set(item.oid, item)
      }
    });

    return metasMap;
  });

  return {
    countries,
    genres,
    jobs,
    kind,
    labels,
    rewards,
    studios,
    allMetas,
  };
});