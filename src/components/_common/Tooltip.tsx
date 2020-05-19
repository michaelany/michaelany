import React from 'react'
import {isMobile} from 'react-device-detect'
import MuiTooltip, {TooltipProps} from '@material-ui/core/Tooltip'

export default function Tooltip({
  children,
  ...props
}: TooltipProps): JSX.Element {
  return isMobile ? children : <MuiTooltip {...props}>{children}</MuiTooltip>
}
