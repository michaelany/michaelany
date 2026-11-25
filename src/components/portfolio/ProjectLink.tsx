import type {TFunction} from 'i18next'

import './ProjectLink.scss'
import CardLink from '#components/common/CardLink'
import {tProjectTypes} from '#utils/helpers'
import {ROUTE} from '#utils/constants'
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
  const projectTitle =
    project.title ?? t(`portfolio.project.${project.name}.title`)

  return (
    <CardLink
      to={`${ROUTE.portfolio}/${project.name}`}
      title={projectTitle}
      color={project.color}
      index={index}
      width={width}
      viewClassName={`ProjectLink-View ProjectLink-View_name_${project.name}`}
      logo={
        <img
          className="ProjectLink-Logo"
          src={project.images.logo[0]}
          srcSet={`${project.images.logo[1]} 2x`}
          alt={projectTitle}
          loading="lazy"
        />
      }
    >
      <p className="ProjectLink-Label">
        {tProjectTypes(t, project.types, project.mobileApp)}
      </p>
    </CardLink>
  )
}
