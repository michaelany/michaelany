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

const RotatingExpandMoreIcon = withStyles({
  root: {
    transition: `transform ${THEME.DURATION.SHORT}ms ${THEME.EASING.IN_OUT}`,
  },
})(ExpandMoreIcon)

export default function DropdownIcon({isOpen}: IDropdownIconProps): JSX.Element {
  return <RotatingExpandMoreIcon style={isOpen ? styles.rotated : undefined} />
}
