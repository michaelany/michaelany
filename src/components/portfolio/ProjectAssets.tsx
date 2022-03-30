import {useState} from 'react'
import {useTranslation, TFunction} from 'react-i18next'
import SwiperCore from 'swiper'
import {useMediaQuery} from '@material-ui/core'

import './ProjectAssets.scss'
import {Animate, Pagination, Copyright} from '../common'
import Carousel from './Carousel'
import {ROUTE, QUERY_BREAKPOINT} from '../../utils/constants'
import {ProjectName, ProjectImages} from '../../utils/types'

interface ProjectAssetsProps {
  name: ProjectName
  title?: string
  images: ProjectImages
}

interface ScreenshotsProps extends Omit<ProjectAssetsProps, 'title'> {
  t: TFunction
  md: boolean
}

const Screenshots = ({t, md, name, images}: ScreenshotsProps): JSX.Element => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperCore | null>(null)
  const [secondSwiper, setSecondSwiper] = useState<SwiperCore | null>(null)

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

export default function ProjectAssets({
  name,
  title,
  images,
}: ProjectAssetsProps): JSX.Element {
  const {t} = useTranslation()
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

  return (
    <section className="ProjectAssets Section Section_pagination Section_colorful">
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
