import {memo} from 'react'
import {Trans, TFunction} from 'react-i18next'
import {useMediaQuery, Collapse, Grid} from '@mui/material'

import './Features.scss'
import {Animate} from '@components/common'
import {QUERY_BREAKPOINT} from '@utils/constants'
import {Feature, Effect} from '@utils/types'
import {DURATION} from '@styles/theme'

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

const Features = memo(({t, type, extra, items}: FeaturesProps) => {
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
                <ExtraContent t={t as TFunction} type={type} item={item} />
              </Collapse>
            )}
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
})

export default Features

const ExtraContent = ({t, type, item}: ExtraContentProps) => {
  const tKey = `${type}.feature.${item.tKey}.text`

  return (
    <p className="Features-Description FadeIn">
      {item.Link ? (
        <Trans
          i18nKey={tKey}
          values={item.textValues}
          components={[item.Link as any]}
        />
      ) : (
        t(tKey, item.textValues)
      )}
      .
    </p>
  )
}

const getEffect = (xs: boolean, index: number): Effect =>
  xs ? 'bottom' : index % 2 ? 'right' : 'left'

const renderLabel = (item: Omit<Feature, 'Icon'>): string | JSX.Element =>
  item.time ? (
    <time className="Time">{item.label}</time>
  ) : (
    (item.label as string)
  )
