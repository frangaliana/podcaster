import { generatePath } from 'react-router-dom'

import { Body2Highlighted } from '~/components/Text'
import { ROUTES } from '~/services/routing/constants'

import {
  Author,
  Container,
  Content,
  Description,
  Header,
  Image,
  Link,
  Separator,
  Title,
} from './styles'

const Podcast = ({ author, description, id, imageUrl, title }) => {
  return (
    <Container aria-label="podcast">
      <Link to={generatePath(ROUTES.PODCAST, { podcastId: id })}>
        <Image alt="" src={imageUrl} />
      </Link>
      <Separator role="separator" />
      <Header>
        <Title to={generatePath(ROUTES.PODCAST, { podcastId: id })}>
          {title}
        </Title>
        <Author to={generatePath(ROUTES.PODCAST, { podcastId: id })}>
          by {author}
        </Author>
      </Header>
      <Separator role="separator" />
      <Content>
        <Body2Highlighted>Description:</Body2Highlighted>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Content>
    </Container>
  )
}

export default Podcast
