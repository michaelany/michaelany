import React from 'react'

import './Banner.scss'
import macbookImg from '../../assets/img/pictures/macbook.png'
import macbookImg2x from '../../assets/img/pictures/macbook@2x.png'
import Animate, {EFFECTS} from '../common/Animate'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Tilt from '../common/Tilt'
import {DETECTED, PATHS, TILT_SCALE} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {DURATIONS, EASINGS} from '../../styles/theme'

const tiltOptions: TiltOptions = {
  reset: DETECTED.safari,
  max: DETECTED.safari ? 0 : 50,
  scale: DETECTED.safari ? TILT_SCALE : 1,
  speed: DURATIONS.lingering,
}

export default function Banner(): JSX.Element {
  return (
    <section className="Banner Section Section_colorful">
      <h2 className="VisuallyHidden">Баннер</h2>
      <div className="Banner-Content">
        <Animate
          effect={EFFECTS.zoomIn}
          duration={DURATIONS.longest}
          easing={EASINGS.out}
        >
          <Tilt component="figure" options={tiltOptions}>
            <img
              className="Banner-Img"
              src={macbookImg}
              srcSet={`${macbookImg2x} 2x`}
              alt="MacBook Pro Mid 2015"
            />
          </Tilt>
        </Animate>
        <Pagination nextTo={PATHS.about} />
        <Copyright />
      </div>
    </section>
  )
}
