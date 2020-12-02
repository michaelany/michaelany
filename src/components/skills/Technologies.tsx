import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ButtonBase from '@material-ui/core/ButtonBase'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Technologies.scss'
import Animate, {EFFECTS} from '../common/Animate'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Tooltip from '../common/Tooltip'
import {ROUTE, BLANK_LINK_PROPS, COLOR} from '../../utils/constants'
import {Technology} from '../../utils/types'
import {TECHNOLOGY_TITLES} from '../../data/common'
import {BREAKPOINTS, DURATIONS} from '../../styles/theme'

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
        label: TECHNOLOGY_TITLES.js,
        color: COLOR.yellow,
        href:
          'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLES.ts,
        color: COLOR.blue,
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLES.react,
        color: COLOR.blue,
        href: 'https://reactjs.org',
      },
      {
        name: 'redux',
        label: TECHNOLOGY_TITLES.redux,
        color: COLOR.violet,
        href: 'https://redux.js.org',
      },
      {
        name: 'mobx',
        label: TECHNOLOGY_TITLES.mobx,
        color: COLOR.red,
        href: 'https://mobx.js.org',
      },
      {
        name: 'preact',
        label: TECHNOLOGY_TITLES.preact,
        color: COLOR.violet,
        href: 'https://preactjs.com',
      },
      {
        name: 'vue',
        label: TECHNOLOGY_TITLES.vue,
        color: COLOR.grass,
        href: 'https://vuejs.org',
      },
      {
        disabled: true,
        name: 'svelte',
        label: TECHNOLOGY_TITLES.svelte,
        color: COLOR.red,
        href: 'https://svelte.dev',
      },
      {
        disabled: true,
        name: 'apollo',
        label: TECHNOLOGY_TITLES.apollo,
        color: COLOR.blue,
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        name: 'jquery',
        label: TECHNOLOGY_TITLES.jquery,
        color: COLOR.blue,
        href: 'https://jquery.com',
      },
    ],
  },
  {
    title: 'Разметка',
    technologies: [
      {
        name: 'html',
        label: TECHNOLOGY_TITLES.html,
        color: COLOR.red,
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        name: 'svg',
        label: TECHNOLOGY_TITLES.svg,
        color: COLOR.yellow,
        href: 'https://www.w3.org/Graphics/svg',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLES.jsx,
        color: COLOR.blue,
        href: 'https://reactjs.org/docs/introducing-JSX.html',
      },
      {
        name: 'pug',
        label: TECHNOLOGY_TITLES.pug,
        color: COLOR.yellow,
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        name: 'handlebars',
        label: TECHNOLOGY_TITLES.handlebars,
        color: COLOR.default,
        href: 'https://handlebarsjs.com',
      },
      {
        name: 'markdown',
        label: TECHNOLOGY_TITLES.markdown,
        color: COLOR.default,
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLES.blade,
        color: COLOR.red,
        href: 'https://laravel.com/docs/5.6/blade#introduction',
      },
    ],
  },
  {
    title: 'Стили',
    technologies: [
      {
        name: 'css',
        label: TECHNOLOGY_TITLES.css,
        color: COLOR.blue,
        href: 'https://www.w3.org/style/css',
      },
      {
        name: 'bem',
        label: TECHNOLOGY_TITLES.bem,
        color: COLOR.default,
        href: 'https://bem.info',
      },
      {
        name: 'sass',
        label: TECHNOLOGY_TITLES.sass,
        color: COLOR.red,
        href: 'https://sass-lang.com',
      },
      {
        name: 'modules',
        label: TECHNOLOGY_TITLES.modules,
        color: COLOR.default,
        href: 'https://github.com/css-modules/css-modules',
      },

      {
        name: 'styled',
        label: TECHNOLOGY_TITLES.styled,
        color: COLOR.yellow,
        href: 'https://styled-components.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLES.mui,
        color: COLOR.blue,
        href: 'https://material-ui.com',
      },
      {
        name: 'reactstrap',
        label: TECHNOLOGY_TITLES.reactstrap,
        color: COLOR.default,
        href: 'https://reactstrap.github.io/',
      },
      {
        disabled: true,
        name: 'ant',
        label: TECHNOLOGY_TITLES.ant,
        color: COLOR.blue,
        href: 'https://ant.design',
      },
      {
        name: 'materialize',
        label: TECHNOLOGY_TITLES.materialize,
        color: COLOR.red,
        href: 'https://materializecss.com',
      },
      {
        name: 'bootstrap',
        label: TECHNOLOGY_TITLES.bootstrap,
        color: COLOR.violet,
        href: 'https://getbootstrap.com',
      },
      {
        name: 'semantic',
        label: TECHNOLOGY_TITLES.semantic,
        color: COLOR.green,
        href: 'https://semantic-ui.com',
      },
      {
        name: 'emails',
        label: TECHNOLOGY_TITLES.emails,
        color: COLOR.red,
        href: 'https://get.foundation/emails.html',
      },
    ],
  },
  {
    title: 'Утилиты',
    technologies: [
      {
        name: 'git',
        label: TECHNOLOGY_TITLES.git,
        color: COLOR.red,
        href: 'https://git-scm.com',
      },
      {
        name: 'npm',
        label: TECHNOLOGY_TITLES.npm,
        color: COLOR.red,
        href: 'https://www.npmjs.com',
      },
      {
        name: 'yarn',
        label: TECHNOLOGY_TITLES.yarn,
        color: COLOR.blue,
        href: 'https://yarnpkg.com',
      },
      {
        name: 'webpack',
        label: TECHNOLOGY_TITLES.webpack,
        color: COLOR.blue,
        href: 'https://webpack.js.org',
      },
      {
        name: 'gulp',
        label: TECHNOLOGY_TITLES.gulp,
        color: COLOR.red,
        href: 'https://gulpjs.com',
      },
      {
        disabled: true,
        name: 'parcel',
        label: TECHNOLOGY_TITLES.parcel,
        color: COLOR.yellow,
        href: 'https://parceljs.org',
      },
      {
        name: 'babel',
        label: TECHNOLOGY_TITLES.babel,
        color: COLOR.yellow,
        href: 'https://babeljs.io',
      },
      {
        name: 'prettier',
        label: TECHNOLOGY_TITLES.prettier,
        color: COLOR.default,
        href: 'https://prettier.io',
      },
      {
        name: 'eslint',
        label: TECHNOLOGY_TITLES.eslint,
        color: COLOR.violet,
        href: 'https://eslint.org',
      },
      {
        disabled: true,
        name: 'next',
        label: TECHNOLOGY_TITLES.next,
        color: COLOR.default,
        href: 'https://nextjs.org',
      },
      {
        disabled: true,
        name: 'gatsby',
        label: TECHNOLOGY_TITLES.gatsby,
        color: COLOR.violet,
        href: 'https://www.gatsbyjs.org',
      },
      {
        disabled: true,
        name: 'jest',
        label: TECHNOLOGY_TITLES.jest,
        color: COLOR.red,
        href: 'https://jestjs.io',
      },
      {
        disabled: true,
        name: 'nuxt',
        label: TECHNOLOGY_TITLES.nuxt,
        color: COLOR.grass,
        href: 'https://ru.nuxtjs.org',
      },
    ],
  },
  {
    title: 'Инструменты',
    technologies: [
      {
        name: 'vscode',
        label: TECHNOLOGY_TITLES.vscode,
        color: COLOR.blue,
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'iterm',
        label: TECHNOLOGY_TITLES.item,
        color: COLOR.grass,
        href: 'https://iterm2.com',
      },
      {
        name: 'devtools',
        label: TECHNOLOGY_TITLES.devtools,
        color: COLOR.default,
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        name: 'zeplin',
        label: TECHNOLOGY_TITLES.zeplin,
        color: COLOR.yellow,
        href: 'https://zeplin.io',
      },
      {
        name: 'sketch',
        label: TECHNOLOGY_TITLES.sketch,
        color: COLOR.yellow,
        href: 'https://www.sketch.com',
      },
      {
        disabled: true,
        name: 'figma',
        label: TECHNOLOGY_TITLES.figma,
        color: COLOR.red,
        href: 'https://www.figma.com/',
      },
      {
        name: 'photoshop',
        label: TECHNOLOGY_TITLES.photoshop,
        color: COLOR.blue,
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        name: 'optim',
        label: TECHNOLOGY_TITLES.optim,
        color: COLOR.default,
        href: 'https://imageoptim.com',
      },
      {
        name: 'flow',
        label: TECHNOLOGY_TITLES.flow,
        color: COLOR.blue,
        href: 'https://www.getflow.com',
      },
      {
        name: 'parallels',
        label: TECHNOLOGY_TITLES.parallels,
        color: COLOR.default,
        href: 'https://www.parallels.com',
      },
      {
        name: 'mac',
        label: TECHNOLOGY_TITLES.mac,
        color: COLOR.default,
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
        label: TECHNOLOGY_TITLES.node,
        color: COLOR.grass,
        href: 'https://nodejs.org',
      },
      {
        disabled: true,
        name: 'mongo',
        label: TECHNOLOGY_TITLES.mongo,
        color: COLOR.grass,
        href: 'https://www.mongodb.com',
      },
      {
        disabled: true,
        name: 'mysql',
        label: TECHNOLOGY_TITLES.mysql,
        color: COLOR.blue,
        href: 'https://www.mysql.com',
      },
      {
        name: 'php',
        label: TECHNOLOGY_TITLES.php,
        color: COLOR.violet,
        href: 'https://www.php.net',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLES.laravel,
        color: COLOR.red,
        href: 'https://laravel.com',
      },
    ],
  },
]

const renderTechnologies = (technologies: Technology[]): JSX.Element[] =>
  technologies.map(
    ({label, name, color, href, disabled}: Technology, index: number) => (
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
  const md: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.md}px)`)

  return (
    <section className="Technologies Section Section_pagination Section_colorful">
      <h2 className="VisuallyHidden">Технологии</h2>
      <Animate
        el="ul"
        className="Technologies-List"
        effect={md ? EFFECTS.bottomSm : EFFECTS.rightSm}
        duration={md ? undefined : DURATIONS.longer}
      >
        {groups.map(({title, technologies}: IGroup, index: number) => (
          <Accordion key={index} component="li" defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3 className="Technologies-Title">{title}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container component="ul">
                {renderTechnologies(technologies)}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Animate>
      <Pagination prevTo={ROUTE.about} nextTo={ROUTE.experience} />
      <Copyright />
    </section>
  )
}
