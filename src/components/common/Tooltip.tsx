import React from 'react'
import MuiTooltip, {TooltipProps} from '@material-ui/core/Tooltip'

import {DETECT} from '../../utils/constants'

export default function Tooltip({
  children,
  ...props
}: TooltipProps): JSX.Element {
  return DETECT.mobile ? (
    children
  ) : (
    <MuiTooltip {...props}>{children}</MuiTooltip>
  )
}
