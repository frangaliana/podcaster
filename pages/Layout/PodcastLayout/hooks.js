import { useParams } from 'react-router-dom'

import usePodcast from '../../../hooks/usePodcast'

export const usePodcastLayout = () => {
  const { podcastId } = useParams()
  const { podcast } = usePodcast({ id: podcastId })
  const isNotFound = !podcast

  return { isNotFound, podcast }
}
