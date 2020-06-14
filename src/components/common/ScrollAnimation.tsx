import React, {useState, ReactNode} from 'react'
import {Waypoint} from 'react-waypoint'

import './ScrollAnimation.scss'

interface ScrollAnimationProps {
  children: ReactNode
  mountOnEnter: boolean
  animate: boolean
  el: any
  effect: string
  duration: number
  delay: number
  easing: string
}

export default function ScrollAnimation({
  children,
  mountOnEnter,
  animate,
  el: Element = 'div',
  effect,
  duration = 1000,
  delay = 0,
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
  ...props
}: ScrollAnimationProps): JSX.Element {
  const [reached, setReached] = useState<boolean>(false)

  const onWaypointEnter = (): void => {
    !reached && setReached(true)
  }

  return (
    <Waypoint bottomOffset="5%" onEnter={onWaypointEnter}>
      <Element
        {...props}
        className="ScrollAnimation"
        style={
          reached
            ? {
                animation: `${effect} ${duration}ms ${easing} ${delay}ms both`,
              }
            : undefined
        }
      >
        {mountOnEnter ? reached && children : children}
      </Element>
    </Waypoint>
  )
}
