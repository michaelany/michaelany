import {Link} from 'react-router-dom'
import {TFunction} from 'i18next'
import {Grid, ButtonBase} from '@mui/material'

import './ProjectLink.scss'
import {Animate, Tilt, Panel} from '@components/common'
import {getListDelay, tProjectTypes} from '@utils/helpers'
import {DETECT, ROUTE, PROJECT_ROUTE, PATH_COLOR} from '@utils/constants'
import {TEffect, TProjectName, TProjectType, IWidth} from '@utils/types'

interface IProjectLinkProps {
  t: TFunction
  index: number
  width: IWidth
  mobileApp?: boolean
  name: TProjectName
  title?: string
  types: TProjectType[]
  logo: string[]
}

export default function ProjectLink({
  t,
  index,
  width,
  mobileApp,
  name,
  title,
  types,
  logo,
}: IProjectLinkProps) {
  const path = PROJECT_ROUTE[name]

  const projectTitle = title ?? t(`portfolio.project.${name}.title`)

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
          width.sm ? undefined : randomEffects[Math.floor(Math.random() * 4)]
        }
        delay={getDelay(index, width)}
      >
        <Tilt className="ProjectLink-Tilt">
          <ButtonBase
            focusRipple
            component={Link}
            className={`ProjectLink-Item ColorInteract ColorInteract_color_${PATH_COLOR[path]}`}
            to={`${ROUTE.portfolio}${path}`}
          >
            <Panel
              className={`ProjectLink-View ProjectLink-View_name_${name}`}
            />
            <div className="ProjectLink-Content">
              <img src={logo[0]} srcSet={`${logo[1]} 2x`} alt={projectTitle} />
              <h3 className="ProjectLink-Title">{projectTitle}</h3>
              <p className="ProjectLink-Label">
                {tProjectTypes(t, types, mobileApp)}
              </p>
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}

const getDelay = (index: number, width: IWidth): number => {
  if (width.sm) return 0
  const divider = width.md ? 2 : width.lg ? 3 : 4
  return getListDelay(index % divider)
}

const randomEffects: TEffect[] = ['top', 'right', 'bottom', 'left']
