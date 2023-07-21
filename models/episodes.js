export const Episode = {
  fromDto: (dto) => ({
    date: dto.releaseDate,
    description: dto.description,
    duration: dto.trackTimeMillis,
    id: dto.trackId.toString(),
    title: dto.trackName,
    url: dto.episodeUrl,
  }),
}

export const EPISODES_QUERY = `${import.meta.env.VITE_API_URL}/lookup`
