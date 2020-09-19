import React, {memo} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'

import './Features.scss'
import Animate, {EFFECTS} from '../common/Animate'
import {BREAKPOINTS, DURATIONS} from '../../styles/theme'
import {Feature} from '../../utils/types'

interface FeaturesProps {
  items: Feature[]
  extra?: boolean
}

const getEffect = (xs: boolean, index: number): string =>
  xs ? EFFECTS.bottom : index % 2 ? EFFECTS.rightSm : EFFECTS.leftSm

function Features({items, extra}: FeaturesProps): JSX.Element {
  const xs: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.xs}px)`)

  return (
    <Grid container className="Features" component="ul" spacing={4}>
      {items.map(({label, Icon, time, description}: Feature, index: number) => (
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
            <p className="Features-Label">
              {time ? <time>{label}</time> : label}
            </p>
            {description && (
              <Collapse unmountOnExit in={extra} timeout={DURATIONS.long}>
                <p className="Features-Description FadeIn">{description}</p>
              </Collapse>
            )}
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
