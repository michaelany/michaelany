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
import {PATHS, BLANK_LINK_PROPS, TECHNOLOGY_TITLES} from '../../utils/data'
import {ITechnology} from '../../utils/types'

interface IGroup {
  title: string
  technologies: ITechnology[]
}

const groups: IGroup[] = [
  {
    title: 'Логика',
    technologies: [
      {
        type: 'js',
        label: TECHNOLOGY_TITLES.JS,
        color: 'yellow',
        href:
          'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        type: 'ts',
        label: TECHNOLOGY_TITLES.TS,
        color: 'blue',
        href: 'https://www.typescriptlang.org',
      },
      {
        type: 'react',
        label: TECHNOLOGY_TITLES.REACT,
        color: 'blue',
        href: 'https://reactjs.org',
      },
      {
        type: 'redux',
        label: TECHNOLOGY_TITLES.REDUX,
        color: 'violet',
        href: 'https://redux.js.org',
      },
      {
        type: 'mobx',
        label: TECHNOLOGY_TITLES.MOBX,
        color: 'red',
        href: 'https://mobx.js.org',
      },
      {
        disabled: true,
        type: 'preact',
        label: TECHNOLOGY_TITLES.PREACT,
        color: 'violet',
        href: 'https://preactjs.com',
      },
      {
        type: 'vue',
        label: TECHNOLOGY_TITLES.VUE,
        color: 'grass',
        href: 'https://vuejs.org',
      },
      {
        disabled: true,
        type: 'svelte',
        label: TECHNOLOGY_TITLES.SVELTE,
        color: 'red',
        href: 'https://svelte.dev',
      },
      {
        disabled: true,
        type: 'apollo',
        label: TECHNOLOGY_TITLES.APOLLO,
        color: 'blue',
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        type: 'jquery',
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
        type: 'html',
        label: TECHNOLOGY_TITLES.HTML,
        color: 'red',
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        type: 'svg',
        label: TECHNOLOGY_TITLES.SVG,
        color: 'yellow',
        href: 'https://www.w3.org/Graphics/SVG',
      },
      {
        type: 'react',
        label: TECHNOLOGY_TITLES.JSX,
        color: 'blue',
        href: 'https://reactjs.org/docs/introducing-jsx.html',
      },
      {
        type: 'pug',
        label: TECHNOLOGY_TITLES.PUG,
        color: 'yellow',
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        type: 'handlebars',
        label: TECHNOLOGY_TITLES.HANDLEBARS,
        color: 'default',
        href: 'https://handlebarsjs.com',
      },
      {
        type: 'markdown',
        label: TECHNOLOGY_TITLES.MARKDOWN,
        color: 'default',
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        type: 'laravel',
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
        type: 'css',
        label: TECHNOLOGY_TITLES.CSS,
        color: 'blue',
        href: 'https://www.w3.org/style/css',
      },
      {
        type: 'bem',
        label: TECHNOLOGY_TITLES.BEM,
        color: 'default',
        href: 'https://bem.info',
      },
      {
        type: 'sass',
        label: TECHNOLOGY_TITLES.SASS,
        color: 'red',
        href: 'https://sass-lang.com',
      },
      {
        type: 'mui',
        label: TECHNOLOGY_TITLES.MUI,
        color: 'blue',
        href: 'https://material-ui.com',
      },
      {
        disabled: true,
        type: 'modules',
        label: TECHNOLOGY_TITLES.MODULES,
        color: 'default',
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        disabled: true,
        type: 'styled',
        label: TECHNOLOGY_TITLES.STYLED,
        color: 'yellow',
        href: 'https://styled-components.com',
      },
      {
        disabled: true,
        type: 'reactstrap',
        label: TECHNOLOGY_TITLES.REACTSTRAP,
        color: 'default',
        href: 'https://reactstrap.github.io/',
      },
      {
        disabled: true,
        type: 'ant',
        label: TECHNOLOGY_TITLES.ANT,
        color: 'blue',
        href: 'https://ant.design',
      },
      {
        type: 'materialize',
        label: TECHNOLOGY_TITLES.MATERIALIZE,
        color: 'red',
        href: 'https://materializecss.com',
      },
      {
        type: 'bootstrap',
        label: TECHNOLOGY_TITLES.BOOTSTRAP,
        color: 'violet',
        href: 'https://getbootstrap.com',
      },
      {
        type: 'semantic',
        label: TECHNOLOGY_TITLES.SEMANTIC,
        color: 'green',
        href: 'https://semantic-ui.com',
      },
      {
        type: 'emails',
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
        type: 'npm',
        label: TECHNOLOGY_TITLES.NPM,
        color: 'red',
        href: 'https://www.npmjs.com',
      },
      {
        type: 'yarn',
        label: TECHNOLOGY_TITLES.YARN,
        color: 'blue',
        href: 'https://yarnpkg.com',
      },
      {
        type: 'webpack',
        label: TECHNOLOGY_TITLES.WEBPACK,
        color: 'blue',
        href: 'https://webpack.js.org',
      },
      {
        type: 'gulp',
        label: TECHNOLOGY_TITLES.GULP,
        color: 'red',
        href: 'https://gulpjs.com',
      },
      {
        disabled: true,
        type: 'parcel',
        label: TECHNOLOGY_TITLES.PARCEL,
        color: 'yellow',
        href: 'https://parceljs.org',
      },
      {
        type: 'cra',
        label: TECHNOLOGY_TITLES.CRA,
        color: 'green',
        href: 'https://create-react-app.dev',
      },
      {
        disabled: true,
        type: 'gatsby',
        label: TECHNOLOGY_TITLES.GATSBY,
        color: 'violet',
        href: 'https://www.gatsbyjs.org',
      },
      {
        disabled: true,
        type: 'next',
        label: TECHNOLOGY_TITLES.NEXT,
        color: 'default',
        href: 'https://nextjs.org',
      },
      {
        disabled: true,
        type: 'nuxt',
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
        type: 'babel',
        label: TECHNOLOGY_TITLES.BABEL,
        color: 'yellow',
        href: 'https://babeljs.io',
      },
      {
        type: 'prettier',
        label: TECHNOLOGY_TITLES.PRETTIER,
        color: 'default',
        href: 'https://prettier.io',
      },
      {
        type: 'eslint',
        label: TECHNOLOGY_TITLES.ESLINT,
        color: 'violet',
        href: 'https://eslint.org',
      },
      {
        disabled: true,
        type: 'storybook',
        label: TECHNOLOGY_TITLES.STORYBOOK,
        color: 'red',
        href: 'https://storybook.js.org',
      },
      {
        disabled: true,
        type: 'bit',
        label: TECHNOLOGY_TITLES.BIT,
        color: 'violet',
        href: 'https://bit.dev',
      },
      {
        disabled: true,
        type: 'jest',
        label: TECHNOLOGY_TITLES.JEST,
        color: 'red',
        href: 'https://jestjs.io',
      },
    ],
  },
  {
    title: 'Инструменты',
    technologies: [
      {
        type: 'vscode',
        label: TECHNOLOGY_TITLES.VSCODE,
        color: 'blue',
        href: 'https://code.visualstudio.com',
      },
      {
        type: 'iterm',
        label: TECHNOLOGY_TITLES.ITERM,
        color: 'grass',
        href: 'https://iterm2.com',
      },
      {
        type: 'git',
        label: TECHNOLOGY_TITLES.GIT,
        color: 'red',
        href: 'https://git-scm.com',
      },
      {
        type: 'devtools',
        label: TECHNOLOGY_TITLES.DEVTOOLS,
        color: 'default',
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        type: 'zeplin',
        label: TECHNOLOGY_TITLES.ZEPLIN,
        color: 'yellow',
        href: 'https://zeplin.io',
      },
      {
        type: 'sketch',
        label: TECHNOLOGY_TITLES.SKETCH,
        color: 'yellow',
        href: 'https://www.sketch.com',
      },
      {
        disabled: true,
        type: 'figma',
        label: TECHNOLOGY_TITLES.FIGMA,
        color: 'red',
        href: 'https://www.figma.com/',
      },
      {
        type: 'photoshop',
        label: TECHNOLOGY_TITLES.PHOTOSHOP,
        color: 'blue',
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        type: 'optim',
        label: TECHNOLOGY_TITLES.OPTIM,
        color: 'default',
        href: 'https://imageoptim.com',
      },
      {
        type: 'mac',
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
        type: 'node',
        label: TECHNOLOGY_TITLES.NODE,
        color: 'grass',
        href: 'https://nodejs.org',
      },
      {
        disabled: true,
        type: 'mongo',
        label: TECHNOLOGY_TITLES.MONGO,
        color: 'grass',
        href: 'https://www.mongodb.com',
      },
      {
        disabled: true,
        type: 'mysql',
        label: TECHNOLOGY_TITLES.MYSQL,
        color: 'blue',
        href: 'https://www.mysql.com',
      },
      {
        type: 'php',
        label: TECHNOLOGY_TITLES.PHP,
        color: 'violet',
        href: 'https://www.php.net',
      },
      {
        type: 'laravel',
        label: TECHNOLOGY_TITLES.LARAVEL,
        color: 'red',
        href: 'https://laravel.com',
      },
    ],
  },
]

const renderTechnologies = (technologies: ITechnology[]): JSX.Element[] =>
  technologies.map(
    (
      {label, type, color, href, disabled}: ITechnology,
      index: number
    ): JSX.Element => (
      <Grid key={index} item component="li" xs={6} sm={3} md={4} lg={3}>
        <Tooltip title={label}>
          <ButtonBase
            {...BLANK_LINK_PROPS}
            focusRipple
            component="a"
            className={`Technologies-Item ColorInteractive ColorInteractive_color_${color}`}
            href={href}
            aria-label={label}
            disabled={disabled}
          >
            <div
              className={`Technologies-ItemContent Technologies-ItemContent_type_${type}`}
            />
          </ButtonBase>
        </Tooltip>
      </Grid>
    )
  )

export default function Technologies(): JSX.Element {
  return (
    <section className="Technologies Section Section_type_pagination Section_color_blue">
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
