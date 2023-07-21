import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  thenTheUserCanViewTheListOfApplePodcastsFilteredByTheSearchTerm,
  whenTheUserSpecifiesTheSearchTermAsInTheSearchInput,
} from '~/tests/acceptance/home/filter-podcasts'
import {
  givenTheUserNavigatesToTheHomePage,
  whenTheUserIsInTheHomePage,
} from '~/tests/acceptance/home/get-podcasts-list'

const feature = loadFeature('features/home/filter-podcasts.feature', {
  tagFilter: '@ui',
})

defineFeature(feature, (test) => {
  test('Filter podcasts by text', ({ given, then, when }) => {
    const searchTerm = 'drink'

    givenTheUserNavigatesToTheHomePage(given)
    whenTheUserIsInTheHomePage(when)
    whenTheUserSpecifiesTheSearchTermAsInTheSearchInput(when, searchTerm)
    thenTheUserCanViewTheListOfApplePodcastsFilteredByTheSearchTerm(
      then,
      searchTerm,
    )
  })
})
