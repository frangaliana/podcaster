import fetcher from '~/services/http/fetcher'

const swrConfig = {
  errorRetryCount: 3,
  errorRetryInterval: 0,
  fetcher,
  onErrorRetry: (error, _, config, revalidate, { retryCount }) => {
    if (error.status < 500) return
    if (config.errorRetryCount && config.errorRetryCount <= retryCount) return

    setTimeout(() => revalidate({ retryCount }), config.errorRetryInterval)
  },
  refreshInterval: 24 * 60 * 60 * 1000,
  revalidateIfStale: false,
  revalidateOnFocus: false,
}

export default swrConfig
