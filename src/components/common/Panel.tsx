import './Panel.scss'
import desktopSvg from 'assets/img/shapes/desktop.svg'

interface PanelProps {
  children?: JSX.Element
  className?: string
}

export default function Panel({children, className}: PanelProps) {
  return (
    <div className={`${className} Panel`}>
      <img
        className="Panel-Svg"
        width={474}
        height={37}
        src={desktopSvg}
        alt="Window panel"
        role="presentation"
      />
      {children}
    </div>
  )
}
