import React, {memo} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'

import './Features.scss'
import Animate, {EFFECTS} from '../common/Animate'
import {BREAKPOINTS} from '../../styles/theme'
import {Feature} from '../../utils/types'

interface FeaturesProps {
  items: Feature[]
}

function Features({items}: FeaturesProps): JSX.Element {
  const xs: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.XS}px)`)

  return (
    <Grid container className="Features" component="ul" spacing={4}>
      {items.map(({label, Icon, time}: Feature, index: number) => (
        <Grid
          key={index}
          item
          component="li"
          className="Features-Item"
          xs={12}
          sm={6}
        >
          <Animate
            effect={xs ? EFFECTS.BOTTOM : EFFECTS[index % 2 ? 'RIGHT' : 'LEFT']}
          >
            <Icon className="Features-Icon" />
            <p>{time ? <time>{label}</time> : label}</p>
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
