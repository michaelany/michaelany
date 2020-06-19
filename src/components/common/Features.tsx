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

const getEffect = (xs: boolean, index: number): string =>
  xs ? EFFECTS.bottom : index % 2 ? EFFECTS.rightSm : EFFECTS.leftSm

function Features({items}: FeaturesProps): JSX.Element {
  const xs: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.xs}px)`)

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
          <Animate effect={getEffect(xs, index)}>
            <Icon className="Features-Icon Colorful Colorful_dark" />
            <p>{time ? <time>{label}</time> : label}</p>
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
