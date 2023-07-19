import { Author, Container, Image, Title } from './styles'

const Podcast = ({ author, id, imageUrl, title, ...props }) => (
  <Container {...props}>
    <Image alt="" src={imageUrl} />
    <Title>{title}</Title>
    <Author>Author: {author}</Author>
  </Container>
)

export default Podcast
