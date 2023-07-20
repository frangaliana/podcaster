import client from './client'

const fetcher = async (url) => {
  const response = await client.get(
    `${import.meta.env.VITE_ALLOW_ORIGINS_URL}${encodeURIComponent(url)}`,
  )

  if (!response.ok) {
    let error

    try {
      error = await response.json()
    } catch {}

    throw {
      ...error,
      status: response.status,
    }
  }

  const result = await response.json()

  return JSON.parse(result.contents)
}

export default fetcher
