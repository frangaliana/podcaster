import { useHome } from './hooks'
import Podcast from './Podcast'
import { Container, Podcasts } from './styles'

const Home = () => {
  const { isLoading, podcasts } = useHome()

  return (
    <Container aria-label="home">
      {isLoading ? (
        <span aria-busy role="alert">
          Loading...
        </span>
      ) : (
        <>
          {podcasts.length ? (
            <Podcasts aria-label="podcasts">
              {podcasts.map(({ author, id, imageUrl, title }) => (
                <li key={id}>
                  <Podcast
                    author={author}
                    id={id}
                    imageUrl={imageUrl}
                    title={title}
                  />
                </li>
              ))}
            </Podcasts>
          ) : (
            <span>No results</span>
          )}
        </>
      )}
    </Container>
  )
}

export default Home
