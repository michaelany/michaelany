import React, {ElementType} from 'react'
import {withStyles} from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Tooltip from '@material-ui/core/Tooltip'

import './Technology.scss'
import {BLANK_LINK_PROPS} from '../../utils/data'
import {ITechnology as ITechnologyProps} from '../../utils/types'
import {THEME} from '../../styles/theme'

const styles = {
  default: {
    color: THEME.COLOR.SECOND_TEXT,
  },
  blue: {
    color: THEME.COLOR.BLUE,
  },
  green: {
    color: THEME.COLOR.GREEN,
  },
  grass: {
    color: THEME.COLOR.GRASS,
  },
  red: {
    color: THEME.COLOR.RED,
  },
  yellow: {
    color: THEME.COLOR.YELLOW,
  },
  violet: {
    color: THEME.COLOR.VIOLET,
  },
}

const Link: ElementType = withStyles({
  root: {
    overflow: 'hidden',
    width: '100%',
    borderRadius: THEME.BORDER_RADIUS,
    '&.Mui-disabled': {
      opacity: 0.1,
    },
  },
})(ButtonBase)

export default function Technology({isNew, type, label, color, href}: ITechnologyProps) {
  return (
    <Tooltip title={label}>
      <Link
        {...BLANK_LINK_PROPS}
        focusRipple
        className="Technology"
        component="a"
        href={href}
        aria-label={label}
        style={styles[color]}
        disabled={isNew}
      >
        <div
          className={`Technology-Content Technology-Content_color_${color} Technology-Content_type_${type}`}
        />
      </Link>
    </Tooltip>
  )
}
