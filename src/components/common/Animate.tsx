import React, {useState, ReactNode, HTMLAttributes} from 'react'
import cn from 'classnames'
import {Waypoint} from 'react-waypoint'

import './Animate.scss'
import {DURATIONS, EASINGS} from '../../styles/theme'

interface AnimateProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  el?: any
  effect: string
  duration?: number
  delay?: number
  easing?: string
}

interface Effects {
  TOP: string
  RIGHT: string
  BOTTOM: string
  LEFT: string
  IN: string
  OUT: string
}

export const EFFECTS: Effects = {
  TOP: 'fadeInTop',
  RIGHT: 'fadeInRight',
  BOTTOM: 'fadeInBottom',
  LEFT: 'fadeInLeft',
  IN: 'fadeInZoomIn',
  OUT: 'fadeInZoomOut',
}

export default function Animate({
  children,
  el: Element = 'div',
  className,
  effect,
  duration = DURATIONS.LONGER,
  delay = 0,
  easing = EASINGS.IN_OUT,
  ...props
}: AnimateProps): JSX.Element {
  const [reached, setReached] = useState<boolean>(false)

  const onWaypointEnter = (): void => {
    !reached && setReached(true)
  }

  return (
    <Waypoint bottomOffset="5%" onEnter={onWaypointEnter}>
      <Element
        {...props}
        className={cn(className, 'Animate')}
        style={
          reached
            ? {
                animation: `${effect} ${duration}ms ${easing} ${delay}ms both`,
              }
            : undefined
        }
      >
        {children}
      </Element>
    </Waypoint>
  )
}
