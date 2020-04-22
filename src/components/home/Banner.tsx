import React from 'react'

import './Banner.scss'
import macbookImg from '../../assets/img/pictures/macbook.png'
import macbookImg2x from '../../assets/img/pictures/macbook@2x.png'
import Pagination from '../_common/Pagination'
import Tilt from '../_common/Tilt'
import {PATHS} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {DURATIONS} from '../../styles/theme'

const tiltOptions: TiltOptions = {
  reset: false,
  max: 60,
  scale: 1,
  speed: DURATIONS.LINGERING,
}

export default function Banner(): JSX.Element {
  return (
    <section className="Banner Section Section_colorful">
      <h2 className="VisuallyHidden">Баннер</h2>
      <div className="Banner-Content">
        <Tilt component="figure" options={tiltOptions}>
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
