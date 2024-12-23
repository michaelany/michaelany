import {memo, JSX} from 'react'
import {Trans} from 'react-i18next'
import {TFunction} from 'i18next'
import {useMediaQuery, Collapse, Grid} from '@mui/material'

import './Features.scss'
import {Animate} from '#components/common'
import {QUERY_BREAKPOINT} from '#utils/constants'
import {IFeature, TEffect} from '#utils/types'
import {DURATION} from '#styles/theme'

interface IFeaturesProps {
  items: IFeature[]
  t?: TFunction
  type?: string
  extra?: boolean
}

interface IExtraContentProps {
  t: TFunction
  type: string
  item: Omit<IFeature, 'Icon'>
}

const Features = memo(({t, type, extra, items}: IFeaturesProps) => {
  const xs = useMediaQuery(QUERY_BREAKPOINT.xs)

  return (
    <Grid container component="ul" spacing={xs ? 4 : 6}>
      {items.map(({Icon, ...item}, index) => (
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
                    item.labelValues
                      ? {
                          replace: item.labelValues,
                        }
                      : undefined
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

const ExtraContent = ({t, type, item}: IExtraContentProps) => {
  const tKey = `${type}.feature.${item.tKey}.text`

  return (
    <p className="Features-Description FadeIn">
      {item.links ? (
        <Trans
          i18nKey={tKey}
          values={item.textValues}
          components={item.links as any}
        />
      ) : (
        t(tKey, {replace: item.textValues})
      )}
      .
    </p>
  )
}

const getEffect = (xs: boolean, index: number): TEffect =>
  xs ? 'bottom' : index % 2 ? 'left' : 'right'

const renderLabel = (item: Omit<IFeature, 'Icon'>): string | JSX.Element =>
  item.time ? (
    <time className="Time">{item.label}</time>
  ) : (
    (item.label as string)
  )
