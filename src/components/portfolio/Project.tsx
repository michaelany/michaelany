import {Navigate, useParams} from 'react-router-dom'

import {Sections} from '#components/common'
import {ROUTE} from '#utils/constants'
import PROJECTS from '#data/projects'
import ProjectDetails from './ProjectDetails'
import ProjectAssets from './ProjectAssets'

export default function Project() {
  const params = useParams()

  console.log('project.name', params.project)

  const project = PROJECTS.find((project) => project.name === params.project)

  if (!project) return <Navigate to={ROUTE.portfolio} replace={true} />

  return (
    <Sections
      firstSection={<ProjectDetails project={project} />}
      secondSection={<ProjectAssets project={project} />}
    />
  )
}
