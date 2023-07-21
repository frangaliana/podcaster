import { useParams } from 'react-router-dom'

import useEpisode from '~/hooks/useEpisode'

const useEpisodeDetails = () => {
  const { episodeId } = useParams()
  const { episode } = useEpisode({ id: episodeId })

  const isNotFound = !episode

  return { episode, isNotFound }
}

export default useEpisodeDetails
