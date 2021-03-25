import React, {memo} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'

import './Features.scss'
import {Animate} from '../common'
import {QUERY_BREAKPOINT} from '../../utils/constants'
import {DURATION} from '../../styles/theme'
import {Feature, Effect} from '../../utils/types'

interface FeaturesProps {
  items: Feature[]
  extra?: boolean
}

const getEffect = (xs: boolean, index: number): Effect =>
  xs ? 'bottom' : index % 2 ? 'rightSm' : 'leftSm'

function Features({items, extra}: FeaturesProps): JSX.Element {
  const xs: boolean = useMediaQuery(QUERY_BREAKPOINT.xs)

  return (
    <Grid container className="Features" component="ul" spacing={6}>
      {items.map(({Icon, ...item}: Feature, index: number) => (
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
              {item.time ? <time>{item.label}</time> : item.label}
            </p>
            {item.description && (
              <Collapse unmountOnExit in={extra} timeout={DURATION.long}>
                <p className="Features-Description FadeIn">
                  {item.description}
                </p>
              </Collapse>
            )}
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
