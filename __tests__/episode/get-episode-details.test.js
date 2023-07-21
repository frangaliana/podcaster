import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  givenTheUserIsOnThePodcastPage,
  thenTheUsercanPlayTheEpisode,
  thenTheUserCanViewTheInformationAboutThisEpisode,
  thenTheUserCanViewTheInformationAboutThisPodcast,
  whenTheUserClicksOnOneEpisode,
} from '~/tests/acceptance/episode/get-episode-details'

const feature = loadFeature('features/episode/get-episode-details.feature', {
  tagFilter: '@ui',
})

defineFeature(feature, (test) => {
  test('Get the episode details', ({ given, then, when }) => {
    givenTheUserIsOnThePodcastPage(given)
    whenTheUserClicksOnOneEpisode(when)
    thenTheUserCanViewTheInformationAboutThisPodcast(then)
    thenTheUserCanViewTheInformationAboutThisEpisode(then)
    thenTheUsercanPlayTheEpisode(then)
  })
})
