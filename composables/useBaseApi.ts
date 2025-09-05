import type { UseFetchOptions } from 'nuxt/app'

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useBaseApi = <T>(endpoint: string, options?: UseFetchOptions<T>) => useFetch<T>(endpoint, {
  baseURL,
  ...(options as object || {}),
});
