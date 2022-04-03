import {AllHTMLAttributes} from 'react'
import ReactTilt from 'react-parallax-tilt'

import {DETECT} from 'utils/constants'
import {DURATION} from 'styles/theme'

interface TiltProps extends AllHTMLAttributes<HTMLElement> {
  children: JSX.Element
  el?: any
  className?: string
  enable?: boolean
  speed?: number
}

export default function Tilt({
  children,
  el: Element,
  className,
  enable = true,
  speed = DURATION.longest,
  ...props
}: TiltProps): JSX.Element {
  const content: JSX.Element = Element ? (
    <Element {...props} className={DETECT.mobile ? className : undefined}>
      {children}
    </Element>
  ) : (
    children
  )
  return DETECT.mobile ? (
    content
  ) : (
    <ReactTilt
      className={className}
      tiltEnable={enable}
      scale={1.05}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={speed}
    >
      {content}
    </ReactTilt>
  )
}
