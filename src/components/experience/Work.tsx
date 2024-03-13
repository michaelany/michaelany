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
          values={[COMPANY.sevenGlyphs.title, YEARS_OF_EXPERIENCE]}
          components={transComponents}
        />
      </p>
      <Animate el="ul" className="Work">
        {jobs.map((job, index) => (
          <Job key={index} {...job} t={t} index={index} />
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
    href={COMPANY.sevenGlyphs.href}
  />,
  <MuiLink component={Link} className="Link Lowercase" to={ROUTE.vlog} />,
]

const jobs: IJob[] = [
  {
    current: true,
    company: COMPANY.sevenGlyphs,
    occupations: ['lead', 'senior', 'middle'],
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
      'technologies',
      {tKey: 'speed', values: [1]},
      'english',
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
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.css,
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
    company: COMPANY.mvideo,
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
