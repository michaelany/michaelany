import {useMemo} from 'react'
import {Link} from 'react-router-dom'
import {Grid, ButtonBase} from '@mui/material'
import type {TFunction} from 'i18next'

import './VideoLink.scss'
import {Animate, Tilt, Panel} from '#components/common'
import {getGridAnimationDelay} from '#utils/helpers'
import {DETECT, RANDOM_EFFECTS, ROUTE} from '#utils/constants'
import VideoDate from './VideoDate'
import type {IWidth, TLng, IVideo} from '#utils/types'

interface IVideoLinkProps {
  t: TFunction
  lng: TLng
  index: number
  width: IWidth
  video: IVideo
}

export default function VideoLink({
  t,
  lng,
  index,
  width,
  video,
}: IVideoLinkProps) {
  const effect = useMemo(
    () =>
      width.sm ? undefined : RANDOM_EFFECTS[Math.floor(Math.random() * 4)],
    [width.sm]
  )

  return (
    <Grid item component="li" xs={12} md={6} lg={4} xl={3}>
      <Animate
        className={DETECT.mobile ? 'VideoLink-Tilt' : undefined}
        effect={effect}
        delay={getGridAnimationDelay(index, width)}
      >
        <Tilt className="VideoLink-Tilt">
          <ButtonBase
            focusRipple
            component={Link}
            className={`VideoLink-Item ColorInteract ColorInteract_color_${video.color}`}
            to={`${ROUTE.vlog}/${video.name}`}
          >
            <Panel
              className={`VideoLink-View VideoLink-View_name_${video.name}`}
            />
            <div className="VideoLink-Content">
              <h3 className="VideoLink-Title">
                {t(`vlog.video.${video.name}.title`, {replace: ['|']})}
              </h3>
              <VideoDate
                className="VideoLink-Date"
                date={video.date}
                lng={lng}
              />
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}
