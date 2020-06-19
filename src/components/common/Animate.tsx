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
  top: string
  topSm: string
  right: string
  rightSm: string
  bottom: string
  bottomSm: string
  left: string
  leftSm: string
  zoomIn: string
  zoomInSm: string
  zoomOut: string
  zoomOutSm: string
}

export const EFFECTS: Effects = {
  top: 'fadeInTop',
  topSm: 'fadeInTopSm',
  right: 'fadeInRight',
  rightSm: 'fadeInRightSm',
  bottom: 'fadeInBottom',
  bottomSm: 'fadeInBottomSm',
  left: 'fadeInLeft',
  leftSm: 'fadeInLeftSm',
  zoomIn: 'fadeInZoomIn',
  zoomInSm: 'fadeInZoomInSm',
  zoomOut: 'fadeInZoomOut',
  zoomOutSm: 'fadeInZoomOutSm',
}

export default function Animate({
  children,
  el: Element = 'div',
  className,
  effect,
  duration = DURATIONS.long,
  delay = 0,
  easing = EASINGS.inOut,
  ...props
}: AnimateProps): JSX.Element {
  const [reached, setReached] = useState<boolean>(false)

  const onWaypointEnter = (): void => {
    !reached && setReached(true)
  }

  return (
    <Waypoint onEnter={onWaypointEnter}>
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
