import type {ReactNode, AllHTMLAttributes} from 'react'
import cn from 'clsx'
import {useInView} from 'react-intersection-observer'

import './Animate.scss'
import {DURATION, EASING} from '#styles/theme'
import type {TEffect} from '#utils/types'

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
  const {ref, inView} = useInView({
    triggerOnce: true,
    fallbackInView: true,
    rootMargin: '0px 0px -24px 0px',
  })

  return (
    <Element
      {...props}
      ref={ref}
      className={cn(className, 'Animate')}
      style={
        inView
          ? {
              animation: `${getEffectAnimation(effect)} ${DURATION[duration]}ms ${EASING[easing]} ${delay}ms both`,
            }
          : undefined
      }
    >
      {children}
    </Element>
  )
}

const getEffectAnimation = (effect: TEffect): string =>
  `fadeIn${effect.charAt(0).toUpperCase() + effect.slice(1)}`
