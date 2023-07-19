import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from '~/services/routing/constants'

import { render, screen, waitForElementToBeRemoved, within } from '../utils'

export const givenTheUserNavigatesToTheHomePage = (given) =>
  given('the user navigates to the Home page', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.HOME]}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </MemoryRouter>,
    )
  })

export const thenTheUserCanViewTheListOfApplePodcastsSortedByPopularity = (
  then,
) =>
  then(
    'the user can view the list of Apple podcasts sorted by popularity',
    () => {
      const list = podcastList.getByRole('list', {
        name: 'podcasts',
      })
      const { getAllByRole } = within(list)
      const items = getAllByRole('listitem')

      expect(items.length).toBe(100)
    },
  )

export const whenTheDataHasStoppedLoading = (when) =>
  when('the data has stopped loading', async () => {
    const loading = screen.getByRole('alert', { busy: true })

    await waitForElementToBeRemoved(loading)

    expect(loading).not.toBeInTheDocument()
  })

export const whenTheUserIsInTheHomePage = (when) =>
  when('the user is in the Home page', () => {
    const home = screen.getByRole('region', {
      name: 'home',
    })

    expect(home).toBeInTheDocument()
  })
