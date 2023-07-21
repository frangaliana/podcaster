import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import useEpisodes from './useEpisodes'

const useEpisode = ({ id }) => {
  const { podcastId } = useParams()
  const { episodes } = useEpisodes({ podcastId })

  const episode = useMemo(
    () =>
      id && episodes ? episodes.find((value) => value.id === id) : undefined,
    [id, episodes],
  )

  return { episode }
}

export default useEpisode
