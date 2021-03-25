import React from 'react'
import cn from 'clsx'
import {Link} from 'react-router-dom'
import {Grid, ButtonBase} from '@material-ui/core'

import './ProjectLink.scss'
import {Animate, Tilt, Panel} from '../common'
import {getListDelay} from '../../utils/helpers'
import {DETECT, ROUTE, TILT_SCALE} from '../../utils/constants'
import {Color, Effect, Company, TiltOptions, Width} from '../../utils/types'
import {DURATION} from '../../styles/theme'
import {PROJECT_TYPE_LABEL} from '../../data/common'

interface ProjectLinkProps {
  index: number
  width: Width
  title: string
  name: string
  type: keyof typeof PROJECT_TYPE_LABEL
  color: Color
  company: Company
  path: string
}

const tiltOptions: TiltOptions = {
  max: DETECT.safari ? 0 : 20,
  scale: TILT_SCALE,
  speed: DURATION.longest,
}

const randomEffects: Effect[] = ['topSm', 'rightSm', 'bottomSm', 'leftSm']

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
          width.sm ? undefined : randomEffects[Math.floor(Math.random() * 4)]
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
              <p className="ProjectLink-Label">{PROJECT_TYPE_LABEL[type]}</p>
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}
