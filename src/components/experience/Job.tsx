import React from 'react'
import Chip from '@material-ui/core/Chip'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Job.scss'
import Company from '../common/Company'
import {Job as JobInterface, Feature, Position} from '../../utils/types'

interface JobProps extends JobInterface {
  index: number
}

const renderPositions = (positions: Position[]): JSX.Element[] =>
  positions.map(({occupation, duties}: Position, index: number) => (
    <li key={index} className="Job-Position">
      <h3 className="Job-Occupation">{occupation}</h3>
      <ul className="Job-Duties">
        {duties.map((duty: string, index: number) => (
          <li key={index} className="Job-Duty">
            {duty}
          </li>
        ))}
      </ul>
    </li>
  ))

const renderFeatures = (features: Feature[]): JSX.Element[] =>
  features.map(({label, Icon, time}: Feature, index: number) => (
    <Chip
      key={index}
      className="Chip"
      icon={<Icon />}
      label={time ? <time>{label}</time> : label}
    />
  ))

export default function Job({
  company,
  positions,
  features,
  index,
}: JobProps): JSX.Element {
  return (
    <Accordion component="li" className="Job" defaultExpanded={index === 0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Company {...company} />
      </AccordionSummary>
      <AccordionDetails className="Job-Content">
        <ul className="Job-Positions">{renderPositions(positions)}</ul>
        <div className="Job-Features">{renderFeatures(features)}</div>
      </AccordionDetails>
    </Accordion>
  )
}
