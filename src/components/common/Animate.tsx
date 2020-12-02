import React, {useState, ReactNode, AllHTMLAttributes} from 'react'
import cn from 'clsx'
import {Waypoint} from 'react-waypoint'

import './Animate.scss'
import {Effect} from '../../utils/types'
import {DURATION, EASING} from '../../styles/theme'

interface AnimateProps extends AllHTMLAttributes<HTMLElement> {
  children: ReactNode
  el?: any
  effect: string
  duration?: number
  delay?: number
  easing?: string
}

interface EffectInterface {
  top: Effect
  topSm: Effect
  right: Effect
  rightSm: Effect
  bottom: Effect
  bottomSm: Effect
  left: Effect
  leftSm: Effect
  zoomIn: Effect
  zoomInSm: Effect
  zoomOut: Effect
  zoomOutSm: Effect
}

export const EFFECT: EffectInterface = {
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
  duration = DURATION.long,
  delay = 0,
  easing = EASING.inOut,
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
