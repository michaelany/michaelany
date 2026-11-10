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
  isAnimatedOnMount?: boolean
}

export default function Animate({
  children,
  className,
  el: Element = 'div',
  effect = 'bottom',
  duration = 'long',
  delay = 0,
  easing = 'inOut',
  isAnimatedOnMount = false,
  ...props
}: IAnimateProps) {
  const {ref: elementRef, inView: isInView} = useInView({
    triggerOnce: true,
    fallbackInView: true,
    rootMargin: '0px 0px -24px 0px',
    skip: isAnimatedOnMount,
  })

  const animationName =
    effect === 'plain'
      ? 'fadeIn'
      : `fadeIn${effect.charAt(0).toUpperCase()}${effect.slice(1)}`

  const style =
    isAnimatedOnMount || isInView
      ? {
          animation: `${animationName} ${DURATION[duration]}ms ${EASING[easing]} ${delay}ms both`,
        }
      : undefined

  return (
    <Element
      {...props}
      ref={elementRef}
      className={cn(className, 'Animate')}
      style={style}
    >
      {children}
    </Element>
  )
}
