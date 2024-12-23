import {JSX} from 'react'
import cn from 'clsx'

import './Panel.scss'
import DesktopSvg from '#assets/img/shapes/desktop.svg?react'

interface IPanelProps {
  children?: JSX.Element
  className?: string
}

export default function Panel({children, className}: IPanelProps) {
  return (
    <div className={cn(className, 'Panel')}>
      <DesktopSvg className="Panel-Svg" />
      {children}
    </div>
  )
}
