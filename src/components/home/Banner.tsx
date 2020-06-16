import React from 'react'

import './Banner.scss'
import macbookImg from '../../assets/img/pictures/macbook.png'
import macbookImg2x from '../../assets/img/pictures/macbook@2x.png'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Tilt from '../common/Tilt'
import {DETECTED, PATHS, TILT_SCALE} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {DURATIONS} from '../../styles/theme'

const tiltOptions: TiltOptions = {
  reset: DETECTED.SAFARI,
  max: DETECTED.SAFARI ? 0 : 50,
  scale: DETECTED.SAFARI ? TILT_SCALE : 1,
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
            src={macbookImg}
            srcSet={`${macbookImg2x} 2x`}
            alt="MacBook Pro Mid 2015"
          />
        </Tilt>
        <Pagination nextTo={PATHS.ABOUT} />
        <Copyright />
      </div>
    </section>
  )
}
