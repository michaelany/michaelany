import React from 'react'
import Tilt from 'react-tilt'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import './Banner.scss'
import macbookImg from '../../assets/img/pictures/macbook.png'
import macbookImg2x from '../../assets/img/pictures/macbook@2x.png'
import Pagination from '../_common/Pagination'
import {PATHS} from '../../utils/constants'
import {DURATIONS, EASINGS, BREAKPOINTS} from '../../styles/theme'

interface TiltOptions {
  max: number
  scale: number
  speed: number
  reset: boolean
}

const tiltOptions: TiltOptions = {
  max: 60,
  scale: 1,
  speed: DURATIONS.LINGERING,
  reset: false,
}

export default function Banner(): JSX.Element {
  // matches for key to responsive alternate animation reset
  const matches: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.SM}px)`)

  return (
    <section key={String(matches)} className="Banner Section Section_colorful">
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
