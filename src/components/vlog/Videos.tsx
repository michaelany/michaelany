import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid} from '@mui/material'

import {QUERY_BREAKPOINT} from '@utils/constants'
import {IWidth} from '@utils/types'
import VideoLink from './VideoLink'

export default function Videos() {
  const {t} = useTranslation()
  const width: IWidth = {
    lg: useMediaQuery(QUERY_BREAKPOINT.lg),
    md: useMediaQuery(QUERY_BREAKPOINT.md),
    sm: useMediaQuery(QUERY_BREAKPOINT.sm),
  }

  return (
    <Grid container component="ul" spacing={2}>
      {vlogs.map((vlog: any, index: number) => (
        <VideoLink key={vlog} t={t} width={width} index={index} vlog={vlog} />
      ))}
    </Grid>
  )
}

const vlogs = [1, 2, 3, 4]
