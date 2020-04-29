import React from 'react'

import './SvgPanel.scss'
import {ReactComponent as DesktopSvg} from '../../assets/img/shapes/desktop.svg'

export default function SvgPanel({children, classes}: any) {
  return (
    <div className={`${classes} SvgPanel`}>
      <DesktopSvg className="SvgPanel-Svg" />
      {children}
    </div>
  )
}
