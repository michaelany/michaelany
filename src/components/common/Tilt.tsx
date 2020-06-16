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
    <Component className={DETECTED.mobile ? className : undefined}>
      {children}
    </Component>
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
