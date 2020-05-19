import React from 'react'
import {isSafari} from 'react-device-detect'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

import './ProjectLink.scss'
import Tilt from '../_common/Tilt'
import SvgPanel from '../_common/SvgPanel'
import {PATHS, PROJECT_TYPES, TILT_SCALE} from '../../utils/constants'
import {Color, Company, TiltOptions} from '../../utils/types'
import {DURATIONS} from '../../styles/theme'
import {PROJECT_TYPE_LABELS} from '../../data/common'

interface ProjectLinkProps {
  title: string
  name: string
  type: string
  color: Color
  company: Company
  path: string
}

const tiltOptions: TiltOptions = {
  max: isSafari ? 0 : 20,
  scale: TILT_SCALE,
  speed: DURATIONS.LONGEST,
}

export const projectTypeLabels = {
  [PROJECT_TYPES.APP]: [PROJECT_TYPE_LABELS.APP],
  [PROJECT_TYPES.SITE]: [PROJECT_TYPE_LABELS.SITE],
  [PROJECT_TYPES.ADMIN]: [PROJECT_TYPE_LABELS.ADMIN],
  [PROJECT_TYPES.LANDING]: [PROJECT_TYPE_LABELS.LANDING],
}

export default function ProjectLink({
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
      <Tilt className="ProjectLink-Tilt" options={tiltOptions}>
        <ButtonBase
          focusRipple
          component={Link}
          className={`ProjectLink-Item ColorInteract ColorInteract_color_${color}`}
          to={`${PATHS.PORTFOLIO}${path}`}
        >
          <SvgPanel
            classes={`ProjectLink-View ProjectLink-View_name_${name}`}
          />
          <div className="ProjectLink-Content">
            <img
              className="ProjectLink-Company"
              src={company.logo}
              srcSet={`${company.logo2x} 2x`}
              alt={company.title}
            />
            <h3 className="ProjectLink-Title">{title}</h3>
            <p className="ProjectLink-Label">{projectTypeLabels[type]}</p>
          </div>
        </ButtonBase>
      </Tilt>
    </Grid>
  )
}
