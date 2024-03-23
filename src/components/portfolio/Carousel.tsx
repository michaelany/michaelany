import {Dispatch, SetStateAction} from 'react'
import {TFunction} from 'i18next'
import SwiperCore from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Controller} from 'swiper/modules'
import {SwiperModule, SwiperOptions} from 'swiper/types'

import './Carousel.scss'
import PhoneSvg from '#assets/img/shapes/phone.svg?react'
import {Animate, Panel} from '#components/common'
import {DURATION} from '#styles/theme'

interface ICarouselProps {
  mobile?: boolean
  mobileOnly?: boolean
  t: TFunction
  md: boolean
  name: string
  images: string[][]
  swiper: SwiperCore
  setSwiper: Dispatch<SetStateAction<SwiperCore>>
}

export default function Carousel(props: ICarouselProps) {
  if (props.mobile)
    return (
      <Animate className="Carousel Carousel_type_mobile">
        <div className="Carousel-Block">
          <Content {...props} />
        </div>
        <PhoneSvg className="Carousel-Svg" />
      </Animate>
    )

  return (
    <Animate
      className="Carousel Carousel_type_desktop"
      effect={props.md ? 'bottom' : 'right'}
      duration={props.md ? undefined : 'longer'}
    >
      <Panel>
        <div className="Carousel-Block">
          <Content {...props} />
        </div>
      </Panel>
    </Animate>
  )
}

const Content = ({
  t,
  mobile,
  mobileOnly,
  name,
  images,
  swiper,
  setSwiper,
}: ICarouselProps) => {
  const autoplay = Boolean(!mobile || mobileOnly)

  const imageElements = images.map((image, index) => {
    const caption = `${t('portfolio.screenshot')} ${
      mobile ? `${t('portfolio.mobile')} ` : ''
    }${t('portfolio.screen')} "${t(`portfolio.project.${name}.title`)}"`
    return (
      <SwiperSlide key={image[0]} tag="figure">
        <img
          className="Carousel-Image"
          src={image[0]}
          srcSet={image[1] && `${image[1]} 2x`}
          alt={`${caption} ${index + 1}`}
          loading="lazy"
        />
      </SwiperSlide>
    )
  })

  return images.length > 1 ? (
    <Swiper
      {...swiperOptions}
      controller={swiper ? {control: swiper} : undefined}
      autoplay={autoplay ? autoplayOptions : undefined}
      modules={getModules(swiper, autoplay)}
      onSwiper={setSwiper}
    >
      {imageElements}
    </Swiper>
  ) : (
    imageElements
  )
}

const getModules = (swiper: SwiperCore, autoplay: boolean): SwiperModule[] => {
  const modules: SwiperModule[] = []
  if (swiper) modules.push(Controller)
  if (autoplay) modules.push(Autoplay)
  return modules
}

export const swiperOptions: SwiperOptions = {
  grabCursor: true,
  loop: true,
  speed: 1500,
}

const autoplayOptions = {delay: DURATION.lingering}
