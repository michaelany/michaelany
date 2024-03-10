import {useState, ChangeEvent} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid, Tabs, Tab} from '@mui/material'

import {QUERY_BREAKPOINT} from '@utils/constants'
import {IWidth, TLng, IVideo} from '@utils/types'
import VideoLink from './VideoLink'

type TSort = 'new' | 'old'

export default function Videos() {
  const {t, i18n} = useTranslation()
  const [sort, setSort] = useState<TSort>(
    (localStorage.getItem(storageProp) as TSort) ?? 'new'
  )
  const width: IWidth = {
    lg: useMediaQuery(QUERY_BREAKPOINT.lg),
    md: useMediaQuery(QUERY_BREAKPOINT.md),
    sm: useMediaQuery(QUERY_BREAKPOINT.sm),
  }

  const handleChange = (_: ChangeEvent<object>, value: TSort) => {
    localStorage.setItem(storageProp, value)
    setSort(value)
  }

  return (
    <>
      <Tabs className="Tabs" value={sort} onChange={handleChange}>
        {sorts.map((type) => (
          <Tab key={type} value={type} label={t(`vlog.sort.${type}`)} />
        ))}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getSortedVideos(videos, sort).map((video, index) => (
          <VideoLink
            key={`${video.name}-${sort}`}
            t={t}
            lng={i18n.language as TLng}
            width={width}
            index={index}
            video={video}
          />
        ))}
      </Grid>
    </>
  )
}

const getSortedVideos = (videos: IVideo[], sort: TSort): IVideo[] => {
  if (sort === 'old') return videos
  const sortedVideos = videos.slice()
  sortedVideos.sort((a, b) => {
    return a.date > b.date ? -1 : b.date > a.date ? 1 : 0
  })
  return sortedVideos
}

const videos: IVideo[] = [
  {
    name: 'day-in-a-life-montenegro',
    color: 'yellow',
    date: new Date(2023, 1, 27),
    href: 'https://youtu.be/b0bxdqMqGKo?si=Ut1Wc5VgkXeSUOXO',
  },
  {
    name: 'my-dreamdesk',
    color: 'default',
    date: new Date(2023, 6, 4),
    href: 'https://youtu.be/pQzEh3D6lHg?si=A4M_lJnl0Iq9QU1A',
  },
  {
    name: 'day-in-a-life-new-zealand',
    color: 'blue',
    date: new Date(2023, 7, 3),
    href: 'https://youtu.be/x5ZtJo-eLA8?si=cggbxCK6WBrd1bju',
  },
  {
    name: 'how-i-became-software-engineer',
    color: 'red',
    date: new Date(2024, 1, 21),
    href: 'https://youtu.be/TXKpsdQBBEA?si=ybwrVtV3_0KmNaPB',
  },
]

const storageProp = 'sort'

const sorts: TSort[] = ['new', 'old']
