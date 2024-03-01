import {memo, useState, ChangeEvent} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery, Grid, Tabs, Tab} from '@mui/material'

import './Projects.scss'
import {QUERY_BREAKPOINT} from '@utils/constants'
import {IProject, TProjectType, IWidth} from '@utils/types'
import PROJECTS from '@data/projects'
import ProjectLink from './ProjectLink'

type TFilter = 'all' | TProjectType

// memo is for avoiding reanimation items if several times click on the navlink
const Projects = memo(() => {
  const {t} = useTranslation()
  const [filter, changeFilter] = useState<string>(
    localStorage.getItem(storageProp) ?? 'all'
  )
  const width: IWidth = {
    lg: useMediaQuery(QUERY_BREAKPOINT.lg),
    md: useMediaQuery(QUERY_BREAKPOINT.md),
    sm: useMediaQuery(QUERY_BREAKPOINT.sm),
  }

  const handleChange = (_: ChangeEvent<object>, value: string) => {
    localStorage.setItem(storageProp, value)
    changeFilter(value)
  }

  return (
    <>
      <Tabs
        className="Projects-Filters"
        value={filter}
        scrollButtons={false}
        textColor="inherit"
        variant="scrollable"
        onChange={handleChange}
      >
        {filters.map((type: string) => (
          <Tab key={type} value={type} label={t(`portfolio.filter.${type}`)} />
        ))}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(filter).map((project: IProject, index: number) => (
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

const getFilteredProjects = (filter: string): IProject[] =>
  filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project: IProject): boolean =>
        project.types.includes(filter as TProjectType)
      )

const storageProp = 'filter'

const filters: TFilter[] = ['all', 'app', 'site', 'landing', 'admin']
