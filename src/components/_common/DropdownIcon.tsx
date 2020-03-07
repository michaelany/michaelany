import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import THEME from '../../styles/theme'

interface IDropdownIconProps {
  isOpen: boolean
}

const StyledExpandMoreIcon = withStyles({
  root: {
    transition: `transform ${THEME.DURATION.SHORT}ms ${THEME.EASING.EASE_IN_OUT}`,
  },
})(ExpandMoreIcon)

export default function DropdownIcon({isOpen}: IDropdownIconProps) {
  const style = isOpen ? {transform: 'rotate(-180deg)'} : undefined
  return <StyledExpandMoreIcon style={style} />
}
