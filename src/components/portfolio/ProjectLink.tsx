import {useMemo} from 'react'
import {Link} from 'react-router-dom'
import {ButtonBase} from '@mui/material'
import type {TFunction} from 'i18next'

import './ProjectLink.scss'
import {Animate, Tilt, Panel} from '#components/common'
import {getGridAnimationDelay, tProjectTypes} from '#utils/helpers'
import {IS_MOBILE_DEVICE, ROUTE, RANDOM_EFFECTS} from '#utils/constants'
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
    <li>
      <Animate
        className={IS_MOBILE_DEVICE ? 'ProjectLink-Tilt' : undefined}
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
                className="ProjectLink-Logo"
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
    </li>
  )
}
