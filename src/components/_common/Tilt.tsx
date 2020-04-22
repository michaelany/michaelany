import React from 'react'
import {isMobile} from 'react-device-detect'
import ReactTilt from 'react-tilt'

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
    <Component className={isMobile ? className : undefined}>
      {children}
    </Component>
  ) : (
    children
  )
  return isMobile ? (
    content
  ) : (
    <ReactTilt className={className} options={options} easing={EASINGS.IN_OUT}>
      {content}
    </ReactTilt>
  )
}
