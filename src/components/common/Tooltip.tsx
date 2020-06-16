import React from 'react'
import MuiTooltip, {TooltipProps} from '@material-ui/core/Tooltip'

import {DETECTED} from '../../utils/constants'

export default function Tooltip({
  children,
  ...props
}: TooltipProps): JSX.Element {
  return DETECTED.mobile ? (
    children
  ) : (
    <MuiTooltip {...props}>{children}</MuiTooltip>
  )
}
