import usePodcasts from '~/hooks/usePodcasts'

export const useHome = () => {
  const { isLoading, podcasts } = usePodcasts()

  return { isLoading, podcasts }
}
