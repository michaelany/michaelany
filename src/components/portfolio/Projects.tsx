import React, {memo, useState, ChangeEvent} from 'react'
import {useMediaQuery, Grid, Tabs, Tab} from '@material-ui/core'

import './Projects.scss'
import ProjectLink from './ProjectLink'
import {PROJECT_TYPE, QUERY_BREAKPOINT} from '../../utils/constants'
import {Map, Project, ProjectType, Width} from '../../utils/types'
import {PROJECT_TYPE_LABEL} from '../../data/common'
import PROJECTS from '../../data/projects'

type Filter = 'all' | ProjectType

const storageProp: string = 'filter'

const filterAll: Filter = 'all'

const filters: Filter[] = [
  filterAll,
  PROJECT_TYPE.landing,
  PROJECT_TYPE.site,
  PROJECT_TYPE.app,
  PROJECT_TYPE.admin,
]

const filterLabel: Map<string> = {
  [filterAll]: 'Все',
  [PROJECT_TYPE.landing]: PROJECT_TYPE_LABEL.landing,
  [PROJECT_TYPE.site]: PROJECT_TYPE_LABEL.site,
  [PROJECT_TYPE.app]: PROJECT_TYPE_LABEL.app,
  [PROJECT_TYPE.admin]: PROJECT_TYPE_LABEL.admin,
}

const getFilteredProjects = (filter: string): Project[] =>
  filter === filterAll
    ? PROJECTS
    : PROJECTS.filter((project: Project): boolean => project.type === filter)

function Projects(): JSX.Element {
  const [filter, changeFilter] = useState<string>(
    localStorage.getItem(storageProp) || filterAll
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
            type={project.type}
            color={project.color}
            company={project.company}
            path={project.path}
          />
        ))}
      </Grid>
    </div>
  )
}

// it's avoiding reanimation items if several times click on the navlink
export default memo(Projects)
