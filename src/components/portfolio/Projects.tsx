import React, {useState, ChangeEvent} from 'react'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './Projects.scss'
import Project from './Project'
import {COMPANIES, PROJECT_TYPES} from '../../utils/data'
import {ProjectType, IMap, IProject} from '../../utils/types'

type Filter = 'all' | ProjectType

const FILTER_ALL = 'all'

const filters: Filter[] = [
  FILTER_ALL,
  PROJECT_TYPES.APP,
  PROJECT_TYPES.SITE,
  PROJECT_TYPES.ADMIN,
  PROJECT_TYPES.LANDING,
]

const filterLabels: IMap<string> = {
  all: 'Все',
  [PROJECT_TYPES.APP]: 'Приложения',
  [PROJECT_TYPES.SITE]: 'Сайты',
  [PROJECT_TYPES.ADMIN]: 'Админки',
  [PROJECT_TYPES.LANDING]: 'Лендинги',
}

const projects: IProject[] = [
  {
    title: 'Michael Ananiev',
    name: 'ma',
    type: PROJECT_TYPES.SITE,
    color: 'green',
    company: COMPANIES.MA,
    href: '',
  },
  {
    title: 'АРМА ЕМБП',
    name: 'embp',
    type: PROJECT_TYPES.ADMIN,
    color: 'blue',
    company: COMPANIES.TSFTD,
    href: '',
  },
  {
    title: 'Proximal Coffee',
    name: 'proximal',
    type: PROJECT_TYPES.LANDING,
    color: 'yellow',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'Ted Manson Foundation',
    name: 'tmf',
    type: PROJECT_TYPES.SITE,
    color: 'blue',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: '7 glyphs Lite',
    name: 'lite',
    type: PROJECT_TYPES.LANDING,
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'Foodprint Portal',
    name: 'foodportal',
    type: PROJECT_TYPES.ADMIN,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
  },
  {
    title: 'Foodprint',
    name: 'food',
    type: PROJECT_TYPES.LANDING,
    color: 'violet',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
  },
  {
    title: 'Sales Digital System',
    name: 'sds',
    type: PROJECT_TYPES.APP,
    color: 'grass',
    company: COMPANIES.TSFTD,
    href: '',
  },
  {
    title: 'Melissa Chalmers',
    name: 'melissa',
    type: PROJECT_TYPES.LANDING,
    color: 'green',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/melissachalmers',
  },
  {
    title: 'StrongHer',
    name: 'strong',
    type: PROJECT_TYPES.LANDING,
    color: 'red',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/strongher',
  },
  {
    title: 'Rogue Travel',
    name: 'rogue',
    type: PROJECT_TYPES.SITE,
    color: 'red',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/rogue-travel',
  },
  {
    title: 'Quarry Trucks',
    name: 'trucks',
    type: PROJECT_TYPES.APP,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/quarry-trucks',
  },
  {
    title: 'Service Packages',
    name: 'services',
    type: PROJECT_TYPES.LANDING,
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'My Love',
    name: 'love',
    type: PROJECT_TYPES.APP,
    color: 'red',
    company: COMPANIES.MA,
    href: '',
  },
  {
    title: 'FCDC Dashboard',
    name: 'fcdc',
    type: PROJECT_TYPES.ADMIN,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: '12 Saffron',
    name: '12saffron',
    type: PROJECT_TYPES.LANDING,
    color: 'yellow',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
  },
  {
    title: 'Whip Around',
    name: 'whiparound',
    type: PROJECT_TYPES.SITE,
    color: 'green',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
  },
  {
    title: 'LazyAz Dashboard',
    name: 'lazyazdashboard',
    type: PROJECT_TYPES.ADMIN,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'LazyAz',
    name: 'lazyaz',
    type: PROJECT_TYPES.SITE,
    color: 'red',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
  },
  {
    title: 'Сайт 7 glyphs',
    name: '7glyphs',
    type: PROJECT_TYPES.SITE,
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com',
  },
  {
    title: 'Бизнес-навигатор МСП',
    name: 'msp',
    type: PROJECT_TYPES.APP,
    color: 'blue',
    company: COMPANIES.EVERPOINT,
    href: 'https://www.everpoint.ru/geomonitoring',
  },
]

const getFilteredProjects = (filter: Filter): IProject[] =>
  filter === FILTER_ALL
    ? projects
    : projects.filter((project: IProject): boolean => project.type === filter)

export default function Projects(): JSX.Element {
  const [filter, changeFilter] = useState<Filter>(FILTER_ALL)

  const handleChange = (e: ChangeEvent<object>, value: ProjectType): void => {
    changeFilter(value)
  }

  return (
    <div className="Projects">
      <Tabs className="Projects-Filters" value={filter} onChange={handleChange}>
        {filters.map(
          (type: Filter): JSX.Element => (
            <Tab key={type} value={type} label={filterLabels[type]} />
          )
        )}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(filter).map(
          (project: IProject): JSX.Element => (
            <Project key={project.name} {...project} />
          )
        )}
      </Grid>
    </div>
  )
}
