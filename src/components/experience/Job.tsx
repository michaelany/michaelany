import {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import {TFunction} from 'i18next'
import cn from 'clsx'
import {
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from '@mui/material'
import {
  ExpandMoreRounded as ExpandMoreIcon,
  ForwardRounded as ForwardIcon,
  BusinessCenterRounded as BusinessCenterIcon,
  EmojiEventsRounded as EmojiEventsIcon,
  WidgetsRounded as WidgetsIcon,
  BuildRounded as BuildIcon,
} from '@mui/icons-material'

import './Job.scss'
import {Tooltip, Company} from '#components/common'
import {tPeriodPart} from '#utils/helpers'
import {TECHNOLOGY} from '#data/common'
import PROJECTS, {
  PRIVATE_AND_OTHER_COMPANY_PROJECTS_COUNT,
} from '#data/projects'
import {ROUTE} from '#utils/constants'
import {IJob, IJobFeature, ITechnology, TKey, TKeyObject} from '#utils/types'

interface IJobProps {
  job: IJob
  t: TFunction
  index: number
}

interface IOccupationsProps {
  t: TFunction
  current?: boolean
  occupations: TKey[]
}

interface IProjectsProps {
  t: TFunction
  companyName: string
}

interface IToolsProps {
  t: TFunction
  tools: string[]
}

interface IBlockProps {
  t: TFunction
  isDuties?: boolean
  items: TKey[]
}

interface IFeaturesProps {
  t: TFunction
  features: IJobFeature[]
}

export default function Job({job, t, index}: IJobProps) {
  const storageProp = `job${index}Expanded`
  const [expanded, setExpanded] = useState<boolean>(
    localStorage[storageProp]
      ? JSON.parse(localStorage[storageProp])
      : index === 0
        ? true
        : false
  )

  const handleExpand = (_: any, value: boolean) => {
    localStorage.setItem(storageProp, JSON.stringify(value))
    setExpanded(value)
  }

  const showProjectsTools = job.company.name !== 'mvideo'

  return (
    <Accordion
      component="li"
      className="Job"
      expanded={expanded}
      onChange={handleExpand}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className="Job-Company">
          <Company {...job.company} />
        </div>
      </AccordionSummary>
      <AccordionDetails className="Job-Content">
        <Occupations
          t={t}
          current={job.current}
          occupations={job.occupations}
        />
        <Features t={t} features={job.features} />
        {showProjectsTools && <Projects t={t} companyName={job.company.name} />}
        <Block t={t} isDuties items={job.duties} />
        <Block t={t} items={job.achievements} />
        {showProjectsTools && <Tools t={t} tools={job.tools!} />}
      </AccordionDetails>
    </Accordion>
  )
}

const Occupations = ({t, current, occupations}: IOccupationsProps) => (
  <div className="Job-Occupations">
    {occupations.map((occupation: TKey, index: number) => {
      const last = index === 0
      const lastCurrent = last && current
      return (
        <Fragment key={index}>
          <h3
            className={cn(
              'Job-Occupation',
              last && 'Job-Occupation_last',
              lastCurrent && 'Job-Occupation_current'
            )}
          >
            <span>
              {t(`experience.occupation.${occupation}`)}
              {lastCurrent && (
                <Tooltip title={t('experience.current')} enterDelay={0}>
                  <span className="Job-Badge" />
                </Tooltip>
              )}
            </span>
          </h3>
          {index < occupations.length - 1 && (
            <ForwardIcon className="Job-UpIcon" />
          )}
        </Fragment>
      )
    })}
  </div>
)

const Features = ({t, features}: IFeaturesProps) => {
  return (
    <div className="Job-Features Job-Features_main">
      {features.map(({Icon, ...feature}, index) => (
        <Chip
          key={index}
          className="Job-Feature"
          icon={<Icon />}
          label={
            feature.period ? (
              <time>
                {tPeriodPart(t, feature.period.from)} -{' '}
                {feature.period.to ? tPeriodPart(t, feature.period.to) : '...'}
              </time>
            ) : (
              t(`experience.job.feature.${feature.tKey}`)
            )
          }
        />
      ))}
    </div>
  )
}

const Projects = ({t, companyName}: IProjectsProps) => {
  const projects = PROJECTS.filter(
    (project) => project.companyName === companyName
  )

  const privateAndOteherProjectsCount =
    PRIVATE_AND_OTHER_COMPANY_PROJECTS_COUNT[companyName]

  return (
    <div className="Job-Block">
      <h4 className="Job-SubTitle">
        <WidgetsIcon />
        <span className="Job-SubTitleText">{t('experience.projects')}</span>
      </h4>
      <ul className="Job-Features">
        {projects.map((project) => (
          <li key={project.name}>
            <Chip
              clickable
              component={Link}
              className={`Job-Project Job-Project_color_${project.color}`}
              avatar={
                <Avatar
                  src={project.images.logo[0]}
                  srcSet={`${project.images.logo[1]} 2x`}
                  alt={project.name}
                />
              }
              label={
                project.title ?? t(`portfolio.project.${project.name}.title`)
              }
              to={`${ROUTE.portfolio}/${project.name}`}
            />
          </li>
        ))}
        {privateAndOteherProjectsCount && (
          <li>
            <Chip
              className="Job-Feature"
              variant="outlined"
              avatar={
                <Avatar>
                  <strong>+{privateAndOteherProjectsCount}</strong>
                </Avatar>
              }
              label={
                <>
                  NDA{' '}
                  <span className="Lowercase">{t('experience.projects')}</span>
                </>
              }
            />
          </li>
        )}
      </ul>
    </div>
  )
}

const Tools = ({t, tools}: IToolsProps) => {
  const technologies: ITechnology[] = tools.map(
    (tool) => TECHNOLOGY.find((item) => item.name === tool) as ITechnology
  )

  return (
    <div className="Job-Block">
      <h4 className="Job-SubTitle">
        <BuildIcon />
        <span className="Job-SubTitleText">{t('experience.tools')}</span>
      </h4>
      <ul className="Job-Features">
        {technologies.map((technology) => (
          <Chip
            key={technology.name}
            component="li"
            className={`Job-Tool Job-Tool_color_${technology.color}`}
            avatar={
              <Avatar
                src={technology.images[0]}
                srcSet={`${technology.images[1]} 2x`}
                alt={technology.label}
              />
            }
            label={technology.label}
          />
        ))}
      </ul>
    </div>
  )
}

const Block = ({t, isDuties, items}: IBlockProps) => (
  <div className="Job-Block">
    <h4 className="Job-SubTitle">
      {isDuties ? <BusinessCenterIcon /> : <EmojiEventsIcon />}
      <span className="Job-SubTitleText">
        {t(`experience.${isDuties ? 'duties' : 'achievements'}`)}
      </span>
    </h4>
    <ul className="Job-Items">
      {items.map((item, index) => (
        <li key={index} className="Job-Item">
          {t(
            `experience.job.${isDuties ? 'duty' : 'achievement'}.${
              (item as TKeyObject).tKey ?? item
            }`,
            typeof item === 'object' ? {replace: item.values} : undefined
          )}
        </li>
      ))}
    </ul>
  </div>
)
