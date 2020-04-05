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
import {BLANK_LINK_PROPS} from '../../utils/data'
import {Path, Technology} from '../../utils/enums'
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
        label: Technology.JS,
        color: 'yellow',
        href:
          'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        type: 'ts',
        label: Technology.TS,
        color: 'blue',
        href: 'https://www.typescriptlang.org',
      },
      {
        type: 'react',
        label: Technology.REACT,
        color: 'blue',
        href: 'https://reactjs.org',
      },
      {
        type: 'redux',
        label: Technology.REDUX,
        color: 'violet',
        href: 'https://redux.js.org',
      },
      {
        type: 'mobx',
        label: Technology.MOBX,
        color: 'red',
        href: 'https://mobx.js.org',
      },
      {
        disabled: true,
        type: 'preact',
        label: Technology.PREACT,
        color: 'violet',
        href: 'https://preactjs.com',
      },
      {
        type: 'vue',
        label: Technology.VUE,
        color: 'grass',
        href: 'https://vuejs.org',
      },
      {
        disabled: true,
        type: 'svelte',
        label: Technology.SVELTE,
        color: 'red',
        href: 'https://svelte.dev',
      },
      {
        disabled: true,
        type: 'apollo',
        label: Technology.APOLLO,
        color: 'blue',
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        type: 'jquery',
        label: Technology.JQUERY,
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
        label: Technology.HTML,
        color: 'red',
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        type: 'svg',
        label: Technology.SVG,
        color: 'yellow',
        href: 'https://www.w3.org/Graphics/SVG',
      },
      {
        type: 'react',
        label: Technology.JSX,
        color: 'blue',
        href: 'https://reactjs.org/docs/introducing-jsx.html',
      },
      {
        type: 'pug',
        label: Technology.PUG,
        color: 'yellow',
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        type: 'handlebars',
        label: Technology.HANDLEBARS,
        color: 'default',
        href: 'https://handlebarsjs.com',
      },
      {
        type: 'markdown',
        label: Technology.MARKDOWN,
        color: 'default',
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        type: 'laravel',
        label: Technology.BLADE,
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
        label: Technology.CSS,
        color: 'blue',
        href: 'https://www.w3.org/style/css',
      },
      {
        type: 'bem',
        label: Technology.BEM,
        color: 'default',
        href: 'https://bem.info',
      },
      {
        type: 'sass',
        label: Technology.SASS,
        color: 'red',
        href: 'https://sass-lang.com',
      },
      {
        type: 'mui',
        label: Technology.MUI,
        color: 'blue',
        href: 'https://material-ui.com',
      },
      {
        disabled: true,
        type: 'modules',
        label: Technology.MODULES,
        color: 'default',
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        disabled: true,
        type: 'styled',
        label: Technology.STYLED,
        color: 'yellow',
        href: 'https://styled-components.com',
      },
      {
        disabled: true,
        type: 'reactstrap',
        label: Technology.REACTSTRAP,
        color: 'default',
        href: 'https://reactstrap.github.io/',
      },
      {
        disabled: true,
        type: 'ant',
        label: Technology.ANT,
        color: 'blue',
        href: 'https://ant.design',
      },
      {
        type: 'materialize',
        label: Technology.MATERIALIZE,
        color: 'red',
        href: 'https://materializecss.com',
      },
      {
        type: 'bootstrap',
        label: Technology.BOOTSTRAP,
        color: 'violet',
        href: 'https://getbootstrap.com',
      },
      {
        type: 'semantic',
        label: Technology.SEMANTIC,
        color: 'green',
        href: 'https://semantic-ui.com',
      },
      {
        type: 'emails',
        label: Technology.EMAILS,
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
        label: Technology.NPM,
        color: 'red',
        href: 'https://www.npmjs.com',
      },
      {
        type: 'yarn',
        label: Technology.YARN,
        color: 'blue',
        href: 'https://yarnpkg.com',
      },
      {
        type: 'webpack',
        label: Technology.WEBPACK,
        color: 'blue',
        href: 'https://webpack.js.org',
      },
      {
        type: 'gulp',
        label: Technology.GULP,
        color: 'red',
        href: 'https://gulpjs.com',
      },
      {
        disabled: true,
        type: 'parcel',
        label: Technology.PARCEL,
        color: 'yellow',
        href: 'https://parceljs.org',
      },
      {
        type: 'cra',
        label: Technology.CRA,
        color: 'green',
        href: 'https://create-react-app.dev',
      },
      {
        disabled: true,
        type: 'gatsby',
        label: Technology.GATSBY,
        color: 'violet',
        href: 'https://www.gatsbyjs.org',
      },
      {
        disabled: true,
        type: 'next',
        label: Technology.NEXT,
        color: 'default',
        href: 'https://nextjs.org',
      },
      {
        disabled: true,
        type: 'nuxt',
        label: Technology.NUXT,
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
        label: Technology.BABEL,
        color: 'yellow',
        href: 'https://babeljs.io',
      },
      {
        type: 'prettier',
        label: Technology.PRETTIER,
        color: 'default',
        href: 'https://prettier.io',
      },
      {
        type: 'eslint',
        label: Technology.ESLINT,
        color: 'violet',
        href: 'https://eslint.org',
      },
      {
        disabled: true,
        type: 'storybook',
        label: Technology.STORYBOOK,
        color: 'red',
        href: 'https://storybook.js.org',
      },
      {
        disabled: true,
        type: 'bit',
        label: Technology.BIT,
        color: 'violet',
        href: 'https://bit.dev',
      },
      {
        disabled: true,
        type: 'jest',
        label: Technology.JEST,
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
        label: Technology.VSCODE,
        color: 'blue',
        href: 'https://code.visualstudio.com',
      },
      {
        type: 'iterm',
        label: Technology.ITERM,
        color: 'grass',
        href: 'https://iterm2.com',
      },
      {
        type: 'git',
        label: Technology.GIT,
        color: 'red',
        href: 'https://git-scm.com',
      },
      {
        type: 'devtools',
        label: Technology.DEVTOOLS,
        color: 'default',
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        type: 'zeplin',
        label: Technology.ZEPLIN,
        color: 'yellow',
        href: 'https://zeplin.io',
      },
      {
        type: 'sketch',
        label: Technology.SKETCH,
        color: 'yellow',
        href: 'https://www.sketch.com',
      },
      {
        disabled: true,
        type: 'figma',
        label: Technology.FIGMA,
        color: 'red',
        href: 'https://www.figma.com/',
      },
      {
        type: 'photoshop',
        label: Technology.PHOTOSHOP,
        color: 'blue',
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        type: 'optim',
        label: Technology.OPTIM,
        color: 'default',
        href: 'https://imageoptim.com',
      },
      {
        type: 'mac',
        label: Technology.MAC,
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
        label: Technology.NODE,
        color: 'grass',
        href: 'https://nodejs.org',
      },
      {
        disabled: true,
        type: 'mongo',
        label: Technology.MONGO,
        color: 'grass',
        href: 'https://www.mongodb.com',
      },
      {
        disabled: true,
        type: 'mysql',
        label: Technology.MYSQL,
        color: 'blue',
        href: 'https://www.mysql.com',
      },
      {
        type: 'php',
        label: Technology.PHP,
        color: 'violet',
        href: 'https://www.php.net',
      },
      {
        type: 'laravel',
        label: Technology.LARAVEL,
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
            className={`Technologies-Item ColorInteractive ColorInteractive_color_${color}`}
            component="a"
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
