import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

import './ProjectLink.scss'
import {ReactComponent as DesktopSvg} from '../../assets/img/shapes/desktop.svg'
import {PATHS, PROJECT_TYPES} from '../../utils/constants'
import {Color, Company} from '../../utils/types'
import {PROJECT_TYPE_LABELS} from '../../data/common'

interface ProjectLinkProps {
  title: string
  name: string
  type: string
  color: Color
  company: Company
  path: string
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
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      <ButtonBase
        focusRipple
        component={Link}
        className={`ProjectLink-Link ColorInteract ColorInteract_color_${color}`}
        to={`${PATHS.PORTFOLIO}${path}`}
      >
        <div className={`ProjectLink-View ProjectLink-View_name_${name}`}>
          <div className="SvgPanel">
            <DesktopSvg />
          </div>
        </div>
        <div className="ProjectLink-Content">
          <img
            height={36}
            src={company.logo}
            srcSet={`${company.logo2x} 2x`}
            alt={company.title}
          />
          <h3 className="ProjectLink-Title">{title}</h3>
          <p className="ProjectLink-Label">{projectTypeLabels[type]}</p>
        </div>
      </ButtonBase>
    </Grid>
  )
}
