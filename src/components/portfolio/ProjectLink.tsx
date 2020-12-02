import React from 'react'
import cn from 'clsx'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

import './ProjectLink.scss'
import Animate, {EFFECTS} from '../common/Animate'
import Tilt from '../common/Tilt'
import Panel from '../common/Panel'
import {getListDelay} from '../../utils/helpers'
import {DETECT, ROUTE, PROJECT_TYPE, TILT_SCALE} from '../../utils/constants'
import {Color, Effect, Company, TiltOptions, Width} from '../../utils/types'
import {DURATION} from '../../styles/theme'
import {PROJECT_TYPE_LABELS} from '../../data/common'

interface ProjectLinkProps {
  index: number
  width: Width
  title: string
  name: string
  type: string
  color: Color
  company: Company
  path: string
}

const tiltOptions: TiltOptions = {
  max: DETECT.safari ? 0 : 20,
  scale: TILT_SCALE,
  speed: DURATION.longest,
}

export const projectTypeLabels = {
  [PROJECT_TYPE.app]: [PROJECT_TYPE_LABELS.app],
  [PROJECT_TYPE.site]: [PROJECT_TYPE_LABELS.site],
  [PROJECT_TYPE.admin]: [PROJECT_TYPE_LABELS.admin],
  [PROJECT_TYPE.landing]: [PROJECT_TYPE_LABELS.landing],
}

const randomEffects: Effect[] = [
  EFFECTS.topSm,
  EFFECTS.rightSm,
  EFFECTS.bottomSm,
  EFFECTS.leftSm,
]

const getDelay = (index: number, width: Width): number => {
  if (width.sm) return 0
  const divider = width.md ? 2 : width.lg ? 3 : 4
  return getListDelay(index % divider)
}

export default function ProjectLink({
  index,
  width,
  title,
  name,
  type,
  color,
  company,
  path,
}: ProjectLinkProps): JSX.Element {
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
        className={cn(DETECT.mobile && 'ProjectLink-Tilt')}
        effect={
          width.sm
            ? EFFECTS.bottomSm
            : randomEffects[Math.floor(Math.random() * 4)]
        }
        delay={getDelay(index, width)}
      >
        <Tilt el="div" className="ProjectLink-Tilt" options={tiltOptions}>
          <ButtonBase
            focusRipple
            component={Link}
            className={`ProjectLink-Item ColorInteract ColorInteract_color_${color}`}
            to={`${ROUTE.portfolio}${path}`}
          >
            <Panel
              className={`ProjectLink-View ProjectLink-View_name_${name}`}
            />
            <div className="ProjectLink-Content">
              <img
                className="ProjectLink-Company"
                src={company.images[0]}
                srcSet={`${company.images[1]} 2x`}
                alt={company.title}
              />
              <h3 className="ProjectLink-Title">{title}</h3>
              <p className="ProjectLink-Label">{projectTypeLabels[type]}</p>
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}
