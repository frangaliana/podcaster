import { useMemo } from 'react'
import useSWR from 'swr'

import { Podcast, PODCASTS_QUERY } from '~/models/podcasts'

const usePodcasts = () => {
  const { data, isLoading } = useSWR(PODCASTS_QUERY)

  const podcasts = useMemo(
    () => (data ? data.feed?.entry?.map(Podcast.fromDto) : []),
    [data],
  )

  return { isLoading, podcasts }
}

export default usePodcasts
