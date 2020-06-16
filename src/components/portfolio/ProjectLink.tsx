import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

import './ProjectLink.scss'
import Tilt from '../common/Tilt'
import Panel from '../common/Panel'
import {DETECTED, PATHS, PROJECT_TYPES, TILT_SCALE} from '../../utils/constants'
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
  max: DETECTED.safari ? 0 : 20,
  scale: TILT_SCALE,
  speed: DURATIONS.longest,
}

export const projectTypeLabels = {
  [PROJECT_TYPES.app]: [PROJECT_TYPE_LABELS.app],
  [PROJECT_TYPES.site]: [PROJECT_TYPE_LABELS.site],
  [PROJECT_TYPES.admin]: [PROJECT_TYPE_LABELS.admin],
  [PROJECT_TYPES.landing]: [PROJECT_TYPE_LABELS.landing],
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
          to={`${PATHS.portfolio}${path}`}
        >
          <Panel classes={`ProjectLink-View ProjectLink-View_name_${name}`} />
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
    </Grid>
  )
}
