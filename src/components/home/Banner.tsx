import {useTranslation} from 'react-i18next'

import './Banner.scss'
import {Animate, Section} from '#components/common'
import {ROUTE} from '#utils/constants'
import Laptop from './Laptop'

interface IBannerProps {
  isMd: boolean
}

export default function Banner({isMd}: IBannerProps) {
  const {t} = useTranslation()

  return (
    <Section className="Banner" aside colorful nextTo={ROUTE.about}>
      <h2 className="VisuallyHidden">{t('home.subtitle')}</h2>
      <Animate
        className="Banner-Content"
        isAnimatedOnMount={!isMd}
        effect={isMd ? undefined : 'plain'}
        duration={isMd ? undefined : 'longer'}
      >
        <Laptop />
      </Animate>
    </Section>
  )
}
