import {useMemo} from 'react'
import {TFunction} from 'i18next'
import {format} from 'date-fns'
import {Grid, ButtonBase} from '@mui/material'

import './VideoLink.scss'
import {Animate, Tilt, Panel} from '@components/common'
import {getGridAnimationDelay, getTimeSince} from '@utils/helpers'
import {DETECT, RANDOM_EFFECTS, BLANK_LINK_PROPS} from '@utils/constants'
import {IWidth, TLng, IVideo} from '@utils/types'

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
            {...BLANK_LINK_PROPS}
            focusRipple
            component="a"
            className={`VideoLink-Item ColorInteract ColorInteract_color_${video.color}`}
            href={video.href}
          >
            <Panel
              className={`VideoLink-View VideoLink-View_name_${video.name}`}
            />
            <div className="VideoLink-Content">
              <h3 className="VideoLink-Title">
                {t(`vlog.video.${video.name}`, {replace: ['|']})}
              </h3>
              <p className="VideoLink-Label">
                <span>{format(video.date, 'dd.MM.yyyy')} • </span>
                <span>{getTimeSince(video.date, lng)}</span>
              </p>
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}
