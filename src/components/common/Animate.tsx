import {useState, ReactNode, AllHTMLAttributes} from 'react'
import cn from 'clsx'
import {Waypoint} from 'react-waypoint'

import './Animate.scss'
import {Effect} from '../../utils/types'
import {DURATION, EASING} from '../../styles/theme'

interface AnimateProps extends AllHTMLAttributes<HTMLElement> {
  children: ReactNode
  el?: any
  effect?: Effect
  duration?: keyof typeof DURATION
  delay?: number
  easing?: keyof typeof EASING
}

const getEffectAnimation = (effect: Effect): string =>
  `fadeIn${effect.charAt(0).toUpperCase() + effect.slice(1)}`

export default function Animate({
  children,
  el: Element = 'div',
  className,
  effect = 'bottom',
  duration = 'long',
  delay = 0,
  easing = 'inOut',
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
