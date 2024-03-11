import './Panel.scss'
import DesktopSvg from '@assets/img/shapes/desktop.svg?react'

interface IPanelProps {
  children?: JSX.Element
  className?: string
}

export default function Panel({children, className}: IPanelProps) {
  return (
    <div className={`${className} Panel`}>
      <DesktopSvg className="Panel-Svg" />
      {children}
    </div>
  )
}
