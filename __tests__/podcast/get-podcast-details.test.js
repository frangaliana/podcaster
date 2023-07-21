import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  givenTheUserIsOnTheHomePage,
  thenTheUserCanSeeTheListOfEpisodesWithTheirInformation,
  thenTheUserCanSeTheNumberOfEpisodesOfThisPodcast,
  thenTheUserCanViewTheInformationAboutThisPodcast,
  whenTheUserClicksOnOnePodcast,
} from '~/tests/acceptance/podcast/get-podcast-details'

const feature = loadFeature('features/podcast/get-podcast-details.feature', {
  tagFilter: '@ui',
})

defineFeature(feature, (test) => {
  test('Get the podcast details', ({ given, then, when }) => {
    givenTheUserIsOnTheHomePage(given)
    whenTheUserClicksOnOnePodcast(when)
    thenTheUserCanViewTheInformationAboutThisPodcast(then)
    thenTheUserCanSeTheNumberOfEpisodesOfThisPodcast(then)
    thenTheUserCanSeeTheListOfEpisodesWithTheirInformation(then)
  })
})
