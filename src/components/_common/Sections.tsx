import React from 'react'
import Grid from '@material-ui/core/Grid'

import './Sections.scss'

interface SectionsProps {
  firstSection: JSX.Element
  secondSection: JSX.Element
}

export default function Sections({
  firstSection,
  secondSection,
}: SectionsProps): JSX.Element {
  return (
    <Grid container className="Sections" spacing={0}>
      <Grid item xs={12} lg={6}>
        {firstSection}
      </Grid>
      <Grid item xs={12} lg={6}>
        {secondSection}
      </Grid>
    </Grid>
  )
}
