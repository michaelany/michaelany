import {memo, useState, ChangeEvent} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid, Tabs, Tab} from '@mui/material'

import './Projects.scss'
import {QUERY_BREAKPOINT} from '@utils/constants'
import {Project, ProjectType, Width} from '@utils/types'
import PROJECTS from '@data/projects'
import ProjectLink from './ProjectLink'

type Filter = 'all' | ProjectType

// memo is for avoiding reanimation items if several times click on the navlink
const Projects = memo(() => {
  const {t} = useTranslation()
  const [filter, changeFilter] = useState<string>(
    localStorage.getItem(storageProp) ?? 'all'
  )
  const width: Width = {
    lg: useMediaQuery(QUERY_BREAKPOINT.lg),
    md: useMediaQuery(QUERY_BREAKPOINT.md),
    sm: useMediaQuery(QUERY_BREAKPOINT.sm),
  }

  const handleChange = (_: ChangeEvent<object>, value: string) => {
    localStorage.setItem(storageProp, value)
    changeFilter(value)
  }

  return (
    <div>
      <Tabs
        className="Projects-Filters"
        value={filter}
        variant="scrollable"
        scrollButtons="off"
        onChange={handleChange}
      >
        {filters.map((type: string) => (
          <Tab key={type} value={type} label={t(`portfolio.filter.${type}`)} />
        ))}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(filter).map((project: Project, index: number) => (
          <ProjectLink
            key={`${project.name}-${filter}`}
            t={t}
            width={width}
            index={index}
            name={project.name}
            title={project.title}
            types={project.types}
            logo={project.images.logo}
          />
        ))}
      </Grid>
    </div>
  )
})

export default Projects

const getFilteredProjects = (filter: string): Project[] =>
  filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project: Project): boolean =>
        project.types.includes(filter as ProjectType)
      )

const storageProp = 'filter'

const filters: Filter[] = ['all', 'app', 'site', 'landing', 'admin']
