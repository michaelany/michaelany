import {Tooltip as MuiTooltip, type TooltipProps} from '@mui/material'

import {IS_MOBILE_DEVICE} from '#utils/constants'

export default function Tooltip({children, ...props}: TooltipProps) {
  return IS_MOBILE_DEVICE ? (
    children
  ) : (
    <MuiTooltip {...props}>{children}</MuiTooltip>
  )
}
