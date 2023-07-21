import dayjs from 'dayjs'

export const DATE_FORMAT = 'DD/MM/YYYY'
export const DURATION_FORMAT = 'mm:ss'

export const Item = {
  fromEpisode: (value) => ({
    date: dayjs(value.date).format(DATE_FORMAT),
    description: value.description,
    duration: dayjs(value.duration).format(DURATION_FORMAT),
    id: value.id,
    title: value.title,
    url: value.url,
  }),
}
