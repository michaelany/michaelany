import {memo, useState, ChangeEvent} from 'react'
import {useMediaQuery, Grid, Tabs, Tab} from '@material-ui/core'

import './Projects.scss'
import ProjectLink from './ProjectLink'
import {QUERY_BREAKPOINT} from '../../utils/constants'
import {Map, Project, ProjectType, Width} from '../../utils/types'
import {PROJECT_TYPE_LABEL} from '../../data/common'
import PROJECTS from '../../data/projects'

type Filter = 'all' | ProjectType

const storageProp: string = 'filter'

const filters: Filter[] = ['all', 'landing', 'site', 'app', 'admin']

const filterLabel: Map<string> = {
  all: 'Все',
  landing: PROJECT_TYPE_LABEL.landing,
  site: PROJECT_TYPE_LABEL.site,
  app: PROJECT_TYPE_LABEL.app,
  admin: PROJECT_TYPE_LABEL.admin,
}

const getFilteredProjects = (filter: string): Project[] =>
  filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project: Project): boolean =>
        project.types.includes(filter as ProjectType)
      )

function Projects(): JSX.Element {
  const [filter, changeFilter] = useState<string>(
    localStorage.getItem(storageProp) || 'all'
  )
  const width: Width = {
    lg: useMediaQuery(QUERY_BREAKPOINT.lg),
    md: useMediaQuery(QUERY_BREAKPOINT.md),
    sm: useMediaQuery(QUERY_BREAKPOINT.sm),
  }

  const handleChange = (e: ChangeEvent<object>, value: string): void => {
    localStorage.setItem(storageProp, value)
    changeFilter(value)
  }

  return (
    <div className="Projects">
      <Tabs
        className="Projects-Filters"
        value={filter}
        variant="scrollable"
        scrollButtons="off"
        onChange={handleChange}
      >
        {filters.map((type: string) => (
          <Tab key={type} value={type} label={filterLabel[type]} />
        ))}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(filter).map((project: Project, index: number) => (
          <ProjectLink
            key={`${project.name}-${filter}`}
            width={width}
            index={index}
            title={project.title}
            name={project.name}
            types={project.types}
            companyName={project.companyName}
          />
        ))}
      </Grid>
    </div>
  )
}

// it's avoiding reanimation items if several times click on the navlink
export default memo(Projects)
