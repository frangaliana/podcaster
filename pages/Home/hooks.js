import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import usePodcasts from '~/hooks/usePodcasts'
import { normalizeString } from '~/lib/normalize-string'

export const useHome = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? undefined
  const { isLoading, podcasts } = usePodcasts()

  const handleChangeSearch = useCallback(
    ({ target }) => {
      if (target.value) searchParams.set('search', target.value)
      else searchParams.delete('search')

      setSearchParams(searchParams, { replace: true })
    },
    [searchParams, setSearchParams],
  )

  const items = useMemo(() => {
    if (!search) return podcasts

    return podcasts.filter((value) => {
      const title = normalizeString(value.title)
      const author = normalizeString(value.author)
      const formattedSearch = normalizeString(search)

      return title.includes(formattedSearch) || author.includes(formattedSearch)
    })
  }, [podcasts, search])

  return { handleChangeSearch, isLoading, items, search }
}
