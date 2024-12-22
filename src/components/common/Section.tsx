import {ReactNode, RefObject} from 'react'
import cn from 'clsx'

import './Section.scss'
import Snowfall from '#components/base/Snowfall'
import {Pagination, Copyright} from '#components/common'
import {IS_NEW_YEAR_MODE} from '#utils/constants'
import {TRoute} from '#utils/types'

interface ISectionProps {
  children: ReactNode
  sectionRef?: RefObject<any>
  className?: string
  contentClassName?: string
  aside?: boolean
  wide?: boolean
  colorful?: boolean
  prevTo?: TRoute
  nextTo?: TRoute
}

export default function Section({
  children,
  sectionRef,
  className,
  contentClassName,
  aside,
  wide,
  colorful,
  prevTo,
  nextTo,
}: ISectionProps) {
  const isFooter = prevTo || nextTo

  return (
    <section
      ref={sectionRef}
      className={cn(
        'Section',
        wide && 'Section_wide',
        colorful && 'Section_colorful',
        className
      )}
    >
      {IS_NEW_YEAR_MODE && isFooter && (
        <Snowfall type={aside ? 'absolute' : undefined} />
      )}
      <div
        className={cn(
          contentClassName,
          'Section-Content',
          isFooter && 'Section-Content_footer'
        )}
      >
        {children}
        {isFooter && (
          <footer>
            <Pagination halfWidth={wide} prevTo={prevTo} nextTo={nextTo} />
            <Copyright />
          </footer>
        )}
      </div>
    </section>
  )
}
