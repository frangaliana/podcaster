import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Body1, Body1Highlighted } from '~/components/Text'
import useEpisodes from '~/hooks/useEpisodes'

import { Item } from './models/item'

export const usePodcast = () => {
  const { podcastId } = useParams()
  const { episodes, isLoading } = useEpisodes({ id: podcastId })

  const items = useMemo(
    () => (episodes ? episodes.map(Item.fromEpisode) : []),
    [episodes],
  )

  const headerCells = useMemo(
    () => [
      {
        children: <Body1Highlighted>Title</Body1Highlighted>,
      },
      {
        children: <Body1Highlighted>Date</Body1Highlighted>,
      },
      {
        children: <Body1Highlighted>Duration</Body1Highlighted>,
      },
    ],
    [],
  )

  const itemRows = useMemo(
    () =>
      items
        ? items.map((value, index) => ({
            cells: [
              {
                children: <Body1>{value.title}</Body1>,
              },
              {
                children: <Body1>{value.date}</Body1>,
              },
              {
                children: <Body1>{value.duration}</Body1>,
              },
            ],
            value: index.toString(),
          }))
        : [],
    [items],
  )

  return { headerCells, isLoading, itemRows }
}
