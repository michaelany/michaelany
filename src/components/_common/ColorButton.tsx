import React, {ElementType, ReactNode} from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiButton from '@material-ui/core/Button'

import {hasKey, toUpperCaseFirstLetter} from '../../utils/helpers'
import {Color} from '../../utils/types'
import THEME from '../../styles/theme'

interface IColorButtonProps {
  children: ReactNode
  color?: Color
  disableFocusRipple?: boolean
  fullWidth?: boolean
  href?: string
  size?: 'small' | 'medium' | 'large'
  endIcon?: ReactNode
  startIcon?: ReactNode
  variant?: 'text' | 'outlined' | 'contained'
  style?: object
  onClick?: () => void
}

interface IButtons {
  BlueContainedButton: ElementType
  GreenContainedButton: ElementType
  BlueOutlinedButton: ElementType
  GreenOutlinedButton: ElementType
}

const commonStyles = {
  '&:not(:last-child)': {
    marginRight: 16,
  },
}

const commonContainedStyles = {
  ...commonStyles,
  color: 'white',
  '&:not(:last-child)': {
    marginRight: 16,
  },
}

const BlueContainedButton = withStyles({
  root: {
    ...commonContainedStyles,
    backgroundColor: THEME.COLOR.BLUE,
  },
  contained: {
    '@media (hover: hover)': {
      '&:hover': {
        backgroundColor: THEME.COLOR.DARK_BLUE,
      },
    },
  },
})(MuiButton)

const GreenContainedButton = withStyles({
  root: {
    ...commonContainedStyles,
    backgroundColor: THEME.COLOR.GREEN,
  },
  contained: {
    '@media (hover: hover)': {
      '&:hover': {
        backgroundColor: THEME.COLOR.DARK_GREEN,
      },
    },
  },
})(MuiButton)

const BlueOutlinedButton = withStyles({
  root: {
    ...commonStyles,
    color: THEME.COLOR.DARK_BLUE,
    borderColor: THEME.COLOR.DARK_BLUE,
  },
})(MuiButton)

const GreenOutlinedButton = withStyles({
  root: {
    ...commonStyles,
    color: THEME.COLOR.DARK_GREEN,
    borderColor: THEME.COLOR.DARK_GREEN,
  },
})(MuiButton)

const Buttons: IButtons = {
  BlueContainedButton,
  GreenContainedButton,
  BlueOutlinedButton,
  GreenOutlinedButton,
}

export default function ColorButton({children, color = 'blue', variant = 'contained', ...props}: IColorButtonProps) {
  const colorType = `${toUpperCaseFirstLetter(color) + toUpperCaseFirstLetter(variant)}Button`
  const ButtonComponent = hasKey(Buttons, colorType) ? Buttons[colorType] : Buttons.BlueContainedButton
  return (
    <ButtonComponent variant={variant} {...props}>
      {children}
    </ButtonComponent>
  )
}
