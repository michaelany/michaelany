import React from 'react'
import Tilt from 'react-tilt'

import './Banner.scss'
import macbookImg from '../../assets/img/macbook.png'
import macbookImg2x from '../../assets/img/macbook@2x.png'
import {THEME} from '../../styles/theme'

const tiltOptions = {
  max: 60,
  scale: 1,
  speed: 3000,
  reset: false,
}

export default function Banner() {
  return (
    <section className="Banner Section">
      <h2 className="VisuallyHidden">Баннер</h2>
      <Tilt options={tiltOptions} easing={THEME.EASING.EASE_IN_OUT}>
        <img
          className="Banner-Img"
          width={599}
          height={384}
          src={macbookImg}
          srcSet={`${macbookImg2x} 2x`}
          alt="MacBook Pro Mid 2015"
        />
      </Tilt>
    </section>
  )
}
