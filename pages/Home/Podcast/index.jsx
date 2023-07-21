import { generatePath } from 'react-router-dom'

import { ROUTES } from '~/services/routing/constants'

import { Author, Container, Image, Title } from './styles'

const Podcast = ({ author, id, imageUrl, title, ...props }) => (
  <Container to={generatePath(ROUTES.PODCAST, { podcastId: id })} {...props}>
    <Image alt="" src={imageUrl} />
    <Title>{title}</Title>
    <Author>Author: {author}</Author>
  </Container>
)

export default Podcast
