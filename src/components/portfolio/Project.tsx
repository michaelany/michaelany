import React from 'react'
import {RouteChildrenProps} from 'react-router-dom'

import {Sections, Pagination, Copyright} from '../common'
import ProjectDetails from './ProjectDetails'
import Carousel from './Carousel'
import {ROUTE} from '../../utils/constants'
import {Project as ProjectInterface} from '../../utils/types'
import PROJECTS from '../../data/projects'

interface ProjectParams {
  project: string
}

export default function Project({
  match,
}: RouteChildrenProps<ProjectParams>): JSX.Element {
  const project: ProjectInterface = PROJECTS.find(
    (project: ProjectInterface): boolean =>
      project.path.slice(1) === match!.params.project
  )!
  return (
    <Sections
      firstSection={
        <ProjectDetails
          title={project.title}
          company={project.company}
          description={project.description}
          features={project.features}
          href={project.href}
        />
      }
      secondSection={
        <section className="Section Section_pagination Section_colorful">
          <h2 className="VisuallyHidden">Скриншоты</h2>
          <div>
            {project.images.desktop && (
              <Carousel title={project.title} images={project.images.desktop} />
            )}
            {project.images.mobile && (
              <Carousel
                mobile
                title={project.title}
                images={project.images.mobile}
              />
            )}
          </div>
          <Pagination prevTo={ROUTE.portfolio} />
          <Copyright />
        </section>
      }
    />
  )
}
