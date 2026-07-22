import {memo} from 'react'
import {Trans} from 'react-i18next'
import {useMediaQuery, Collapse, Grid} from '@mui/material'
import type {TFunction} from 'i18next'

import './Features.scss'
import {Animate} from '#components/common'
import {QUERY_BREAKPOINT} from '#utils/constants'
import {DURATION} from '#styles/theme'
import type {IFeature} from '#utils/types'

interface IFeaturesProps {
  items: IFeature[]
  t: TFunction
  type: string
  extra: boolean
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
          component="li"
          className="Features-Item"
          size={{xs: 12, sm: 6}}
        >
          <Animate effect={xs ? 'bottom' : index % 2 ? 'left' : 'right'}>
            <Icon className="Features-Icon Colorful Colorful_dark" />
            <p className="Features-Label">
              {t(
                `${type}.feature.${item.tKey}.label`,
                item.labelValues
                  ? {
                      replace: item.labelValues,
                    }
                  : undefined
              )}
            </p>
            <Collapse unmountOnExit in={extra} timeout={DURATION.long}>
              <ExtraContent t={t} type={type} item={item} />
            </Collapse>
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
})

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

export default Features
