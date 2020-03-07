import React from 'react'
import {withStyles} from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

interface ISectionsProps {
  firstSection: JSX.Element
  secondSection: JSX.Element
}

const GridContainer = withStyles({
  root: {
    height: '100%',
  },
})(Grid)

export default function Sections({firstSection, secondSection}: ISectionsProps) {
  return (
    <GridContainer container spacing={0}>
      <Grid item xs={12} md={6}>
        {firstSection}
      </Grid>
      <Grid item xs={12} md={6}>
        {secondSection}
      </Grid>
    </GridContainer>
  )
}
