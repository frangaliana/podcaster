import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  givenTheUserNavigatesToTheHomePage,
  thenTheUserCanViewTheListOfApplePodcastsSortedByPopularity,
  whenTheDataHasStoppedLoading,
  whenTheUserIsInTheHomePage,
} from '~/tests/acceptance/home/get-podcasts-list'

const feature = loadFeature('features/home/get-podcasts-list.feature', {
  tagFilter: '@ui',
})

defineFeature(feature, (test) => {
  test('Get the Apple podcasts list', ({ given, then, when }) => {
    givenTheUserNavigatesToTheHomePage(given)
    whenTheUserIsInTheHomePage(when)
    whenTheDataHasStoppedLoading(when)
    thenTheUserCanViewTheListOfApplePodcastsSortedByPopularity(then)
  })
})
