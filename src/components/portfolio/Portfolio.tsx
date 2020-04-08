import React from 'react'
import Grid from '@material-ui/core/Grid'

import './Portfolio.scss'
import Project from './Project'
import {COMPANIES} from '../../utils/data'
import {Title} from '../../utils/enums'
import {IProject} from '../../utils/types'

const projects: IProject[] = [
  {
    title: 'Service Packages',
    name: 'servicepacks',
    type: 'landing',
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'FCDC',
    name: 'fcdc',
    type: 'admin',
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: '12 Saffron',
    name: '12saffron',
    type: 'landing',
    color: 'yellow',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
  },
  {
    title: 'Whip Around',
    name: 'whiparound',
    type: 'admin',
    color: 'green',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
  },
  {
    title: 'LazyAz Dashboard',
    name: 'lazyazdashboard',
    type: 'admin',
    color: 'default',
    company: COMPANIES.SEVEN_GLYPHS,
    href: '',
  },
  {
    title: 'LazyAz',
    name: 'lazyaz',
    type: 'app',
    color: 'red',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
  },
  {
    title: 'Сайт 7 glyphs',
    name: '7glyphs',
    type: 'site',
    color: 'grass',
    company: COMPANIES.SEVEN_GLYPHS,
    href: 'https://7glyphs.com',
  },
  {
    title: 'Бизнес-навигатор МСП',
    name: 'msp',
    type: 'app',
    color: 'blue',
    company: COMPANIES.EVERPOINT,
    href: 'https://www.everpoint.ru/geomonitoring',
  },
]

export default function Portfolio(): JSX.Element {
  return (
    <section className="Portfolio Section Section_type_single">
      <h1 className="Title Title_color_white">{Title.PORTFOLIO}</h1>
      <Grid container component="ul" className="Portfolio-Projects" spacing={3}>
        {projects.map(
          (project: IProject): JSX.Element => (
            <Project key={project.name} {...project} />
          )
        )}
      </Grid>
    </section>
  )
}
