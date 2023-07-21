import { generatePath, MemoryRouter, Route, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { generatePathWithSearchParams } from '~/lib/generate-path-with-search-params'
import { EPISODES_QUERY } from '~/models/episodes'
import { PODCASTS_QUERY } from '~/models/podcasts'
import Episode from '~/pages/Episode'
import Layout from '~/pages/layout'
import PodcastLayout from '~/pages/layout/PodcastLayout'
import Podcast from '~/pages/Podcast'
import { ROUTES } from '~/services/routing/constants'
import episodes from '~/tests/mocks/episodes'
import podcasts from '~/tests/mocks/podcasts'

import { act, fireEvent, render, screen, within } from '../utils'

export const givenTheUserIsOnThePodcastPage = (given) => {
  given('the user is on the Podcast page', () => {
    render(
      <SWRConfig
        value={{
          fallback: {
            [generatePathWithSearchParams(EPISODES_QUERY, {
              entity: 'podcastEpisode',
              id: 1535809341,
              limit: 20,
              media: 'podcast',
            })]: episodes,
            [PODCASTS_QUERY]: podcasts,
          },
        }}
      >
        <MemoryRouter
          initialEntries={[
            generatePath(ROUTES.PODCAST, { podcastId: 1535809341 }),
          ]}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route element={<PodcastLayout />}>
                <Route path={ROUTES.PODCAST} element={<Podcast />} />
                <Route path={ROUTES.EPISODE} element={<Episode />} />
              </Route>
            </Route>
          </Routes>
        </MemoryRouter>
      </SWRConfig>,
    )
  })
}

export const thenTheUsercanPlayTheEpisode = (then) => {
  then('the user can play the episode', () => {
    const player = screen.getByLabelText(/player/i)

    expect(player).toBeInTheDocument()
  })
}

export const thenTheUserCanViewTheInformationAboutThisEpisode = (then) => {
  then('the user can view the information about this episode', () => {
    const episode = screen.getByLabelText('episode')

    expect(episode).toBeInTheDocument()
  })
}

export const thenTheUserCanViewTheInformationAboutThisPodcast = (then) => {
  then('the user can view the information about this podcast', () => {
    const podcast = screen.getByLabelText('podcast')

    expect(podcast).toBeInTheDocument()
  })
}

export const whenTheUserClicksOnOneEpisode = (when) => {
  when('the user clicks on one episode', async () => {
    const table = screen.getByRole('table', {
      name: 'episodes',
    })
    const { getAllByRole } = within(table)
    const items = getAllByRole('cell')
    const { getByRole } = within(items[0])
    const link = getByRole('link')

    await act(async () => {
      fireEvent.click(link)
    })
  })
}
