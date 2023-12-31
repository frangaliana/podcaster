import { useMemo } from 'react'
import useSWR from 'swr'

import { generatePathWithSearchParams } from '~/lib/generate-path-with-search-params'
import { Episode, EPISODES_QUERY } from '~/models/episodes'

const useEpisodes = ({ podcastId }) => {
  const { data, isLoading } = useSWR(
    podcastId
      ? generatePathWithSearchParams(EPISODES_QUERY, {
          entity: 'podcastEpisode',
          id: podcastId,
          limit: 20,
          media: 'podcast',
        })
      : null,
  )

  const episodes = useMemo(
    () =>
      data
        ? data?.results
            ?.filter((value) => value.kind === 'podcast-episode')
            .map(Episode.fromDto)
        : [],
    [data],
  )

  return { episodes, isLoading }
}

export default useEpisodes
