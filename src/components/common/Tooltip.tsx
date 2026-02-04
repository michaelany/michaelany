import {Tooltip as MuiTooltip, type TooltipProps} from '@mui/material'

import {DETECT} from '#utils/constants'

export default function Tooltip({children, ...props}: TooltipProps) {
  return DETECT.mobile ? (
    children
  ) : (
    <MuiTooltip {...props}>{children}</MuiTooltip>
  )
}
