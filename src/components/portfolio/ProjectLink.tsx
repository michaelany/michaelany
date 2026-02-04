import {useMemo} from 'react'
import {Link} from 'react-router-dom'
import {Grid, ButtonBase} from '@mui/material'
import type {TFunction} from 'i18next'

import './ProjectLink.scss'
import {Animate, Tilt, Panel} from '#components/common'
import {getGridAnimationDelay, tProjectTypes} from '#utils/helpers'
import {DETECT, ROUTE, RANDOM_EFFECTS} from '#utils/constants'
import type {IWidth, IProject} from '#utils/types'

interface IProjectLinkProps {
  t: TFunction
  index: number
  width: IWidth
  project: IProject
}

export default function ProjectLink({
  t,
  index,
  width,
  project,
}: IProjectLinkProps) {
  const effect = useMemo(
    () =>
      width.sm ? undefined : RANDOM_EFFECTS[Math.floor(Math.random() * 4)],
    [width.sm]
  )

  const projectTitle =
    project.title ?? t(`portfolio.project.${project.name}.title`)

  return (
    <Grid item component="li" xs={12} md={6} lg={4} xl={3}>
      <Animate
        className={DETECT.mobile ? 'ProjectLink-Tilt' : undefined}
        effect={effect}
        delay={getGridAnimationDelay(index, width)}
      >
        <Tilt className="ProjectLink-Tilt">
          <ButtonBase
            focusRipple
            component={Link}
            className={`ProjectLink-Item ColorInteract ColorInteract_color_${project.color}`}
            to={`${ROUTE.portfolio}/${project.name}`}
          >
            <Panel
              className={`ProjectLink-View ProjectLink-View_name_${project.name}`}
            />
            <div className="ProjectLink-Content">
              <img
                src={project.images.logo[0]}
                srcSet={`${project.images.logo[1]} 2x`}
                alt={projectTitle}
                loading="lazy"
              />
              <h3 className="ProjectLink-Title">{projectTitle}</h3>
              <p className="ProjectLink-Label">
                {tProjectTypes(t, project.types, project.mobileApp)}
              </p>
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}
