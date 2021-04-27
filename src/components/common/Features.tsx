import {memo} from 'react'
import {Trans, TFunction} from 'react-i18next'
import {useMediaQuery, Collapse, Grid} from '@material-ui/core'

import './Features.scss'
import {Animate} from '../common'
import {QUERY_BREAKPOINT} from '../../utils/constants'
import {DURATION} from '../../styles/theme'
import {Feature, Effect} from '../../utils/types'

interface FeaturesProps {
  items: Feature[]
  t?: TFunction
  type?: string
  extra?: boolean
}

interface ExtraContentProps {
  t: TFunction
  type: string
  item: Omit<Feature, 'Icon'>
}

const getEffect = (xs: boolean, index: number): Effect =>
  xs ? 'bottom' : index % 2 ? 'right' : 'left'

const ExtraContent = ({
  t,
  type,
  item,
}: ExtraContentProps): JSX.Element | null => {
  const tKey: string = `${type}.feature.${item.tKey}.text`

  return (
    <p className="Features-Description FadeIn">
      {item.Link ? (
        <Trans
          i18nKey={tKey}
          values={item.textValues}
          components={[item.Link]}
        />
      ) : (
        t(tKey, item.textValues)
      )}
      .
    </p>
  )
}

const renderLabel = (item: Omit<Feature, 'Icon'>): string | JSX.Element =>
  item.time ? <time className="Time">{item.label}</time> : item.label!

function Features({t, type, extra, items}: FeaturesProps): JSX.Element {
  const xs: boolean = useMediaQuery(QUERY_BREAKPOINT.xs)

  return (
    <Grid container className="Features" component="ul" spacing={xs ? 4 : 6}>
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
              {t
                ? t(
                    `${type}.feature.${item.tKey}.label`,
                    item.labelValues ?? undefined
                  )
                : renderLabel(item)}
            </p>
            {type && (
              <Collapse unmountOnExit in={extra} timeout={DURATION.long}>
                <ExtraContent t={t!} type={type} item={item} />
              </Collapse>
            )}
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
