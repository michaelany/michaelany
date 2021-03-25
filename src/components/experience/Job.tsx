import React, {Fragment} from 'react'
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
import {Job as JobInterface, Feature} from '../../utils/types'

interface JobProps extends JobInterface {
  index: number
}

const renderOccupations = (
  occupations: string[],
  current?: boolean
): JSX.Element => {
  return (
    <div className="Job-Occupations">
      {occupations.map((occupation: string, index: number) => {
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
                {occupation}
                {lastCurrent && (
                  <Tooltip title="Текущая должность">
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
}

const renderBlock = (items: string[], isDuties?: boolean): JSX.Element => (
  <div className="Job-Block">
    <h4 className="Job-SubTitle">
      {isDuties ? <WorkIcon /> : <StarIcon />}
      {isDuties ? 'Обязанности' : 'Достижения'}
    </h4>
    <ul className="Job-Items">
      {items.map((item: string, index: number) => (
        <li key={index} className="Job-Item">
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default function Job({
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
        {renderOccupations(occupations, current)}
        {renderBlock(duties, true)}
        {renderBlock(achievements)}
        <div className="Job-Features">
          {features.map(
            ({label, Icon, time, disabled}: Feature, index: number) => (
              <Chip
                key={index}
                className="Chip"
                icon={<Icon />}
                label={time ? <time>{label}</time> : label}
                disabled={disabled}
              />
            )
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
