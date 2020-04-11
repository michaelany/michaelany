import React, {useState, ChangeEvent} from 'react'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './Projects.scss'
import Project from './Project'
import {COMPANIES} from '../../utils/data'
import {ProjectType} from '../../utils/enums'
import {IMap, IProject} from '../../utils/types'

type Filter = 'all' | ProjectType

const FILTER_ALL = 'all'

const filters: Filter[] = [
  FILTER_ALL,
  ProjectType.APP,
  ProjectType.SITE,
  ProjectType.ADMIN,
  ProjectType.LANDING,
]

const filterLabelsMap: IMap<string> = {
  all: 'Все',
  [ProjectType.APP]: 'Приложения',
  [ProjectType.SITE]: 'Сайты',
  [ProjectType.ADMIN]: 'Админки',
  [ProjectType.LANDING]: 'Лендинги',
}

const projects: IProject[] = [
  {
    title: 'Michael Ananiev',
    name: 'ma',
    type: ProjectType.SITE,
    color: 'green',
    company: COMPANIES.MA,
    href: '',
  },
  {
    title: 'АРМА ЕМБП',
    name: 'embp',
    type: ProjectType.ADMIN,
    color: 'blue',
    company: COMPANIES.TSFTD,
    href: '',
  },
  {
    title: 'Proximal Coffee',
    name: 'proximal',
    type: ProjectType.LANDING,
    color: 'yellow',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'Ted Manson Foundation',
    name: 'tmf',
    type: ProjectType.SITE,
    color: 'blue',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: '7 glyphs Lite',
    name: 'lite',
    type: ProjectType.LANDING,
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'Foodprint Portal',
    name: 'foodportal',
    type: ProjectType.ADMIN,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
  },
  {
    title: 'Foodprint',
    name: 'food',
    type: ProjectType.LANDING,
    color: 'violet',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
  },
  {
    title: 'Sales Digital System',
    name: 'sds',
    type: ProjectType.APP,
    color: 'grass',
    company: COMPANIES.TSFTD,
    href: '',
  },
  {
    title: 'Melissa Chalmers',
    name: 'melissa',
    type: ProjectType.LANDING,
    color: 'green',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/melissachalmers',
  },
  {
    title: 'StrongHer',
    name: 'strong',
    type: ProjectType.LANDING,
    color: 'red',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/strongher',
  },
  {
    title: 'Rogue Travel',
    name: 'rogue',
    type: ProjectType.SITE,
    color: 'red',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/rogue-travel',
  },
  {
    title: 'Quarry Trucks',
    name: 'trucks',
    type: ProjectType.APP,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/quarry-trucks',
  },
  {
    title: 'Service Packages',
    name: 'services',
    type: ProjectType.LANDING,
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'My Love',
    name: 'love',
    type: ProjectType.APP,
    color: 'red',
    company: COMPANIES.MA,
    href: '',
  },
  {
    title: 'FCDC Dashboard',
    name: 'fcdc',
    type: ProjectType.ADMIN,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: '12 Saffron',
    name: '12saffron',
    type: ProjectType.LANDING,
    color: 'yellow',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
  },
  {
    title: 'Whip Around',
    name: 'whiparound',
    type: ProjectType.SITE,
    color: 'green',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
  },
  {
    title: 'LazyAz Dashboard',
    name: 'lazyazdashboard',
    type: ProjectType.ADMIN,
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'LazyAz',
    name: 'lazyaz',
    type: ProjectType.SITE,
    color: 'red',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
  },
  {
    title: 'Сайт 7 glyphs',
    name: '7glyphs',
    type: ProjectType.SITE,
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com',
  },
  {
    title: 'Бизнес-навигатор МСП',
    name: 'msp',
    type: ProjectType.APP,
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
  const [value, setValue] = useState<Filter>(FILTER_ALL)

  const handleChange = (e: ChangeEvent<object>, value: ProjectType): void => {
    setValue(value)
  }

  return (
    <div className="Projects">
      <Tabs className="Projects-Filters" value={value} onChange={handleChange}>
        {filters.map(
          (type: Filter): JSX.Element => (
            <Tab key={type} value={type} label={filterLabelsMap[type]} />
          )
        )}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(value).map(
          (project: IProject): JSX.Element => (
            <Project key={project.name} {...project} />
          )
        )}
      </Grid>
    </div>
  )
}
