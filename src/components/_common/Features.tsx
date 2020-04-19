import React, {memo} from 'react'
import Grid from '@material-ui/core/Grid'
import {Feature} from '../../utils/types'

import './Features.scss'

interface FeaturesProps {
  items: Feature[]
}

function Features({items}: FeaturesProps): JSX.Element {
  return (
    <Grid container className="Features" component="ul" spacing={4}>
      {items.map(({label, Icon}: Feature, index: number) => (
        <Grid
          key={index}
          item
          component="li"
          className="Features-Item"
          xs={12}
          sm={6}
        >
          <Icon className="Features-Icon" />
          <p>{label}</p>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
