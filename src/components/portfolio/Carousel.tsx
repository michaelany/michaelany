import React from 'react'
import Swiper from 'react-id-swiper'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import './Carousel.scss'
import {ReactComponent as PhoneSvg} from '../../assets/img/shapes/phone.svg'
import Animate, {EFFECTS} from '../common/Animate'
import Panel from '../common/Panel'
import {SWIPER_OPTIONS} from '../../utils/constants'
import {DURATIONS, BREAKPOINTS} from '../../styles/theme'

interface CarouselProps {
  mobile?: boolean
  title: string
  images: string[][]
}

const renderSwiper = ({
  mobile,
  title,
  images,
}: CarouselProps): JSX.Element | JSX.Element[] => {
  const imageElements: JSX.Element[] = images.map((image: string[]) => {
    const caption = `Скриншот ${
      mobile ? 'мобильного ' : ''
    }экрана проекта "${title}"`
    return (
      <figure key={image[0]}>
        <img
          className="Carousel-Img"
          src={image[0]}
          srcSet={`${image[1]} 2x`}
          alt={caption}
        />
      </figure>
    )
  })
  return imageElements.length > 1 ? (
    <Swiper {...SWIPER_OPTIONS} containerClass="Carousel-Swiper">
      {imageElements}
    </Swiper>
  ) : (
    imageElements
  )
}

export default function Carousel(props: CarouselProps): JSX.Element {
  const md: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.md}px)`)

  if (props.mobile)
    return (
      <Animate
        className="Carousel Carousel_type_mobile"
        effect={EFFECTS.bottomSm}
      >
        <div className="Carousel-Block">{renderSwiper(props)}</div>
        <PhoneSvg className="Carousel-Svg" />
      </Animate>
    )

  return (
    <Animate
      className="Carousel Carousel_type_desktop"
      effect={md ? EFFECTS.bottomSm : EFFECTS.rightSm}
      duration={md ? undefined : DURATIONS.longer}
    >
      <Panel classes="Carousel-Content">
        <div className="Carousel-Block">{renderSwiper(props)}</div>
      </Panel>
    </Animate>
  )
}
