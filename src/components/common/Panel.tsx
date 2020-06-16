import React from 'react'

import './Panel.scss'
import desktopSvg from '../../assets/img/shapes/desktop.svg'

interface PanelProps {
  children?: JSX.Element
  classes?: string
}

export default function Panel({children, classes}: PanelProps): JSX.Element {
  return (
    <div className={`${classes} Panel`}>
      <img
        className="Panel-Svg"
        src={desktopSvg}
        alt="Window panel"
        role="presentation"
      />
      {children}
    </div>
  )
}
