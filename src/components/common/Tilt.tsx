import React from 'react'
import ReactTilt from 'react-tilt'

import {DETECT} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {EASINGS} from '../../styles/theme'

interface TiltProps {
  children: JSX.Element
  el?: any
  className?: string
  options?: TiltOptions
}

export default function Tilt({
  children,
  el: Element,
  className,
  options,
}: TiltProps): JSX.Element {
  const content: JSX.Element = Element ? (
    <Element className={DETECT.mobile ? className : undefined}>
      {children}
    </Element>
  ) : (
    children
  )
  return DETECT.mobile ? (
    content
  ) : (
    <ReactTilt className={className} options={options} easing={EASINGS.inOut}>
      {content}
    </ReactTilt>
  )
}
