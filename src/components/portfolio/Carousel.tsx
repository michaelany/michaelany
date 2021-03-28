import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay, SwiperOptions} from 'swiper'
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
}

SwiperCore.use([Autoplay])

export const swiperOptions: SwiperOptions = {
  zoom: true,
  grabCursor: true,
  loop: true,
  speed: DURATION.longer,
  loopedSlides: 3,
  autoplay: {
    delay: DURATION.lingering,
  },
}

const renderContent = ({
  mobile,
  title,
  images,
}: CarouselProps): JSX.Element | JSX.Element[] => {
  const imageElements: JSX.Element[] = images.map((image: string[]) => {
    const caption = `Скриншот ${
      mobile ? 'мобильного ' : ''
    }экрана проекта "${title}"`
    return (
      <SwiperSlide key={image[0]} tag="figure">
        <img
          className="Carousel-Img"
          src={image[0]}
          srcSet={`${image[1]} 2x`}
          alt={caption}
        />
      </SwiperSlide>
    )
  })
  return imageElements.length > 1 ? (
    <Swiper {...swiperOptions}>{imageElements}</Swiper>
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
      effect={md ? 'bottomSm' : 'rightSm'}
      duration={md ? undefined : 'longer'}
    >
      <Panel className="Carousel-Content">
        <div className="Carousel-Block">{renderContent(props)}</div>
      </Panel>
    </Animate>
  )
}
