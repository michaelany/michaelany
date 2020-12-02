import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ButtonBase from '@material-ui/core/ButtonBase'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Technologies.scss'
import Animate, {EFFECT} from '../common/Animate'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Tooltip from '../common/Tooltip'
import {
  ROUTE,
  BLANK_LINK_PROPS,
  COLOR,
  QUERY_BREAKPOINT,
} from '../../utils/constants'
import {Technology} from '../../utils/types'
import {TECHNOLOGY_TITLE} from '../../data/common'
import {DURATION} from '../../styles/theme'

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
        label: TECHNOLOGY_TITLE.js,
        color: COLOR.yellow,
        href:
          'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLE.ts,
        color: COLOR.blue,
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.react,
        color: COLOR.blue,
        href: 'https://reactjs.org',
      },
      {
        name: 'redux',
        label: TECHNOLOGY_TITLE.redux,
        color: COLOR.violet,
        href: 'https://redux.js.org',
      },
      {
        name: 'mobx',
        label: TECHNOLOGY_TITLE.mobx,
        color: COLOR.red,
        href: 'https://mobx.js.org',
      },
      {
        name: 'preact',
        label: TECHNOLOGY_TITLE.preact,
        color: COLOR.violet,
        href: 'https://preactjs.com',
      },
      {
        name: 'vue',
        label: TECHNOLOGY_TITLE.vue,
        color: COLOR.grass,
        href: 'https://vuejs.org',
      },
      {
        disabled: true,
        name: 'svelte',
        label: TECHNOLOGY_TITLE.svelte,
        color: COLOR.red,
        href: 'https://svelte.dev',
      },
      {
        disabled: true,
        name: 'apollo',
        label: TECHNOLOGY_TITLE.apollo,
        color: COLOR.blue,
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        name: 'jquery',
        label: TECHNOLOGY_TITLE.jquery,
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
        label: TECHNOLOGY_TITLE.html,
        color: COLOR.red,
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        name: 'svg',
        label: TECHNOLOGY_TITLE.svg,
        color: COLOR.yellow,
        href: 'https://www.w3.org/Graphics/svg',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.jsx,
        color: COLOR.blue,
        href: 'https://reactjs.org/docs/introducing-JSX.html',
      },
      {
        name: 'pug',
        label: TECHNOLOGY_TITLE.pug,
        color: COLOR.yellow,
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        name: 'handlebars',
        label: TECHNOLOGY_TITLE.handlebars,
        color: COLOR.default,
        href: 'https://handlebarsjs.com',
      },
      {
        name: 'markdown',
        label: TECHNOLOGY_TITLE.markdown,
        color: COLOR.default,
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLE.blade,
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
        label: TECHNOLOGY_TITLE.css,
        color: COLOR.blue,
        href: 'https://www.w3.org/style/css',
      },
      {
        name: 'bem',
        label: TECHNOLOGY_TITLE.bem,
        color: COLOR.default,
        href: 'https://bem.info',
      },
      {
        name: 'sass',
        label: TECHNOLOGY_TITLE.sass,
        color: COLOR.red,
        href: 'https://sass-lang.com',
      },
      {
        name: 'modules',
        label: TECHNOLOGY_TITLE.modules,
        color: COLOR.default,
        href: 'https://github.com/css-modules/css-modules',
      },

      {
        name: 'styled',
        label: TECHNOLOGY_TITLE.styled,
        color: COLOR.yellow,
        href: 'https://styled-components.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLE.mui,
        color: COLOR.blue,
        href: 'https://material-ui.com',
      },
      {
        name: 'reactstrap',
        label: TECHNOLOGY_TITLE.reactstrap,
        color: COLOR.default,
        href: 'https://reactstrap.github.io/',
      },
      {
        disabled: true,
        name: 'ant',
        label: TECHNOLOGY_TITLE.ant,
        color: COLOR.blue,
        href: 'https://ant.design',
      },
      {
        name: 'materialize',
        label: TECHNOLOGY_TITLE.materialize,
        color: COLOR.red,
        href: 'https://materializecss.com',
      },
      {
        name: 'bootstrap',
        label: TECHNOLOGY_TITLE.bootstrap,
        color: COLOR.violet,
        href: 'https://getbootstrap.com',
      },
      {
        name: 'semantic',
        label: TECHNOLOGY_TITLE.semantic,
        color: COLOR.green,
        href: 'https://semantic-ui.com',
      },
      {
        name: 'emails',
        label: TECHNOLOGY_TITLE.emails,
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
        label: TECHNOLOGY_TITLE.git,
        color: COLOR.red,
        href: 'https://git-scm.com',
      },
      {
        name: 'npm',
        label: TECHNOLOGY_TITLE.npm,
        color: COLOR.red,
        href: 'https://www.npmjs.com',
      },
      {
        name: 'yarn',
        label: TECHNOLOGY_TITLE.yarn,
        color: COLOR.blue,
        href: 'https://yarnpkg.com',
      },
      {
        name: 'webpack',
        label: TECHNOLOGY_TITLE.webpack,
        color: COLOR.blue,
        href: 'https://webpack.js.org',
      },
      {
        name: 'gulp',
        label: TECHNOLOGY_TITLE.gulp,
        color: COLOR.red,
        href: 'https://gulpjs.com',
      },
      {
        disabled: true,
        name: 'parcel',
        label: TECHNOLOGY_TITLE.parcel,
        color: COLOR.yellow,
        href: 'https://parceljs.org',
      },
      {
        name: 'babel',
        label: TECHNOLOGY_TITLE.babel,
        color: COLOR.yellow,
        href: 'https://babeljs.io',
      },
      {
        name: 'prettier',
        label: TECHNOLOGY_TITLE.prettier,
        color: COLOR.default,
        href: 'https://prettier.io',
      },
      {
        name: 'eslint',
        label: TECHNOLOGY_TITLE.eslint,
        color: COLOR.violet,
        href: 'https://eslint.org',
      },
      {
        disabled: true,
        name: 'next',
        label: TECHNOLOGY_TITLE.next,
        color: COLOR.default,
        href: 'https://nextjs.org',
      },
      {
        disabled: true,
        name: 'gatsby',
        label: TECHNOLOGY_TITLE.gatsby,
        color: COLOR.violet,
        href: 'https://www.gatsbyjs.org',
      },
      {
        disabled: true,
        name: 'jest',
        label: TECHNOLOGY_TITLE.jest,
        color: COLOR.red,
        href: 'https://jestjs.io',
      },
      {
        disabled: true,
        name: 'nuxt',
        label: TECHNOLOGY_TITLE.nuxt,
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
        label: TECHNOLOGY_TITLE.vscode,
        color: COLOR.blue,
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'iterm',
        label: TECHNOLOGY_TITLE.item,
        color: COLOR.grass,
        href: 'https://iterm2.com',
      },
      {
        name: 'devtools',
        label: TECHNOLOGY_TITLE.devtools,
        color: COLOR.default,
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        name: 'zeplin',
        label: TECHNOLOGY_TITLE.zeplin,
        color: COLOR.yellow,
        href: 'https://zeplin.io',
      },
      {
        name: 'sketch',
        label: TECHNOLOGY_TITLE.sketch,
        color: COLOR.yellow,
        href: 'https://www.sketch.com',
      },
      {
        disabled: true,
        name: 'figma',
        label: TECHNOLOGY_TITLE.figma,
        color: COLOR.red,
        href: 'https://www.figma.com/',
      },
      {
        name: 'photoshop',
        label: TECHNOLOGY_TITLE.photoshop,
        color: COLOR.blue,
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        name: 'optim',
        label: TECHNOLOGY_TITLE.optim,
        color: COLOR.default,
        href: 'https://imageoptim.com',
      },
      {
        name: 'flow',
        label: TECHNOLOGY_TITLE.flow,
        color: COLOR.blue,
        href: 'https://www.getflow.com',
      },
      {
        name: 'parallels',
        label: TECHNOLOGY_TITLE.parallels,
        color: COLOR.default,
        href: 'https://www.parallels.com',
      },
      {
        name: 'mac',
        label: TECHNOLOGY_TITLE.mac,
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
        label: TECHNOLOGY_TITLE.node,
        color: COLOR.grass,
        href: 'https://nodejs.org',
      },
      {
        disabled: true,
        name: 'mongo',
        label: TECHNOLOGY_TITLE.mongo,
        color: COLOR.grass,
        href: 'https://www.mongodb.com',
      },
      {
        disabled: true,
        name: 'mysql',
        label: TECHNOLOGY_TITLE.mysql,
        color: COLOR.blue,
        href: 'https://www.mysql.com',
      },
      {
        name: 'php',
        label: TECHNOLOGY_TITLE.php,
        color: COLOR.violet,
        href: 'https://www.php.net',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLE.laravel,
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
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

  return (
    <section className="Technologies Section Section_pagination Section_colorful">
      <h2 className="VisuallyHidden">Технологии</h2>
      <Animate
        el="ul"
        className="Technologies-List"
        effect={md ? EFFECT.bottomSm : EFFECT.rightSm}
        duration={md ? undefined : DURATION.longer}
      >
        {groups.map((group: IGroup, index: number) => (
          <Accordion key={index} component="li" defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3 className="Technologies-Title">{group.title}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container component="ul">
                {renderTechnologies(group.technologies)}
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
