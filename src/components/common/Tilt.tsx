import React from 'react'
import ReactTilt from 'react-tilt'

import {DETECTED} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {EASINGS} from '../../styles/theme'

interface TiltProps {
  children: JSX.Element
  el?: string
  className?: string
  options?: TiltOptions
}

export default function ITilt({
  children,
  el,
  className,
  options,
}: TiltProps): JSX.Element {
  const Element: any = el
  const content: JSX.Element = el ? (
    <Element className={DETECTED.mobile ? className : undefined}>
      {children}
    </Element>
  ) : (
    children
  )
  return DETECTED.mobile ? (
    content
  ) : (
    <ReactTilt className={className} options={options} easing={EASINGS.inOut}>
      {content}
    </ReactTilt>
  )
}
