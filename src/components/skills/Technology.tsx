import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Tooltip from '@material-ui/core/Tooltip'

import './Technology.scss'
import {BLANK_LINK_PROPS} from '../../utils/data'
import {ITechnology as ITechnologyProps} from '../../utils/types'

export default function Technology({isNew, type, label, color, href}: ITechnologyProps) {
  return (
    <Tooltip title={label}>
      <ButtonBase
        {...BLANK_LINK_PROPS}
        focusRipple
        className={`Technology Technology_color_${color}`}
        component="a"
        href={href}
        aria-label={label}
        disabled={isNew}
      >
        <div className={`Technology-Content Technology-Content_type_${type}`} />
      </ButtonBase>
    </Tooltip>
  )
}
