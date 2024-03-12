import {useState, ChangeEvent} from 'react'
import {useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid, Tabs, Tab} from '@mui/material'

import {QUERY_BREAKPOINT, PROJECT_FILTERS} from '@utils/constants'
import {IProject, TProjectType, TProjectFilter, IWidth} from '@utils/types'
import PROJECTS from '@data/projects'
import ProjectLink from './ProjectLink'

export default function Projects() {
  const location = useLocation()
  const hashValue = location.hash ? location.hash.slice(1) : null
  const hashFilter =
    hashValue && PROJECT_FILTERS.includes(hashValue as TProjectFilter)
      ? (hashValue as TProjectFilter)
      : null
  const [filter, setFilter] = useState<TProjectFilter>(
    hashFilter
      ? hashFilter
      : (localStorage.getItem(storageProp) as TProjectFilter) ?? 'all'
  )
  const {t} = useTranslation()
  const width: IWidth = {
    lg: useMediaQuery(QUERY_BREAKPOINT.lg),
    md: useMediaQuery(QUERY_BREAKPOINT.md),
    sm: useMediaQuery(QUERY_BREAKPOINT.sm),
  }

  const handleChange = (_: ChangeEvent<object>, value: TProjectFilter) => {
    localStorage.setItem(storageProp, value)
    setFilter(value)
  }

  const filteredProjects: IProject[] =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project: IProject): boolean =>
          project.types.includes(filter as TProjectType)
        )

  return (
    <>
      <Tabs className="Tabs" value={filter} onChange={handleChange}>
        {PROJECT_FILTERS.map((filter) => (
          <Tab
            key={filter}
            value={filter}
            label={t(`portfolio.filter.${filter}`)}
          />
        ))}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {filteredProjects.map((project, index) => (
          <ProjectLink
            key={`${project.name}-${filter}`}
            t={t}
            width={width}
            index={index}
            mobileApp={project.mobileApp}
            name={project.name}
            title={project.title}
            types={project.types}
            logo={project.images.logo}
          />
        ))}
      </Grid>
    </>
  )
}

const storageProp = 'filter'
