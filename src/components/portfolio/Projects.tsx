import React, {useState, ChangeEvent} from 'react'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './Projects.scss'
import ProjectLink from './ProjectLink'
import {PROJECT_TYPES} from '../../utils/constants'
import {Map, Project, ProjectType} from '../../utils/types'
import {PROJECT_TYPE_LABELS} from '../../data/common'
import PROJECTS from '../../data/projects'

type Filter = 'all' | ProjectType

const storageProp: string = 'filter'

const filterAll: Filter = 'all'

const filters: Filter[] = [
  filterAll,
  PROJECT_TYPES.landing,
  PROJECT_TYPES.site,
  PROJECT_TYPES.app,
  PROJECT_TYPES.admin,
]

const filterLabels: Map<string> = {
  [filterAll]: 'Все',
  [PROJECT_TYPES.landing]: PROJECT_TYPE_LABELS.landing,
  [PROJECT_TYPES.site]: PROJECT_TYPE_LABELS.site,
  [PROJECT_TYPES.app]: PROJECT_TYPE_LABELS.app,
  [PROJECT_TYPES.admin]: PROJECT_TYPE_LABELS.admin,
}

const getFilteredProjects = (filter: string): Project[] =>
  filter === filterAll
    ? PROJECTS
    : PROJECTS.filter((project: Project): boolean => project.type === filter)

export default function Projects(): JSX.Element {
  const [filter, changeFilter] = useState<string>(
    localStorage.getItem(storageProp) || filterAll
  )

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
          <Tab key={type} value={type} label={filterLabels[type]} />
        ))}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(filter).map(
          ({name, title, type, color, company, path}: Project) => (
            <ProjectLink
              key={name}
              title={title}
              name={name}
              type={type}
              color={color}
              company={company}
              path={path}
            />
          )
        )}
      </Grid>
    </div>
  )
}
