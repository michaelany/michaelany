import {AllHTMLAttributes} from 'react'
import ReactTilt from 'react-tilt'

import {DETECT} from '../../utils/constants'
import {TiltOptions} from '../../utils/types'
import {EASING} from '../../styles/theme'

interface TiltProps extends AllHTMLAttributes<HTMLElement> {
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
    <ReactTilt className={className} options={options} easing={EASING.inOut}>
      {content}
    </ReactTilt>
  )
}
