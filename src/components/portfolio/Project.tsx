import {Navigate, useParams} from 'react-router-dom'

import {Sections} from '../common'
import ProjectDetails from './ProjectDetails'
import ProjectAssets from './ProjectAssets'
import {ROUTE, PROJECT_ROUTE} from 'utils/constants'
import {Project as ProjectInterface} from 'utils/types'
import PROJECTS from 'data/projects'

export default function Project() {
  const params = useParams()

  const project: ProjectInterface | undefined = PROJECTS.find(
    (project: ProjectInterface): boolean =>
      PROJECT_ROUTE[project.name].slice(1) === params.project
  )

  if (!project) return <Navigate to={ROUTE.portfolio} replace={true} />

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
