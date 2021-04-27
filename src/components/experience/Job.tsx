import {Fragment} from 'react'
import {TFunction} from 'react-i18next'
import cn from 'clsx'
import {
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import {
  ExpandMoreRounded as ExpandMoreIcon,
  ForwardRounded as ForwardIcon,
  WorkRounded as WorkIcon,
  StarRounded as StarIcon,
} from '@material-ui/icons'

import './Job.scss'
import {Tooltip, Company} from '../common'
import {tPeriodPart} from '../../utils/helpers'
import {
  Job as JobInterface,
  JobFeature,
  TKey,
  TKeyObject,
} from '../../utils/types'

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

const Occupations = ({
  t,
  current,
  occupations,
}: OccupationsProps): JSX.Element => (
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
                <Tooltip title={t('experience.current')!}>
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

const Block = ({t, isDuties, items}: BlockProps): JSX.Element => (
  <div className="Job-Block">
    <h4 className="Job-SubTitle">
      {isDuties ? <WorkIcon /> : <StarIcon />}
      {t(`experience.${isDuties ? 'duties' : 'achievements'}`)}
    </h4>
    <ul className="Job-Items">
      {items.map((item: TKey, index: number) => (
        <li key={index} className="Job-Item">
          {t(
            `experience.job.${isDuties ? 'duty' : 'achievement'}.${
              (item as TKeyObject).tKey ?? item
            }`,
            typeof item === 'object' ? item.values : undefined
          )}
        </li>
      ))}
    </ul>
  </div>
)

const Features = ({t, features}: FeaturesProps): JSX.Element => {
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

export default function Job({
  t,
  current,
  company,
  occupations,
  duties,
  achievements,
  features,
  index,
}: JobProps): JSX.Element {
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
