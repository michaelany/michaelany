import React from 'react'

import './SvgPanel.scss'
import {ReactComponent as DesktopSvg} from '../../assets/img/shapes/desktop.svg'

interface SvgPanelProps {
  children?: JSX.Element
  classes?: string
}

export default function SvgPanel({
  children,
  classes,
}: SvgPanelProps): JSX.Element {
  return (
    <div className={`${classes} SvgPanel`}>
      <DesktopSvg className="SvgPanel-Svg" />
      {children}
    </div>
  )
}
