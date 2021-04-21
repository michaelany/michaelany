import {memo} from 'react'
import {useTranslation, Trans, TFunction} from 'react-i18next'
import {useMediaQuery, Collapse, Grid} from '@material-ui/core'

import './Features.scss'
import {Animate} from '../common'
import {QUERY_BREAKPOINT} from '../../utils/constants'
import {DURATION} from '../../styles/theme'
import {Feature, Effect} from '../../utils/types'

interface FeaturesProps {
  type: string
  items: Feature[]
  extra?: boolean
}

interface ExtraProps {
  type: string
  t: TFunction
  extra?: boolean
  item: Omit<Feature, 'Icon'>
}

const getEffect = (xs: boolean, index: number): Effect =>
  xs ? 'bottom' : index % 2 ? 'right' : 'left'

const Extra = ({type, t, extra, item}: ExtraProps): JSX.Element | null => {
  const tKey: string = `${type}.feature.${item.tKey}.text`
  const text: string = t(
    tKey,
    item.textValue ? {textValue: item.textValue} : undefined
  )

  if (!text) return null

  return (
    <Collapse unmountOnExit in={extra} timeout={DURATION.long}>
      <p className="Features-Description FadeIn">
        {item.link ? (
          <Trans
            i18nKey={tKey}
            values={{
              textValue: item.textValue,
              linkText: item.link.text ?? t(item.link.tKey!),
            }}
            components={[item.link.component]}
          />
        ) : (
          text
        )}
        .
      </p>
    </Collapse>
  )
}

function Features({type, items, extra}: FeaturesProps): JSX.Element {
  const {t} = useTranslation()
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
              {t(
                `${type}.feature.${item.tKey}.label`,
                item.labelValue ? {labelValue: item.labelValue} : undefined
              )}
              {/* {item.time ? <time>{item.label}</time> : item.label} */}
            </p>
            <Extra type={type} t={t} extra={extra} item={item} />
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(Features)
