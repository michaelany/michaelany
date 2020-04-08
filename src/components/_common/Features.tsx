import React, {memo} from 'react'
import Grid from '@material-ui/core/Grid'
import {IFeature} from '../../utils/types'

import './Features.scss'

interface IFeaturesProps {
  items: IFeature[]
}

function Features({items}: IFeaturesProps): JSX.Element {
  return (
    <Grid container className="Features" component="ul" spacing={4}>
      {items.map(({label, Icon}: IFeature, index: number) => (
        <Grid
          key={index}
          item
          component="li"
          className="Features-Item"
          xs={6}
          xl={4}
        >
          <Icon className="Features-Icon" />
          <p>{label}</p>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
