import React from 'react'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Technology from './Technology'
import {ITechnology} from '../../utils/types'

interface IGroup {
  id: number
  title: string
  technologies: ITechnology[]
}

const groups: IGroup[] = [
  {
    id: 1,
    title: 'HTML',
    technologies: [
      {id: 1, type: 'html', label: 'HTML5', color: 'red', href: 'https://www.w3.org/html'},
      {id: 2, type: 'html', label: 'SVG', color: 'yellow', href: 'https://www.w3.org/html'},
      {id: 3, type: 'html', label: 'JSX', color: 'blue', href: 'https://www.w3.org/html'},
      {id: 4, type: 'html', label: 'Pug', color: 'yellow', href: 'https://www.w3.org/html'},
      {
        id: 5,
        type: 'html',
        label: 'Handlebars',
        color: 'yellow',
        href: 'https://www.w3.org/html',
      },
      {id: 6, type: 'html', label: 'Blade', color: 'red', href: 'https://www.w3.org/html'},
    ],
  },
]

const renderTechnologies = (technologies: ITechnology[]): JSX.Element[] =>
  technologies.map(
    (technology: ITechnology): JSX.Element => (
      <Grid key={technology.id} item component="li" xs={6} sm={3} md={4} lg={3}>
        <Technology {...technology} />
      </Grid>
    )
  )

export default function Technologies(): JSX.Element {
  return (
    <section className="Technologies Section Section_backgroundColor_blue">
      <h2 className="VisuallyHidden">Технологии</h2>
      <ul>
        {groups.map(
          ({id, title, technologies}: IGroup): JSX.Element => (
            <ExpansionPanel key={id} defaultExpanded component="li" elevation={0}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <h4>{title}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container component="ul">
                  {renderTechnologies(technologies)}
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        )}
      </ul>
    </section>
  )
}
