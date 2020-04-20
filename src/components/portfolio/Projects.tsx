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

const filterAll: Filter = 'all'

const filters: Filter[] = [
  filterAll,
  PROJECT_TYPES.LANDING,
  PROJECT_TYPES.SITE,
  PROJECT_TYPES.APP,
  PROJECT_TYPES.ADMIN,
]

const filterLabels: Map<string> = {
  [filterAll]: 'Все',
  [PROJECT_TYPES.LANDING]: PROJECT_TYPE_LABELS.LANDING,
  [PROJECT_TYPES.SITE]: PROJECT_TYPE_LABELS.SITE,
  [PROJECT_TYPES.APP]: PROJECT_TYPE_LABELS.APP,
  [PROJECT_TYPES.ADMIN]: PROJECT_TYPE_LABELS.ADMIN,
}

const getFilteredProjects = (filter: string): Project[] =>
  filter === filterAll
    ? PROJECTS
    : PROJECTS.filter((project: Project): boolean => project.type === filter)

export default function Projects(): JSX.Element {
  const [filter, changeFilter] = useState<string>(filterAll)

  const handleChange = (e: ChangeEvent<object>, value: string): void => {
    changeFilter(value)
  }

  return (
    <div className="Projects">
      <Tabs
        className="Projects-Filters"
        value={filter}
        variant="scrollable"
        onChange={handleChange}
      >
        {filters.map(
          (type: string): JSX.Element => (
            <Tab key={type} value={type} label={filterLabels[type]} />
          )
        )}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(filter).map(
          ({name, title, type, color, company, path}: Project): JSX.Element => (
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
