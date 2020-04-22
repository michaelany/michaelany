import React from 'react'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ButtonBase from '@material-ui/core/ButtonBase'
import Tooltip from '@material-ui/core/Tooltip'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Technologies.scss'
import Pagination from '../_common/Pagination'

import {PATHS, BLANK_LINK_PROPS} from '../../utils/constants'
import {Technology} from '../../utils/types'
import {TECHNOLOGY_TITLES} from '../../data/common'

interface IGroup {
  title: string
  technologies: Technology[]
}

const groups: IGroup[] = [
  {
    title: 'Логика',
    technologies: [
      {
        name: 'js',
        label: TECHNOLOGY_TITLES.JS,
        color: 'yellow',
        href:
          'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLES.TS,
        color: 'blue',
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLES.REACT,
        color: 'blue',
        href: 'https://reactjs.org',
      },
      {
        name: 'redux',
        label: TECHNOLOGY_TITLES.REDUX,
        color: 'violet',
        href: 'https://redux.js.org',
      },
      {
        name: 'mobx',
        label: TECHNOLOGY_TITLES.MOBX,
        color: 'red',
        href: 'https://mobx.js.org',
      },
      {
        disabled: true,
        name: 'preact',
        label: TECHNOLOGY_TITLES.PREACT,
        color: 'violet',
        href: 'https://preactjs.com',
      },
      {
        name: 'vue',
        label: TECHNOLOGY_TITLES.VUE,
        color: 'grass',
        href: 'https://vuejs.org',
      },
      {
        disabled: true,
        name: 'svelte',
        label: TECHNOLOGY_TITLES.SVELTE,
        color: 'red',
        href: 'https://svelte.dev',
      },
      {
        disabled: true,
        name: 'apollo',
        label: TECHNOLOGY_TITLES.APOLLO,
        color: 'blue',
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        name: 'jquery',
        label: TECHNOLOGY_TITLES.JQUERY,
        color: 'blue',
        href: 'https://jquery.com',
      },
    ],
  },
  {
    title: 'Разметка',
    technologies: [
      {
        name: 'html',
        label: TECHNOLOGY_TITLES.HTML,
        color: 'red',
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        name: 'svg',
        label: TECHNOLOGY_TITLES.SVG,
        color: 'yellow',
        href: 'https://www.w3.org/Graphics/SVG',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLES.JSX,
        color: 'blue',
        href: 'https://reactjs.org/docs/introducing-jsx.html',
      },
      {
        name: 'pug',
        label: TECHNOLOGY_TITLES.PUG,
        color: 'yellow',
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        name: 'handlebars',
        label: TECHNOLOGY_TITLES.HANDLEBARS,
        color: 'default',
        href: 'https://handlebarsjs.com',
      },
      {
        name: 'markdown',
        label: TECHNOLOGY_TITLES.MARKDOWN,
        color: 'default',
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLES.BLADE,
        color: 'red',
        href: 'https://laravel.com/docs/5.6/blade#introduction',
      },
    ],
  },
  {
    title: 'Стили',
    technologies: [
      {
        name: 'css',
        label: TECHNOLOGY_TITLES.CSS,
        color: 'blue',
        href: 'https://www.w3.org/style/css',
      },
      {
        name: 'bem',
        label: TECHNOLOGY_TITLES.BEM,
        color: 'default',
        href: 'https://bem.info',
      },
      {
        name: 'sass',
        label: TECHNOLOGY_TITLES.SASS,
        color: 'red',
        href: 'https://sass-lang.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLES.MUI,
        color: 'blue',
        href: 'https://material-ui.com',
      },
      {
        disabled: true,
        name: 'modules',
        label: TECHNOLOGY_TITLES.MODULES,
        color: 'default',
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        disabled: true,
        name: 'styled',
        label: TECHNOLOGY_TITLES.STYLED,
        color: 'yellow',
        href: 'https://styled-components.com',
      },
      {
        disabled: true,
        name: 'reactstrap',
        label: TECHNOLOGY_TITLES.REACTSTRAP,
        color: 'default',
        href: 'https://reactstrap.github.io/',
      },
      {
        disabled: true,
        name: 'ant',
        label: TECHNOLOGY_TITLES.ANT,
        color: 'blue',
        href: 'https://ant.design',
      },
      {
        name: 'materialize',
        label: TECHNOLOGY_TITLES.MATERIALIZE,
        color: 'red',
        href: 'https://materializecss.com',
      },
      {
        name: 'bootstrap',
        label: TECHNOLOGY_TITLES.BOOTSTRAP,
        color: 'violet',
        href: 'https://getbootstrap.com',
      },
      {
        name: 'semantic',
        label: TECHNOLOGY_TITLES.SEMANTIC,
        color: 'green',
        href: 'https://semantic-ui.com',
      },
      {
        name: 'emails',
        label: TECHNOLOGY_TITLES.EMAILS,
        color: 'red',
        href: 'https://get.foundation/emails.html',
      },
    ],
  },
  {
    title: 'Сборка',
    technologies: [
      {
        name: 'npm',
        label: TECHNOLOGY_TITLES.NPM,
        color: 'red',
        href: 'https://www.npmjs.com',
      },
      {
        name: 'yarn',
        label: TECHNOLOGY_TITLES.YARN,
        color: 'blue',
        href: 'https://yarnpkg.com',
      },
      {
        name: 'webpack',
        label: TECHNOLOGY_TITLES.WEBPACK,
        color: 'blue',
        href: 'https://webpack.js.org',
      },
      {
        name: 'gulp',
        label: TECHNOLOGY_TITLES.GULP,
        color: 'red',
        href: 'https://gulpjs.com',
      },
      {
        disabled: true,
        name: 'parcel',
        label: TECHNOLOGY_TITLES.PARCEL,
        color: 'yellow',
        href: 'https://parceljs.org',
      },
      {
        name: 'cra',
        label: TECHNOLOGY_TITLES.CRA,
        color: 'green',
        href: 'https://create-react-app.dev',
      },
      {
        disabled: true,
        name: 'gatsby',
        label: TECHNOLOGY_TITLES.GATSBY,
        color: 'violet',
        href: 'https://www.gatsbyjs.org',
      },
      {
        disabled: true,
        name: 'next',
        label: TECHNOLOGY_TITLES.NEXT,
        color: 'default',
        href: 'https://nextjs.org',
      },
      {
        disabled: true,
        name: 'nuxt',
        label: TECHNOLOGY_TITLES.NUXT,
        color: 'grass',
        href: 'https://ru.nuxtjs.org',
      },
    ],
  },
  {
    title: 'Утилиты',
    technologies: [
      {
        name: 'git',
        label: TECHNOLOGY_TITLES.GIT,
        color: 'red',
        href: 'https://git-scm.com',
      },
      {
        name: 'babel',
        label: TECHNOLOGY_TITLES.BABEL,
        color: 'yellow',
        href: 'https://babeljs.io',
      },
      {
        name: 'prettier',
        label: TECHNOLOGY_TITLES.PRETTIER,
        color: 'default',
        href: 'https://prettier.io',
      },
      {
        name: 'eslint',
        label: TECHNOLOGY_TITLES.ESLINT,
        color: 'violet',
        href: 'https://eslint.org',
      },
      {
        disabled: true,
        name: 'storybook',
        label: TECHNOLOGY_TITLES.STORYBOOK,
        color: 'red',
        href: 'https://storybook.js.org',
      },
      {
        disabled: true,
        name: 'bit',
        label: TECHNOLOGY_TITLES.BIT,
        color: 'violet',
        href: 'https://bit.dev',
      },
      {
        disabled: true,
        name: 'jest',
        label: TECHNOLOGY_TITLES.JEST,
        color: 'red',
        href: 'https://jestjs.io',
      },
      {
        disabled: true,
        name: 'mocha',
        label: TECHNOLOGY_TITLES.MOCHA,
        color: 'yellow',
        href: 'https://mochajs.org',
      },
    ],
  },
  {
    title: 'Инструменты',
    technologies: [
      {
        name: 'vscode',
        label: TECHNOLOGY_TITLES.VSCODE,
        color: 'blue',
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'iterm',
        label: TECHNOLOGY_TITLES.ITERM,
        color: 'grass',
        href: 'https://iterm2.com',
      },
      {
        name: 'devtools',
        label: TECHNOLOGY_TITLES.DEVTOOLS,
        color: 'default',
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        name: 'zeplin',
        label: TECHNOLOGY_TITLES.ZEPLIN,
        color: 'yellow',
        href: 'https://zeplin.io',
      },
      {
        name: 'sketch',
        label: TECHNOLOGY_TITLES.SKETCH,
        color: 'yellow',
        href: 'https://www.sketch.com',
      },
      {
        disabled: true,
        name: 'figma',
        label: TECHNOLOGY_TITLES.FIGMA,
        color: 'red',
        href: 'https://www.figma.com/',
      },
      {
        name: 'photoshop',
        label: TECHNOLOGY_TITLES.PHOTOSHOP,
        color: 'blue',
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        name: 'optim',
        label: TECHNOLOGY_TITLES.OPTIM,
        color: 'default',
        href: 'https://imageoptim.com',
      },
      {
        name: 'mac',
        label: TECHNOLOGY_TITLES.MAC,
        color: 'default',
        href: 'https://www.apple.com/macos/catalina',
      },
    ],
  },
  {
    title: 'Бэкенд',
    technologies: [
      {
        disabled: true,
        name: 'node',
        label: TECHNOLOGY_TITLES.NODE,
        color: 'grass',
        href: 'https://nodejs.org',
      },
      {
        disabled: true,
        name: 'mongo',
        label: TECHNOLOGY_TITLES.MONGO,
        color: 'grass',
        href: 'https://www.mongodb.com',
      },
      {
        disabled: true,
        name: 'mysql',
        label: TECHNOLOGY_TITLES.MYSQL,
        color: 'blue',
        href: 'https://www.mysql.com',
      },
      {
        name: 'php',
        label: TECHNOLOGY_TITLES.PHP,
        color: 'violet',
        href: 'https://www.php.net',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLES.LARAVEL,
        color: 'red',
        href: 'https://laravel.com',
      },
    ],
  },
]

const renderTechnologies = (technologies: Technology[]): JSX.Element[] =>
  technologies.map(
    (
      {label, name, color, href, disabled}: Technology,
      index: number
    ): JSX.Element => (
      <Grid key={index} item component="li" xs={6} sm={4} md={3} lg={4} xl={3}>
        <Tooltip title={label}>
          <ButtonBase
            {...BLANK_LINK_PROPS}
            focusRipple
            component="a"
            className={`Technologies-Item ColorInteract ColorInteract_color_${color}`}
            href={href}
            aria-label={label}
            disabled={disabled}
          >
            <div
              className={`Technologies-ItemContent Technologies-ItemContent_name_${name}`}
            />
          </ButtonBase>
        </Tooltip>
      </Grid>
    )
  )

export default function Technologies(): JSX.Element {
  return (
    <section className="Technologies Section Section_pagination Section_colorful">
      <h2 className="VisuallyHidden">Технологии</h2>
      <ul>
        {groups.map(
          ({title, technologies}: IGroup, index: number): JSX.Element => (
            <ExpansionPanel
              key={index}
              component="li"
              defaultExpanded={index === 0}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <h3 className="Technologies-Title">{title}</h3>
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
      <Pagination prevTo={PATHS.ABOUT} nextTo={PATHS.EXPERIENCE} />
    </section>
  )
}
