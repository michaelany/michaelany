import cn from 'clsx'
import type {JSX} from 'react'

import './Sections.scss'

interface ISectionsProps {
  contact?: boolean
  firstSection: JSX.Element
  secondSection: JSX.Element
}

export default function Sections({
  contact,
  firstSection,
  secondSection,
}: ISectionsProps) {
  return (
    <div className="Sections">
      <div
        className={cn(
          'Sections-Section',
          !contact && 'Sections-Section_compact'
        )}
      >
        {firstSection}
      </div>
      <div className={cn('Sections-Section', !contact && 'Sections-Animated')}>
        {secondSection}
      </div>
    </div>
  )
}
