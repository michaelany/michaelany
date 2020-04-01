import React from 'react'
import Grid from '@material-ui/core/Grid'

import './Sections.scss'

interface ISectionsProps {
  firstSection: JSX.Element
  secondSection: JSX.Element
}

export default function Sections({firstSection, secondSection}: ISectionsProps): JSX.Element {
  return (
    <Grid container className="Sections" spacing={0}>
      <Grid item xs={12} md={6}>
        {firstSection}
      </Grid>
      <Grid item xs={12} md={6}>
        {secondSection}
      </Grid>
    </Grid>
  )
}
