import React from 'react'
import Tilt from 'react-tilt'

import './Banner.scss'
import macbookImg from '../../assets/img/pictures/macbook.png'
import macbookImg2x from '../../assets/img/pictures/macbook@2x.png'
import Pagination from '../_common/Pagination'
import {PATHS} from '../../utils/data'
import {DURATIONS, EASINGS} from '../../styles/theme'

interface ITiltOptions {
  max: number
  scale: number
  speed: number
  reset: boolean
}

const tiltOptions: ITiltOptions = {
  max: 60,
  scale: 1,
  speed: DURATIONS.LINGERING,
  reset: false,
}

export default function Banner(): JSX.Element {
  return (
    <section className="Banner Section">
      <h2 className="VisuallyHidden">Баннер</h2>
      <div className="Banner-Content">
        <Tilt options={tiltOptions} easing={EASINGS.IN_OUT}>
          <img
            className="Banner-Img"
            width={599}
            height={384}
            src={macbookImg}
            srcSet={`${macbookImg2x} 2x`}
            alt="MacBook Pro Mid 2015"
          />
        </Tilt>
        <Pagination nextTo={PATHS.ABOUT} />
      </div>
    </section>
  )
}
