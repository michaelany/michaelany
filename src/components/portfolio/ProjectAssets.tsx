import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import SwiperCore from 'swiper'
import {useMediaQuery} from '@mui/material'
import type {TFunction} from 'i18next'

import './ProjectAssets.scss'
import {Animate, Section} from '#components/common'
import {ROUTE, QUERY_BREAKPOINT} from '#utils/constants'
import Carousel from './Carousel'
import type {IProject, IProjectImages} from '#utils/types'

interface IProjectAssetsProps {
  project: IProject
}

interface IScreenshotsProps {
  t: TFunction
  md: boolean
  name: string
  images: IProjectImages
}

export default function ProjectAssets({project}: IProjectAssetsProps) {
  const {t} = useTranslation()
  const md = useMediaQuery(QUERY_BREAKPOINT.md)

  return (
    <Section aside colorful prevTo={ROUTE.portfolio}>
      <h2 className="VisuallyHidden">{t('portfolio.subtitle')}</h2>
      <div>
        <Animate
          el="figure"
          className="ProjectAssets-LogoWrapper"
          effect={md ? undefined : 'zoomOut'}
          duration={md ? undefined : 'longer'}
        >
          <img
            src={project.images.logo[1]}
            srcSet={`${project.images.logo[2]} 2x`}
            alt={project.title}
            loading="lazy"
          />
        </Animate>
        <Screenshots
          t={t}
          md={md}
          name={project.name}
          images={project.images}
        />
      </div>
    </Section>
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
