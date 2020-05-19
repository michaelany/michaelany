import React from 'react'
import Chip from '@material-ui/core/Chip'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Job.scss'
import Company from '../_common/Company'
import {Job as JobInterface, Feature, Position} from '../../utils/types'

interface JobProps extends JobInterface {
  index: number
}

const renderPosition = (positions: Position[]): JSX.Element[] =>
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
  features.map(({label, Icon}: Feature, index: number) => (
    <Chip key={index} className="Chip" icon={<Icon />} label={label} />
  ))

export default function Job({
  company,
  positions,
  features,
  index,
}: JobProps): JSX.Element {
  return (
    <ExpansionPanel
      component="li"
      className="Job"
      defaultExpanded={index === 0}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Company {...company} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="Job-Content">
        <ul className="Job-Positions">{renderPosition(positions)}</ul>
        <div className="Job-Features">{renderFeatures(features)}</div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
