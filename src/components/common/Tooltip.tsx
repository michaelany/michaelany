import React from 'react'
import {Tooltip as MuiTooltip, TooltipProps} from '@material-ui/core'

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
