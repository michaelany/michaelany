import {useState, type ChangeEvent} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid, Tabs, Tab} from '@mui/material'

import VIDEOS from '#data/videos'
import {QUERY_BREAKPOINT} from '#utils/constants'
import VideoLink from './VideoLink'
import type {IWidth, TLng, IVideo} from '#utils/types'

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
        {getSortedVideos(VIDEOS, sort).map((video, index) => (
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

const storageProp = 'sort'

const sorts: TSort[] = ['new', 'old']
