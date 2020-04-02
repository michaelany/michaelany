import React from 'react'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import {TransitionProps} from '@material-ui/core/transitions/transition'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import Pagination from '../_common/Pagination'
import Technology from './Technology'
import {Path} from '../../utils/enums'
import {ITechnology} from '../../utils/types'

interface IGroup {
  id: number
  title: string
  technologies: ITechnology[]
}

const groups: IGroup[] = [
  {
    id: 1,
    title: 'Логика',
    technologies: [
      {
        id: 1,
        type: 'js',
        label: 'JavaScript',
        color: 'yellow',
        href:
          'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
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
        disabled: true,
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
        disabled: true,
        type: 'svelte',
        label: 'Svelte',
        color: 'red',
        href: 'https://svelte.dev',
      },
      {
        id: 9,
        disabled: true,
        type: 'apollo',
        label: 'Apollo Client',
        color: 'blue',
        href: 'https://www.apollographql.com/docs/react',
      },
    ],
  },
  {
    id: 2,
    title: 'Разметка',
    technologies: [
      {
        id: 1,
        type: 'html',
        label: 'HTML',
        color: 'red',
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        id: 2,
        type: 'svg',
        label: 'SVG',
        color: 'yellow',
        href: 'https://www.w3.org/Graphics/SVG',
      },
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
    title: 'Стили',
    technologies: [
      {
        id: 1,
        type: 'css',
        label: 'CSS',
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
        type: 'mui',
        label: 'Material-UI',
        color: 'blue',
        href: 'https://material-ui.com',
      },
      {
        id: 5,
        disabled: true,
        type: 'cssmodules',
        label: 'CSS Modules',
        color: 'default',
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        id: 6,
        disabled: true,
        type: 'styled',
        label: 'styled-components',
        color: 'yellow',
        href: 'https://styled-components.com',
      },
      {
        id: 7,
        disabled: true,
        type: 'reactstrap',
        label: 'reactstrap',
        color: 'default',
        href: 'https://reactstrap.github.io/',
      },
      {
        id: 8,
        disabled: true,
        type: 'ant',
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
        type: 'semantic',
        label: 'Semantic UI',
        color: 'green',
        href: 'https://semantic-ui.com',
      },
      {
        id: 12,
        type: 'emails',
        label: 'Foundation for Emails',
        color: 'red',
        href: 'https://get.foundation/emails.html',
      },
    ],
  },
  {
    id: 4,
    title: 'Сборка',
    technologies: [
      {
        id: 1,
        type: 'npm',
        label: 'NPM',
        color: 'red',
        href: 'https://www.npmjs.com',
      },
      {
        id: 2,
        type: 'yarn',
        label: 'Yarn',
        color: 'blue',
        href: 'https://yarnpkg.com',
      },
      {
        id: 3,
        type: 'webpack',
        label: 'webpack',
        color: 'blue',
        href: 'https://webpack.js.org',
      },
      {
        id: 4,
        type: 'gulp',
        label: 'Gulp',
        color: 'red',
        href: 'https://gulpjs.com',
      },
      {
        id: 5,
        disabled: true,
        type: 'parcel',
        label: 'Parcel',
        color: 'yellow',
        href: 'https://parceljs.org',
      },
      {
        id: 6,
        type: 'cra',
        label: 'Create React App',
        color: 'green',
        href: 'https://create-react-app.dev',
      },
      {
        id: 7,
        disabled: true,
        type: 'gatsby',
        label: 'Gatsby',
        color: 'violet',
        href: 'https://www.gatsbyjs.org',
      },
      {
        id: 8,
        disabled: true,
        type: 'next',
        label: 'Next.js',
        color: 'default',
        href: 'https://nextjs.org',
      },
      {
        id: 9,
        disabled: true,
        type: 'nuxt',
        label: 'Nuxt.js',
        color: 'grass',
        href: 'https://ru.nuxtjs.org',
      },
    ],
  },
  {
    id: 5,
    title: 'Утилиты',
    technologies: [
      {
        id: 1,
        type: 'babel',
        label: 'Babel',
        color: 'yellow',
        href: 'https://babeljs.io',
      },
      {
        id: 2,
        type: 'prettier',
        label: 'Prettier',
        color: 'default',
        href: 'https://prettier.io',
      },
      {
        id: 3,
        type: 'eslint',
        label: 'ESLint',
        color: 'violet',
        href: 'https://eslint.org',
      },
      {
        id: 4,
        disabled: true,
        type: 'storybook',
        label: 'Storybook',
        color: 'red',
        href: 'https://storybook.js.org',
      },
      {
        id: 5,
        disabled: true,
        type: 'bit',
        label: 'Bit',
        color: 'violet',
        href: 'https://bit.dev',
      },
      {
        id: 6,
        disabled: true,
        type: 'jest',
        label: 'Jest',
        color: 'red',
        href: 'https://jestjs.io',
      },
    ],
  },
  {
    id: 6,
    title: 'Инструменты',
    technologies: [
      {
        id: 1,
        type: 'vscode',
        label: 'Visual Studio Code',
        color: 'blue',
        href: 'https://code.visualstudio.com',
      },
      {
        id: 2,
        type: 'iterm',
        label: 'iTerm2',
        color: 'grass',
        href: 'https://iterm2.com',
      },
      {
        id: 3,
        type: 'git',
        label: 'Git',
        color: 'red',
        href: 'https://git-scm.com',
      },
      {
        id: 4,
        type: 'devtools',
        label: 'Chrome DevTools',
        color: 'default',
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        id: 5,
        type: 'zeplin',
        label: 'Zeplin',
        color: 'yellow',
        href: 'https://zeplin.io',
      },
      {
        id: 6,
        type: 'sketch',
        label: 'Sketch',
        color: 'yellow',
        href: 'https://www.sketch.com',
      },
      {
        id: 7,
        disabled: true,
        type: 'figma',
        label: 'Figma',
        color: 'red',
        href: 'https://www.figma.com/',
      },
      {
        id: 8,
        type: 'photoshop',
        label: 'Photoshop',
        color: 'blue',
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        id: 9,
        type: 'optim',
        label: 'ImageOptim',
        color: 'default',
        href: 'https://imageoptim.com',
      },
      {
        id: 10,
        type: 'mac',
        label: 'macOS Catalina',
        color: 'default',
        href: 'https://www.apple.com/macos/catalina',
      },
    ],
  },
  {
    id: 7,
    title: 'Бэкенд',
    technologies: [
      {
        id: 1,
        disabled: true,
        type: 'node',
        label: 'Node.js',
        color: 'grass',
        href: 'https://nodejs.org',
      },
      {
        id: 2,
        disabled: true,
        type: 'mongo',
        label: 'MongoDB',
        color: 'grass',
        href: 'https://www.mongodb.com',
      },
      {
        id: 3,
        disabled: true,
        type: 'mysql',
        label: 'MySQL',
        color: 'blue',
        href: 'https://www.mysql.com',
      },
      {
        id: 4,
        type: 'php',
        label: 'PHP',
        color: 'violet',
        href: 'https://www.php.net',
      },
      {
        id: 5,
        type: 'laravel',
        label: 'Laravel',
        color: 'red',
        href: 'https://laravel.com',
      },
    ],
  },
]

const transitionProps: TransitionProps = {unmountOnExit: true}

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
    <section className="Technologies Section Section_type_pagination Section_color_blue">
      <h2 className="VisuallyHidden">Технологии</h2>
      <ul>
        {groups.map(
          ({id, title, technologies}: IGroup, index: number): JSX.Element => (
            <ExpansionPanel
              key={id}
              component="li"
              defaultExpanded={index === 0}
              elevation={0}
              TransitionProps={transitionProps}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <h3 className="Subtitle">{title}</h3>
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
      <Pagination prevTo={Path.ABOUT} nextTo={Path.EXPERIENCE} />
    </section>
  )
}
