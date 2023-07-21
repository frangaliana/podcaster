export const Podcast = {
  fromDto: (dto) => ({
    author: dto['im:artist'].label,
    description: dto.summary.label,
    id: dto.id.attributes['im:id'].toString(),
    imageUrl: dto['im:image'][2].label,
    title: dto['im:name'].label,
  }),
}

export const PODCASTS_QUERY = `${
  import.meta.env.VITE_API_URL
}/us/rss/toppodcasts/limit=100/genre=1310/json`
