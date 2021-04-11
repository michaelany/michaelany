import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay, SwiperOptions, Controller} from 'swiper'
import {useMediaQuery} from '@material-ui/core'

import './Carousel.scss'
import {ReactComponent as PhoneSvg} from '../../assets/img/shapes/phone.svg'
import {Animate, Panel} from '../common'
import {QUERY_BREAKPOINT} from '../../utils/constants'
import {DURATION} from '../../styles/theme'

interface CarouselProps {
  mobile?: boolean
  title: string
  images: string[][]
  swiper: any
  setSwiper: any
}

SwiperCore.use([Autoplay, Controller])

export const swiperOptions: SwiperOptions = {
  grabCursor: true,
  loop: true,
  speed: 1500,
}

const autoplayOptions = {delay: DURATION.lingering}

const renderContent = (
  {mobile, title, images, swiper, setSwiper}: CarouselProps,
  isDesktop?: boolean
): JSX.Element | JSX.Element[] => {
  const imageElements: JSX.Element[] = images.map((image: string[]) => {
    const caption = `Скриншот ${
      mobile ? 'мобильного ' : ''
    }экрана проекта "${title}"`
    return (
      <SwiperSlide key={image[0]} tag="figure">
        <img
          className="Carousel-Img"
          src={image[0]}
          srcSet={image[1] && `${image[1]} 2x`}
          alt={caption}
        />
      </SwiperSlide>
    )
  })
  return imageElements.length > 1 ? (
    <Swiper
      {...swiperOptions}
      autoplay={isDesktop ? autoplayOptions : undefined}
      controller={{control: swiper}}
      onSwiper={setSwiper}
    >
      {imageElements}
    </Swiper>
  ) : (
    imageElements
  )
}

export default function Carousel(props: CarouselProps): JSX.Element {
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

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
      effect={md ? 'bottom' : 'right'}
      duration={md ? undefined : 'longer'}
    >
      <Panel className="Carousel-Content">
        <div className="Carousel-Block">{renderContent(props, true)}</div>
      </Panel>
    </Animate>
  )
}
