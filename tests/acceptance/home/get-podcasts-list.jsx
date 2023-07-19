import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { PODCASTS_QUERY } from '~/models/podcasts'
import Home from '~/pages/Home'
import Layout from '~/pages/Layout'
import { ROUTES } from '~/services/routing/constants'
import podcasts from '~/tests/mocks/podcasts'

import { render, screen, within } from '../utils'

export const givenTheUserNavigatesToTheHomePage = (given) =>
  given('the user navigates to the Home page', () => {
    render(
      <SWRConfig
        value={{
          fallback: { [PODCASTS_QUERY]: podcasts },
        }}
      >
        <MemoryRouter initialEntries={[ROUTES.HOME]}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.HOME} element={<Home />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </SWRConfig>,
    )
  })

export const thenTheUserCanViewTheListOfApplePodcastsSortedByPopularity = (
  then,
) =>
  then(
    'the user can view the list of Apple podcasts sorted by popularity',
    () => {
      const list = screen.getByRole('list', {
        name: 'podcasts',
      })
      const { getAllByRole } = within(list)
      const items = getAllByRole('listitem')

      expect(items.length).toBe(100)
    },
  )

export const whenTheUserIsInTheHomePage = (when) =>
  when('the user is in the Home page', () => {
    const home = screen.getByRole('region', {
      name: 'home',
    })

    expect(home).toBeInTheDocument()
  })
