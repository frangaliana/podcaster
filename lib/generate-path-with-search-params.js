import { createSearchParams } from 'react-router-dom'

export const generatePathWithSearchParams = (value, searchParams) => {
  const url = new URL(value)
  url.search = createSearchParams(Object.entries(searchParams)).toString()

  return url.href
}
