import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { PODCASTS_QUERY } from '~/models/podcasts'
import Home from '~/pages/Home'
import Layout from '~/pages/layout'
import PodcastLayout from '~/pages/layout/PodcastLayout'
import Podcast from '~/pages/Podcast'
import { ROUTES } from '~/services/routing/constants'
import podcasts from '~/tests/mocks/podcasts'

import { act, fireEvent, render, screen, within } from '../utils'

export const givenTheUserIsOnTheHomePage = (given) => {
  given('the user is on the Home page', () => {
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
              <Route element={<PodcastLayout />}>
                <Route path={ROUTES.PODCAST} element={<Podcast />} />
              </Route>
            </Route>
          </Routes>
        </MemoryRouter>
      </SWRConfig>,
    )
  })
}

export const thenTheUserCanSeTheNumberOfEpisodesOfThisPodcast = (then) => {
  then('the user can see the number of episodes of this podcast', () => {
    const list = screen.getByRole('list', {
      name: 'episodes',
    })

    expect(list).toBeInTheDocument()
  })
}

export const thenTheUserCanSeeTheListOfEpisodesWithTheirInformation = (
  then,
) => {
  then('the user can see the list of episodes with their information', () => {
    const episodesCount = screen.getByText(/episodes/i)

    expect(episodesCount).toBeInTheDocument()
  })
}

export const thenTheUserCanViewTheInformationAboutThisPodcast = (then) => {
  then('the user can view the information about this podcast', () => {
    const podcast = screen.getByLabelText('podcast')

    expect(podcast).toBeInTheDocument()
  })
}

export const whenTheUserClicksOnOnePodcast = (when) => {
  when('the user clicks on one podcast', async () => {
    const list = screen.getByRole('list', {
      name: 'podcasts',
    })
    const { getAllByRole } = within(list)
    const items = getAllByRole('listitem')
    const { getByRole } = within(items[0])
    const link = getByRole('link')

    await act(async () => {
      fireEvent.click(link)
    })
  })
}
