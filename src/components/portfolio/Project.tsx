import React from 'react'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

import './Project.scss'
import {ReactComponent as DesktopSvg} from '../../assets/img/shapes/desktop.svg'
import {BLANK_LINK_PROPS, PROJECT_TYPES} from '../../utils/data'
import {IProject as IProjectProps, IMap} from '../../utils/types'

export const projectTypeLabels: IMap<string> = {
  [PROJECT_TYPES.APP]: 'Приложение',
  [PROJECT_TYPES.SITE]: 'Сайт',
  [PROJECT_TYPES.ADMIN]: 'Админка',
  [PROJECT_TYPES.LANDING]: 'Лендинг',
}

export default function Project({
  title,
  name,
  type,
  color,
  company,
  href,
}: IProjectProps): JSX.Element {
  return (
    <Grid
      item
      component="li"
      className="Project"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      <ButtonBase
        {...BLANK_LINK_PROPS}
        focusRipple
        component="a"
        className={`Project-Link ColorInteractive ColorInteractive_color_${color}`}
        href={href}
      >
        <div className="Project-Content">
          <div className={`Project-View Project-View_name_${name}`}>
            <DesktopSvg className="Project-Panel" />
          </div>
        </div>
        <div className="Project-Block">
          <img
            className="Project-Company"
            height={36}
            src={company.logo}
            srcSet={`${company.logo2x} 2x`}
            alt={company.title}
          />
          <h3 className="Project-Title">{title}</h3>
          <p className="Project-Label">{projectTypeLabels[type]}</p>
        </div>
      </ButtonBase>
    </Grid>
  )
}
