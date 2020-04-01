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
      {items.map(({id, label, Icon}: IFeature) => (
        <Grid key={id} className="Features-Item" item component="li" xs={6} xl={4}>
          <Icon className="Features-Icon" />
          <p>{label}</p>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
