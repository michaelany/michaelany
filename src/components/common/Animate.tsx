import {useState, ReactNode, AllHTMLAttributes} from 'react'
import cn from 'clsx'
import {Waypoint} from 'react-waypoint'

import './Animate.scss'
import {TEffect} from '@utils/types'
import {DURATION, EASING} from '@styles/theme'

interface IAnimateProps extends AllHTMLAttributes<HTMLElement> {
  children: ReactNode
  el?: any
  effect?: TEffect
  duration?: keyof typeof DURATION
  delay?: number
  easing?: keyof typeof EASING
}

export default function Animate({
  children,
  el: Element = 'div',
  className,
  effect = 'bottom',
  duration = 'long',
  delay = 0,
  easing = 'inOut',
  ...props
}: IAnimateProps) {
  const [reached, setReached] = useState(false)

  const onWaypointEnter = () => {
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
                animation: `${getEffectAnimation(effect)} ${
                  DURATION[duration]
                }ms ${EASING[easing]} ${delay}ms both`,
              }
            : undefined
        }
      >
        {children}
      </Element>
    </Waypoint>
  )
}

const getEffectAnimation = (effect: TEffect): string =>
  `fadeIn${effect.charAt(0).toUpperCase() + effect.slice(1)}`
