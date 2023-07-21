import { screen } from '../utils'

export const thenTheUserCanViewTheListOfApplePodcastsFilteredByTheSearchTerm = (
  then,
  value,
) => {
  then(
    'the user can view the list of Apple podcasts filtered by the search term',
    () => {
      const list = screen.getByRole('list', {
        name: 'podcasts',
      })
      const { getAllByRole } = within(list)
      const items = getAllByRole('listitem')
      const { getByText } = within(items[0])

      expect(getByText(value)).toBeInTheDocument()
    },
  )
}

export const whenTheUserSpecifiesTheSearchTermAsInTheSearchInput = (
  when,
  value,
) => {
  when(
    /^the user specifies the search term as "(.*)" in the search input$/,
    async () => {
      const search = screen.getByRole('textbox', { name: 'search' })

      await act(async () => {
        fireEvent.change(search, { target: { value: value } })
      })
    },
  )
}
