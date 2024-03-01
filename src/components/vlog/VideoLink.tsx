import {TFunction} from 'i18next'
import {Grid, ButtonBase} from '@mui/material'

import '../portfolio/ProjectLink.scss'
import {Animate, Tilt, Panel} from '@components/common'
import {getGridAnimationDelay} from '@utils/helpers'
import {DETECT, RANDOM_EFFECTS} from '@utils/constants'
import {IWidth} from '@utils/types'

interface IVideoLinkProps {
  t: TFunction
  index: number
  width: IWidth
  vlog: any
}

export default function VideoLink({t, index, width, vlog}: IVideoLinkProps) {
  return (
    <Grid
      item
      component="li"
      className="ProjectLink"
      xs={12}
      md={6}
      lg={4}
      xl={3}
    >
      <Animate
        className={DETECT.mobile ? 'ProjectLink-Tilt' : undefined}
        effect={
          width.sm ? undefined : RANDOM_EFFECTS[Math.floor(Math.random() * 4)]
        }
        delay={getGridAnimationDelay(index, width)}
      >
        <Tilt className="ProjectLink-Tilt">
          <ButtonBase
            focusRipple
            component="a"
            className={`ProjectLink-Item ColorInteract ColorInteract_color_${'yellow'}`}
          >
            <Panel
              className={`ProjectLink-View ProjectLink-View_name_${vlog}`}
            />
            <div className="ProjectLink-Content">...</div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}
