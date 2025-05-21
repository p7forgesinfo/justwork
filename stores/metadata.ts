import { defineStore } from "pinia";

export const useMetadataStore = defineStore("metadata", () => {
  const { data: countries, status: countriesStatus } = useBaseApi<MetaItem[]>('/v1/metadata/countries/');
  const { data: genres, status: genresStatus } = useBaseApi<MetaItem[]>('/v1/metadata/genres/');
  const { data: jobs, status: jobsStatus } = useBaseApi<MetaItem[]>('/v1/metadata/jobs/');
  const { data: kind, status: kindStatus } = useBaseApi<MetaItem[]>('/v1/metadata/kind/');
  const { data: labels, status: labelsStatus } = useBaseApi<MetaItem[]>('/v1/metadata/labels/');
  const { data: rewards, status: rewardsStatus } = useBaseApi<MetaItem[]>('/v1/metadata/rewards/');
  const { data: studios, status: studiosStatus } = useBaseApi<MetaItem[]>('/v1/metadata/rewards/');

  const status = computed(() => {
    const statuses: string[] = [
      countriesStatus.value,
      genresStatus.value,
      jobsStatus.value,
      kindStatus.value,
      labelsStatus.value,
      rewardsStatus.value,
      studiosStatus.value,
    ];

    return statuses.includes('pending')
      ? 'pending'
      : 'success';
  });

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
    status,
  };
});