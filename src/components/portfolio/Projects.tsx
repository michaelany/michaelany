import {memo, useState, ChangeEvent} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid, Tabs, Tab} from '@mui/material'

import {QUERY_BREAKPOINT} from '@utils/constants'
import {IProject, TProjectType, IWidth} from '@utils/types'
import PROJECTS from '@data/projects'
import ProjectLink from './ProjectLink'

type TFilter = 'all' | TProjectType

const Projects = memo(() => {
  const {t} = useTranslation()
  const [filter, setFilter] = useState<TFilter>(
    (localStorage.getItem(storageProp) as TFilter) ?? 'all'
  )
  const width: IWidth = {
    lg: useMediaQuery(QUERY_BREAKPOINT.lg),
    md: useMediaQuery(QUERY_BREAKPOINT.md),
    sm: useMediaQuery(QUERY_BREAKPOINT.sm),
  }

  const handleChange = (_: ChangeEvent<object>, value: TFilter) => {
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
        {filters.map((type) => (
          <Tab key={type} value={type} label={t(`portfolio.filter.${type}`)} />
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
})

export default Projects

const storageProp = 'filter'

const filters: TFilter[] = ['all', 'app', 'site', 'landing', 'admin']
