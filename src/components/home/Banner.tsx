import {useState, useEffect, useRef} from 'react'
import cn from 'clsx'

import './Banner.scss'
import macbookImg from '../../assets/img/shapes/macbook.png'
import macbookImg2x from '../../assets/img/shapes/macbook@2x.png'
import {Animate, Pagination, Copyright, Tilt} from '../common'
import {DETECT, ROUTE, TILT_SCALE} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {DURATION} from '../../styles/theme'

const images = [
  require('../../assets/img/pictures/js.svg').default,
  require('../../assets/img/pictures/ts.svg').default,
  require('../../assets/img/pictures/react.svg').default,
  require('../../assets/img/pictures/redux.svg').default,
  require('../../assets/img/pictures/html.svg').default,
  require('../../assets/img/pictures/pug.svg').default,
  require('../../assets/img/pictures/css.svg').default,
  require('../../assets/img/pictures/sass.svg').default,
  require('../../assets/img/pictures/mui.svg').default,
  require('../../assets/img/pictures/zeplin.svg').default,
  require('../../assets/img/pictures/sketch.svg').default,
  require('../../assets/img/pictures/vscode.svg').default,
  require('../../assets/img/pictures/git.svg').default,
]

const tiltOptions: TiltOptions = {
  reset: DETECT.safari,
  max: DETECT.safari ? 0 : 50,
  scale: DETECT.safari ? TILT_SCALE : 1,
  speed: DURATION.lingering,
}

const MacScreen = (): JSX.Element => {
  const [show, setShow] = useState<number>(0)
  const timer = useRef<any>(null!)

  useEffect(() => {
    const handleAutoShowSet = (): void => {
      setShow((show) => (show < images.length - 1 ? show + 1 : 0))
      timer.current = setTimeout(handleAutoShowSet, DURATION.longest)
    }
    timer.current = setTimeout(handleAutoShowSet, DURATION.longest)
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <>
      <img
        className="Banner-Image"
        width={652}
        height={417}
        src={macbookImg}
        srcSet={`${macbookImg2x} 2x`}
        alt="MacBook Pro"
      />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={cn(
            'Banner-ScreenImage',
            index === show && 'Banner-ScreenImage_show'
          )}
          alt={`Screen technology ${index}`}
        />
      ))}
    </>
  )
}

export default function Banner(): JSX.Element {
  return (
    <section className="Banner Section Section_colorful">
      <h2 className="VisuallyHidden">Баннер</h2>
      <div className="Banner-Content">
        <Animate effect="zoomIn" duration="longest" easing="out">
          <Tilt el="figure" className="Banner-Figure" options={tiltOptions}>
            <MacScreen />
          </Tilt>
        </Animate>
        <Pagination nextTo={ROUTE.about} />
        <Copyright />
      </div>
    </section>
  )
}
