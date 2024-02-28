import {Fragment} from 'react'
import {TFunction} from 'i18next'
import cn from 'clsx'
import {
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import {
  ExpandMoreRounded as ExpandMoreIcon,
  ForwardRounded as ForwardIcon,
  WorkRounded as WorkIcon,
  EmojiEventsRounded as EmojiEventsIcon,
} from '@mui/icons-material'

import './Job.scss'
import {Tooltip, Company} from '@components/common'
import {tPeriodPart} from '@utils/helpers'
import {Job as JobInterface, JobFeature, TKey, TKeyObject} from '@utils/types'

interface JobProps extends JobInterface {
  t: TFunction
  index: number
}

interface OccupationsProps {
  t: TFunction
  current?: boolean
  occupations: TKey[]
}

interface BlockProps {
  t: TFunction
  isDuties?: boolean
  items: TKey[]
}

interface FeaturesProps {
  t: TFunction
  features: JobFeature[]
}

export default function Job({
  t,
  current,
  company,
  occupations,
  duties,
  achievements,
  features,
  index,
}: JobProps) {
  return (
    <Accordion component="li" className="Job" defaultExpanded={index === 0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className="Job-Company">
          <Company {...company} />
        </div>
      </AccordionSummary>
      <AccordionDetails className="Job-Content">
        <Occupations t={t} current={current} occupations={occupations} />
        <Block t={t} isDuties items={duties} />
        <Block t={t} items={achievements} />
        <Features t={t} features={features} />
      </AccordionDetails>
    </Accordion>
  )
}

const Occupations = ({t, current, occupations}: OccupationsProps) => (
  <div className="Job-Occupations">
    {occupations.map((occupation: TKey, index: number) => {
      const last: boolean = index === 0
      const lastCurrent: boolean | undefined = last && current
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

const Block = ({t, isDuties, items}: BlockProps) => (
  <div className="Job-Block">
    <h4 className="Job-SubTitle">
      {isDuties ? <WorkIcon /> : <EmojiEventsIcon />}
      <span className="Job-SubTitleText">
        {t(`experience.${isDuties ? 'duties' : 'achievements'}`)}
      </span>
    </h4>
    <ul className="Job-Items">
      {items.map((item: TKey, index: number) => (
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

const Features = ({t, features}: FeaturesProps) => {
  return (
    <div className="Job-Features">
      {features.map(
        ({tKey, period, Icon, disabled}: JobFeature, index: number) => (
          <Chip
            key={index}
            className="Chip"
            icon={<Icon />}
            label={
              period ? (
                <time>
                  {tPeriodPart(t, period.from)} -{' '}
                  {period.to ? tPeriodPart(t, period.to) : '...'}
                </time>
              ) : (
                t(`experience.job.feature.${tKey}`)
              )
            }
            disabled={disabled}
          />
        )
      )}
    </div>
  )
}
