import React from 'react'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Pagination from '../_common/Pagination'
import Technology from './Technology'
import {Route} from '../../utils/enums'
import {ITechnology} from '../../utils/types'

interface IGroup {
  id: number
  title: string
  expanded?: boolean
  technologies: ITechnology[]
}

const groups: IGroup[] = [
  {
    id: 1,
    title: 'JavaScript',
    expanded: true,
    technologies: [
      {
        id: 1,
        type: 'js',
        label: 'JavaScript',
        color: 'yellow',
        href: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        id: 2,
        type: 'ts',
        label: 'TypeScript',
        color: 'blue',
        href: 'https://www.typescriptlang.org',
      },
      {
        id: 3,
        type: 'react',
        label: 'React',
        color: 'blue',
        href: 'https://reactjs.org',
      },
      {
        id: 4,
        type: 'redux',
        label: 'Redux',
        color: 'violet',
        href: 'https://redux.js.org',
      },
      {
        id: 5,
        type: 'mobx',
        label: 'MobX',
        color: 'red',
        href: 'https://mobx.js.org',
      },
      {
        id: 6,
        type: 'preact',
        label: 'Preact',
        color: 'violet',
        href: 'https://preactjs.com',
      },
      {
        id: 7,
        type: 'vue',
        label: 'Vue.js',
        color: 'grass',
        href: 'https://vuejs.org',
      },
      {
        id: 8,
        type: 'svelte',
        label: 'Svelte',
        color: 'red',
        href: 'https://svelte.dev',
      },
    ],
  },
  {
    id: 2,
    title: 'Markup',
    expanded: true,
    technologies: [
      {
        id: 1,
        type: 'html',
        label: 'HTML5',
        color: 'red',
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {id: 2, type: 'svg', label: 'SVG', color: 'yellow', href: 'https://www.w3.org/Graphics/SVG'},
      {
        id: 3,
        type: 'react',
        label: 'JSX',
        color: 'blue',
        href: 'https://reactjs.org/docs/introducing-jsx.html',
      },
      {
        id: 4,
        type: 'pug',
        label: 'Pug',
        color: 'yellow',
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        id: 5,
        type: 'handlebars',
        label: 'Handlebars',
        color: 'default',
        href: 'https://handlebarsjs.com',
      },
      {
        id: 6,
        type: 'markdown',
        label: 'Markdown',
        color: 'default',
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        id: 7,
        type: 'laravel',
        label: 'Blade',
        color: 'red',
        href: 'https://laravel.com/docs/5.6/blade#introduction',
      },
    ],
  },
  {
    id: 3,
    title: 'Styles',
    expanded: true,
    technologies: [
      {
        id: 1,
        type: 'css',
        label: 'CSS3',
        color: 'blue',
        href: 'https://www.w3.org/style/css',
      },
      {
        id: 2,
        type: 'bem',
        label: 'BEM',
        color: 'default',
        href: 'https://bem.info',
      },
      {
        id: 3,
        type: 'sass',
        label: 'Sass',
        color: 'red',
        href: 'https://sass-lang.com',
      },
      {
        id: 4,
        type: 'cssModules',
        label: 'CSS Modules',
        color: 'default',
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        id: 5,
        type: 'styledComponents',
        label: 'styled-components',
        color: 'yellow',
        href: 'https://styled-components.com',
      },
      {
        id: 6,
        type: 'mui',
        label: 'Material-UI',
        color: 'blue',
        href: 'https://material-ui.com',
      },
      {
        id: 7,
        type: 'reactstrap',
        label: 'reactstrap',
        color: 'default',
        href: 'https://reactstrap.github.io/',
      },
      {
        id: 8,
        type: 'antDesign',
        label: 'Ant Design',
        color: 'blue',
        href: 'https://ant.design',
      },
      {
        id: 9,
        type: 'materialize',
        label: 'Materialize',
        color: 'red',
        href: 'https://materializecss.com',
      },
      {
        id: 10,
        type: 'bootstrap',
        label: 'Bootstrap',
        color: 'violet',
        href: 'https://getbootstrap.com',
      },
      {
        id: 11,
        type: 'semanticUi',
        label: 'Semantic UI',
        color: 'green',
        href: 'https://semantic-ui.com',
      },
      {
        id: 12,
        type: 'foundationForEmails',
        label: 'Foundation for Emails',
        color: 'red',
        href: 'https://get.foundation/emails.html',
      },
    ],
  },
  {
    id: 4,
    title: 'Build',
    technologies: [],
  },
  {
    id: 5,
    title: 'Tools',
    technologies: [],
  },
  {
    id: 6,
    title: 'Back-End',
    technologies: [
      {
        id: 1,
        type: 'node',
        label: 'Node.js',
        color: 'grass',
        href: 'https://nodejs.org',
      },
      {
        id: 2,
        type: 'php',
        label: 'PHP',
        color: 'violet',
        href: 'https://www.php.net/',
      },
      {
        id: 3,
        type: 'mysql',
        label: 'MySQL',
        color: 'blue',
        href: 'https://www.mysql.com/',
      },
      {
        id: 4,
        type: 'laravel',
        label: 'Laravel',
        color: 'red',
        href: 'https://laravel.com/',
      },
    ],
  },
]

const renderTechnologies = (technologies: ITechnology[]): JSX.Element[] =>
  technologies.map(
    (technology: ITechnology): JSX.Element => (
      <Grid key={technology.id} item component="li" xs={6} sm={3} md={4} lg={3}>
        <Technology {...technology} />
      </Grid>
    )
  )

export default function Technologies(): JSX.Element {
  return (
    <section className="Technologies Section Section_backgroundColor_blue">
      <h2 className="VisuallyHidden">Технологии</h2>
      <ul>
        {groups.map(
          ({id, title, expanded, technologies}: IGroup): JSX.Element => (
            <ExpansionPanel key={id} defaultExpanded component="li" elevation={0}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <h3>{title}</h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container component="ul">
                  {renderTechnologies(technologies)}
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        )}
      </ul>
      <Pagination prevTo={Route.ABOUT} nextTo={Route.EXPERIENCE} />
    </section>
  )
}
