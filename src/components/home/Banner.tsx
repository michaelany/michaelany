import {useTranslation} from 'react-i18next'

import './Banner.scss'
import macbookImg from '#assets/img/shapes/macbook.png'
import macbook2xImg from '#assets/img/shapes/macbook@2x.png'
import {Section} from '#components/common'
import {BANNER_IMAGES} from '#data/banner'
import {ROUTE} from '#utils/constants'
import Laptop from './Laptop'

export default function Banner() {
  const {t} = useTranslation()

  return (
    <Section className="Banner" aside colorful nextTo={ROUTE.about}>
      <h2 className="VisuallyHidden">{t('home.subtitle')}</h2>
      <div className="Banner-Content">
        <Laptop
          fallback={
            <div className="Banner-Figure">
              <img
                className="Banner-Image"
                width={652}
                height={417}
                src={macbookImg}
                srcSet={`${macbook2xImg} 2x`}
                alt="MacBook Pro"
                loading="lazy"
              />
              <img
                className="Banner-ScreenImage"
                src={BANNER_IMAGES[0]}
                alt="JavaScript"
              />
            </div>
          }
        />
      </div>
    </Section>
  )
}
