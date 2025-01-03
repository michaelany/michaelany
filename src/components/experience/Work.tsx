import {useTranslation, Trans} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Link as MuiLink} from '@mui/material'
import {
  ScheduleRounded as ScheduleIcon,
  MyLocationRounded as MyLocationIcon,
  DateRangeRounded as DateRangeIcon,
  RoomRounded as RoomIcon,
} from '@mui/icons-material'

import './Work.scss'
import {Animate, Section} from '#components/common'
import {IJob} from '#utils/types'
import {
  YEARS_OF_EXPERIENCE,
  CAREER_START_PARTS,
  BLANK_LINK_PROPS,
  ROUTE,
} from '#utils/constants'
import {COMPANY, TECHNOLOGY_TITLE, FEATURE} from '#data/common'
import Job from './Job'

export default function Work() {
  const {t} = useTranslation()

  return (
    <Section>
      <h1 className="Title">{t('title.experience')}</h1>
      <p className="MainText">
        <Trans
          i18nKey="experience.text"
          values={[COMPANY.goRentals.title, YEARS_OF_EXPERIENCE]}
          components={transComponents}
        />
        .
      </p>
      <Animate el="ul" className="Work">
        {jobs.map((job, index) => (
          <Job key={index} job={job} t={t} index={index} />
        ))}
      </Animate>
    </Section>
  )
}

const transComponents = [
  <strong />,
  <MuiLink
    {...BLANK_LINK_PROPS}
    className="Link"
    href={COMPANY.goRentals.href}
  />,
  <MuiLink component={Link} className="Link Lowercase" to={ROUTE.vlog} />,
]

const jobs: IJob[] = [
  {
    current: true,
    company: COMPANY.goRentals,
    occupations: ['lead'],
    tools: [
      'html',
      'css',
      'js',
      'ts',
      'vue',
      'nuxt',
      'sass',
      'bem',
      'tailwind',
      'bulma',
      'npm',
      'git',
      'wordpress',
      'strapi',
      'cypress',
      'vscode',
      'sketch',
      'figma',
      'azure',
    ],
    duties: [
      'logicAppsSites',
      'structureProjects',
      'responsive',
      {tKey: 'restSocket', values: [FEATURE.rest, FEATURE.socket]},
      'refactor',
      'tests',
      'support',
      'tasks',
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'june',
            year: 2024,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'hybrid', Icon: MyLocationIcon},
      {tKey: 'auckland', Icon: RoomIcon},
    ],
  },
  {
    company: COMPANY.sevenGlyphs,
    occupations: ['lead', 'senior', 'middle'],
    tools: [
      'html',
      'css',
      'js',
      'ts',
      'react',
      'redux',
      'reactquery',
      'zustand',
      'mobx',
      'next',
      'preact',
      'sass',
      'bem',
      'modules',
      'styled',
      'mui',
      'ant',
      'bootstrap',
      'pug',
      'gsap',
      'vite',
      'webpack',
      'gulp',
      'stripe',
      'npm',
      'git',
      'vscode',
      'phpstorm',
      'sketch',
      'figma',
      'zeplin',
      'photoshop',
      'reactnative',
      'php',
      'laravel',
    ],
    duties: [
      'logicAppsSites',
      'structureProjects',
      'responsive',
      {tKey: 'restSocket', values: [FEATURE.rest, FEATURE.socket]},
      'refactor',
      'scratch',
      'support',
      'tasks',
    ],
    achievements: [
      'resultForeign',
      'interfaces',
      'businessLogic',
      'animations',
      'architecture',
      'technologies',
      {tKey: 'speed', values: [1]},
      'independent',
      'visa',
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'april',
            year: 2017,
          },
          to: {
            tKey: 'june',
            year: 2024,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'busyPart', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {tKey: 'remote', Icon: MyLocationIcon},
      {tKey: 'auckland', Icon: RoomIcon},
    ],
  },
  {
    company: COMPANY.t1,
    occupations: ['consult', 'teamLead', 'senior', 'middle'],
    tools: [
      'html',
      'css',
      'js',
      'ts',
      'react',
      'redux',
      'next',
      'sass',
      'bem',
      'modules',
      'mui',
      'ant',
      'webpack',
      'npm',
      'docker',
      'jest',
      'git',
      'vscode',
      'phpstorm',
      'figma',
      'reactnative',
      'expo',
    ],
    duties: [
      'logicApps',
      'structureApps',
      'responsive',
      {tKey: 'rest', values: [FEATURE.rest]},
      'refactor',
      'scratch',
      'support',
      'tasksTeam',
      'manage',
      'review',
    ],
    achievements: [
      'resultCorporate',
      'pathLead',
      {
        tKey: 'mobile',
        values: [TECHNOLOGY_TITLE.reactnative],
      },
      'internship',
      'mentor',
      'interview',
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'april',
            year: 2018,
          },
          to: {
            tKey: 'april',
            year: 2022,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'busyPart', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {tKey: 'remote', Icon: MyLocationIcon},
      {tKey: 'moscow', Icon: RoomIcon},
    ],
  },
  {
    company: COMPANY.everpoint,
    occupations: ['middle', 'junior'],
    tools: [
      'html',
      'css',
      'js',
      'react',
      'redux',
      'sass',
      'modules',
      'semantic',
      'webpack',
      'npm',
      'git',
      'phpstorm',
      'photoshop',
    ],
    duties: [
      'logicModules',
      'responsive',
      {tKey: 'rest', values: [FEATURE.rest]},
      'refactor',
      'tasks',
    ],
    achievements: [
      'resultApp',
      'pathFront',
      {
        tKey: 'technologiesBase',
        values: [
          TECHNOLOGY_TITLE.js,
          TECHNOLOGY_TITLE.css,
          TECHNOLOGY_TITLE.react,
        ],
      },
      'work',
    ],
    features: [
      {
        period: {
          from: {
            tKey: CAREER_START_PARTS[0],
            year: CAREER_START_PARTS[1],
          },
          to: {
            tKey: 'april',
            year: 2017,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {tKey: 'moscow', Icon: RoomIcon},
    ],
  },
  {
    company: COMPANY.mVideo,
    occupations: ['support'],
    duties: [
      {tKey: 'serviceDesk', values: ['Service Desk']},
      'hardwareFix',
      'hardwareInstall',
      'consult',
    ],
    achievements: ['orders', 'hardware', 'softSkills'],
    features: [
      {
        period: {
          from: {
            tKey: 'october',
            year: 2008,
          },
          to: {
            tKey: 'may',
            year: 2010,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {
        tKey: 'moscow',
        Icon: RoomIcon,
      },
    ],
  },
]
