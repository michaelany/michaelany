import {RouteChildrenProps, Redirect} from 'react-router-dom'

import {Sections} from '../common'
import ProjectDetails from './ProjectDetails'
import ProjectAssets from './ProjectAssets'
import {ROUTE, PROJECT_ROUTE} from 'utils/constants'
import {Project as ProjectInterface} from 'utils/types'
import PROJECTS from 'data/projects'

interface ProjectParams {
  project: string
}

export default function Project({
  match,
}: RouteChildrenProps<ProjectParams>): JSX.Element {
  const project: ProjectInterface | undefined = PROJECTS.find(
    (project: ProjectInterface): boolean =>
      PROJECT_ROUTE[project.name].slice(1) === match!.params.project
  )

  if (!project) return <Redirect to={ROUTE.portfolio} />

  return (
    <Sections
      firstSection={
        <ProjectDetails
          name={project.name}
          title={project.title}
          textValues={project.textValues}
          companyName={project.companyName}
          types={project.types}
          features={project.features}
          url={project.url}
          details={project.details}
          stores={project.stores}
        />
      }
      secondSection={
        <ProjectAssets
          name={project.name}
          title={project.title}
          images={project.images}
        />
      }
    />
  )
}
