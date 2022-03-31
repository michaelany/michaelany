import {memo, useState, ChangeEvent} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid, Tabs, Tab} from '@material-ui/core'

import './Projects.scss'
import ProjectLink from './ProjectLink'
import {QUERY_BREAKPOINT} from 'utils/constants'
import {Project, ProjectType, Width} from 'utils/types'
import PROJECTS from 'data/projects'

type Filter = 'all' | ProjectType

const storageProp: string = 'filter'

const filters: Filter[] = ['all', 'app', 'site', 'landing', 'admin']

const getFilteredProjects = (filter: string): Project[] =>
  filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project: Project): boolean =>
        project.types.includes(filter as ProjectType)
      )

function Projects(): JSX.Element {
  const {t} = useTranslation()
  const [filter, changeFilter] = useState<string>(
    localStorage.getItem(storageProp) ?? 'all'
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
}

// it's avoiding reanimation items if several times click on the navlink
export default memo(Projects)
