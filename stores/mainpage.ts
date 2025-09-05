import { defineStore } from "pinia";

export const useMainPageStore = defineStore("mainpage", () => {
  const { data, status } = useShowcaseApi<Showcase>('/mainpage');
  const slides = computed<Slide[]>(() => data.value?.slides || []);

  const selectedTags = ref(new Set<string>());

  const toggleTag = (tagName: string) => {
    const next = new Set(selectedTags.value);
    if (next.has(tagName)) {
      next.delete(tagName);
    } else {
      next.add(tagName);
    }
    selectedTags.value = next;
  };

  const filteredSlides = computed<Slide[]>(() => {
    if (selectedTags.value.size === 0) {
      return slides.value;
    }
    return slides.value.filter((slide: Slide) => {
      const genreNames: string[] = (slide.title.genres || [])
        .map((g) => g.name)
        .filter((name): name is string => Boolean(name));
      const labelNames: string[] = (slide.title.labels || [])
        .map((l) => l.name)
        .filter((name): name is string => Boolean(name));
      const names = new Set<string>([...genreNames, ...labelNames]);

      for (const tag of selectedTags.value) {
        if (!names.has(tag)) return false;
      }
      return true;
    });
  });

  const selectedTagList = computed<string[]>(() => Array.from(selectedTags.value));

  return { slides, status, selectedTags, filteredSlides, toggleTag, selectedTagList }
});