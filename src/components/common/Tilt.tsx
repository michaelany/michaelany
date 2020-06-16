import React from 'react'
import ReactTilt from 'react-tilt'

import {DETECTED} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {EASINGS} from '../../styles/theme'

interface TiltProps {
  children: JSX.Element
  component?: string
  className?: string
  options?: TiltOptions
}

export default function ITilt({
  children,
  component,
  className,
  options,
}: TiltProps): JSX.Element {
  const Component: any = component
  const content: JSX.Element = component ? (
    <Component className={DETECTED.MOBILE ? className : undefined}>
      {children}
    </Component>
  ) : (
    children
  )
  return DETECTED.MOBILE ? (
    content
  ) : (
    <ReactTilt className={className} options={options} easing={EASINGS.IN_OUT}>
      {content}
    </ReactTilt>
  )
}
