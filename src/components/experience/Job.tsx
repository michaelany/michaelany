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
  BusinessCenterRounded as BusinessCenterIcon,
  EmojiEventsRounded as EmojiEventsIcon,
} from '@mui/icons-material'

import './Job.scss'
import {Tooltip, Company} from '@components/common'
import {tPeriodPart} from '@utils/helpers'
import {IJob, IJobFeature, TKey, TKeyObject} from '@utils/types'

interface IJobProps extends IJob {
  t: TFunction
  index: number
}

interface IOccupationsProps {
  t: TFunction
  current?: boolean
  occupations: TKey[]
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

export default function Job({
  t,
  current,
  company,
  occupations,
  duties,
  achievements,
  features,
  index,
}: IJobProps) {
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

const Features = ({t, features}: IFeaturesProps) => {
  return (
    <div className="Job-Features">
      {features.map(({tKey, period, Icon}, index) => (
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
        />
      ))}
    </div>
  )
}
