/* eslint-disable jsx-a11y/media-has-caption */
import { H4 } from '~/components/Text'

import useEpisode from './hooks'
import { Container, Description, Player, Separator } from './styles'

const Episode = () => {
  const { episode, isNotFound } = useEpisode()

  if (isNotFound) return null

  return (
    <Container aria-label="episode">
      <H4>{episode.title}</H4>
      <Description dangerouslySetInnerHTML={{ __html: episode.description }} />
      <Separator />
      <Player aria-label="player" controls src={episode.url} />
    </Container>
  )
}

export default Episode
