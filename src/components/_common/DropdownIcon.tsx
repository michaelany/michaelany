import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import {THEME} from '../../styles/theme'

interface IDropdownIconProps {
  isOpen: boolean
}

const styles = {
  rotated: {
    transform: 'rotate(-180deg)',
  },
}

const StyledExpandMoreIcon = withStyles({
  root: {
    transition: `transform ${THEME.DURATION.SHORT}ms ${THEME.EASING.EASE_IN_OUT}`,
  },
})(ExpandMoreIcon)

export default function DropdownIcon({isOpen}: IDropdownIconProps) {
  return <StyledExpandMoreIcon style={isOpen ? styles.rotated : undefined} />
}
