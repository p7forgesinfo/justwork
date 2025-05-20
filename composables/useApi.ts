import type { UseFetchOptions } from 'nuxt/app'


const apiBaseUrl = 'https://cms.test.ksfr.tech/api'

export const useApi = <T>(endpoint: string, options?: UseFetchOptions<T>,) => {

  return useFetch(`${apiBaseUrl}${endpoint}`, {
    ...options
  });
}