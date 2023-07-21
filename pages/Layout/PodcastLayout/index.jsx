import { Outlet } from 'react-router-dom'

import { usePodcastLayout } from './hooks'
import Podcast from './Podcast'
import { Container } from './styles'

const PodcastLayout = () => {
  const { isNotFound, podcast } = usePodcastLayout()

  if (isNotFound) return null

  return (
    <Container>
      <Podcast
        author={podcast.author}
        description={podcast.description}
        id={podcast.id}
        imageUrl={podcast.imageUrl}
        title={podcast.title}
      />
      <Outlet />
    </Container>
  )
}

export default PodcastLayout
