import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {TFunction} from 'i18next'
import SwiperCore from 'swiper'
import {useMediaQuery} from '@mui/material'

import './ProjectAssets.scss'
import {Animate, Pagination, Copyright} from '@components/common'
import {ROUTE, QUERY_BREAKPOINT} from '@utils/constants'
import {TProjectName, IProjectImages} from '@utils/types'
import Carousel from './Carousel'

interface IProjectAssetsProps {
  name: TProjectName
  title?: string
  images: IProjectImages
}

interface IScreenshotsProps extends Omit<IProjectAssetsProps, 'title'> {
  t: TFunction
  md: boolean
}

export default function ProjectAssets({
  name,
  title,
  images,
}: IProjectAssetsProps) {
  const {t} = useTranslation()
  const md = useMediaQuery(QUERY_BREAKPOINT.md)

  return (
    <section className="Section Section_pagination Section_colorful">
      <h2 className="VisuallyHidden">{t('portfolio.subtitle')}</h2>
      <div>
        <Animate
          el="figure"
          className="ProjectAssets-LogoWrapper"
          effect={md ? undefined : 'zoomOut'}
          duration={md ? undefined : 'longer'}
        >
          <img
            src={images.logo[1]}
            srcSet={`${images.logo[2]} 2x`}
            alt={title}
          />
        </Animate>
        <Screenshots t={t} md={md} name={name} images={images} />
      </div>
      <Pagination prevTo={ROUTE.portfolio} />
      <Copyright />
    </section>
  )
}

const Screenshots = ({t, md, name, images}: IScreenshotsProps) => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperCore>({} as SwiperCore)
  const [secondSwiper, setSecondSwiper] = useState<SwiperCore>({} as SwiperCore)

  return (
    <>
      {images.desktop && (
        <Carousel
          t={t}
          md={md}
          name={name}
          images={images.desktop}
          swiper={secondSwiper}
          setSwiper={setFirstSwiper}
        />
      )}
      {images.mobile && (
        <Carousel
          mobile
          mobileOnly={!images.desktop}
          t={t}
          md={md}
          name={name}
          images={images.mobile}
          swiper={firstSwiper}
          setSwiper={setSecondSwiper}
        />
      )}
    </>
  )
}
