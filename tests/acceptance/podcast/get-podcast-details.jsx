import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { PODCASTS_QUERY } from '~/models/podcasts'
import episodes from '~/tests/mocks/episodes'
import podcasts from '~/tests/mocks/podcasts'

import { render, screen, within } from '../utils'

export const givenTheUserIsOnTheHomePage = (given) => {
  given('the user is on the Home page', () => {
    render(
      <SWRConfig
        value={{
          fallback: { [EPISODES_QUERY]: episodes, [PODCASTS_QUERY]: podcasts },
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
    const podcast = screen.getByRole('region', {
      name: 'podcast',
    })

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
    const link = items[0].getByRole('link')

    await act(async () => {
      fireEvent.click(link)
    })
  })
}
