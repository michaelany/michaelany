import {Dispatch, SetStateAction} from 'react'
import {TFunction} from 'react-i18next'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay, SwiperOptions, Controller} from 'swiper'

import './Carousel.scss'
import {ReactComponent as PhoneSvg} from '@assets/img/shapes/phone.svg'
import {Animate, Panel} from '@components/common'
import {ProjectName} from '@utils/types'
import {DURATION} from '@styles/theme'

interface CarouselProps {
  mobile?: boolean
  t: TFunction
  md: boolean
  name: ProjectName
  images: string[][]
  swiper: SwiperCore | null
  setSwiper: Dispatch<SetStateAction<SwiperCore | null>>
}

export default function Carousel(props: CarouselProps) {
  if (props.mobile)
    return (
      <Animate className="Carousel Carousel_type_mobile">
        <div className="Carousel-Block">{renderContent(props)}</div>
        <PhoneSvg className="Carousel-Svg" />
      </Animate>
    )

  return (
    <Animate
      className="Carousel Carousel_type_desktop"
      effect={props.md ? 'bottom' : 'right'}
      duration={props.md ? undefined : 'longer'}
    >
      <Panel className="Carousel-Content">
        <div className="Carousel-Block">{renderContent(props, true)}</div>
      </Panel>
    </Animate>
  )
}

const renderContent = (
  {t, mobile, name, images, swiper, setSwiper}: CarouselProps,
  isDesktop?: boolean
): JSX.Element | JSX.Element[] => {
  const imageElements: JSX.Element[] = images.map(
    (image: string[], index: number) => {
      const caption = `${t('portfolio.screenshot')} ${
        mobile ? `${t('portfolio.mobile')} ` : ''
      }${t('portfolio.screen')} "${t(`portfolio.project.${name}.title`)}"`
      return (
        <SwiperSlide key={image[0]} tag="figure">
          <img
            className="Carousel-Img"
            src={image[0]}
            srcSet={image[1] && `${image[1]} 2x`}
            alt={`${caption} ${index + 1}`}
          />
        </SwiperSlide>
      )
    }
  )
  return imageElements.length > 1 ? (
    <Swiper
      {...swiperOptions}
      autoplay={isDesktop ? autoplayOptions : undefined}
      controller={{control: swiper ?? undefined}}
      onSwiper={setSwiper}
    >
      {imageElements}
    </Swiper>
  ) : (
    imageElements
  )
}

SwiperCore.use([Autoplay, Controller])

export const swiperOptions: SwiperOptions = {
  grabCursor: true,
  loop: true,
  speed: 1500,
}

const autoplayOptions = {delay: DURATION.lingering}
