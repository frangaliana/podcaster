import { useHome } from './hooks'
import Podcast from './Podcast'
import { Badge, Container, Input, Podcasts, SearchBar } from './styles'

const Home = () => {
  const { handleChangeSearch, isLoading, items, search } = useHome()

  return (
    <Container aria-label="home">
      {isLoading ? (
        <span aria-busy role="alert">
          Loading...
        </span>
      ) : (
        <>
          <SearchBar>
            <Badge>{items.length}</Badge>
            <Input
              onChange={handleChangeSearch}
              placeholder="Filter podcasts..."
              role="searchbox"
              type="text"
              value={search ?? ''}
            />
          </SearchBar>
          {items.length ? (
            <Podcasts aria-label="podcasts">
              {items.map(({ author, id, imageUrl, title }) => (
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
            <span aria-busy role="alert">
              No results found
            </span>
          )}
        </>
      )}
    </Container>
  )
}

export default Home
