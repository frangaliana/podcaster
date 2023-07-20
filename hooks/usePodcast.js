import { useMemo } from 'react'

import usePodcasts from './usePodcasts'

const usePodcast = ({ id }) => {
  const { podcasts } = usePodcasts()

  const podcast = useMemo(
    () =>
      id && podcasts ? podcasts.find((value) => value.id === id) : undefined,
    [id, podcasts],
  )

  return { podcast }
}

export default usePodcast
