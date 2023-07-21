import Table from '~/components/Table'
import { H4 } from '~/components/Text'

import { usePodcast } from './hooks'
import { Container, Count, Episodes } from './styles'

const Podcast = () => {
  const { headerCells, isLoading, itemRows } = usePodcast()

  if (isLoading)
    return (
      <span aria-busy role="alert">
        Loading...
      </span>
    )

  return (
    <Container>
      <Count>
        <H4>Episodes: {itemRows.length}</H4>
      </Count>
      <Episodes>
        <Table
          aria-label="episodes"
          headerCells={headerCells}
          itemRows={itemRows}
          striped
        />
      </Episodes>
    </Container>
  )
}

export default Podcast
