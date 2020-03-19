import React, {ReactNode} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import {hasKey, toUpperCaseFirstLetter} from '../../utils/helpers'
import {Route} from '../../utils/enums'
import {Color, ColorProp} from '../../utils/types'
import {THEME} from '../../styles/theme'

interface IColorButtonProps {
  children: ReactNode
  color: Color
  component?: ReactNode
  to?: Route
  size?: 'small' | 'medium' | 'large'
  variant?: 'outlined' | 'contained'
  disableFocusRipple?: boolean
  fullWidth?: boolean
  href?: string
  endIcon?: ReactNode
  startIcon?: ReactNode
  style?: object
  onClick?: () => void
}

const commonStyles = {
  '&:not(:last-child)': {
    marginRight: 16,
  },
}

const commonContainedStyles = {
  ...commonStyles,
  color: 'white',
}

const getStyle = (colorType: ColorProp, isContained?: boolean): object => {
  const darkColorType = `DARK_${colorType}`
  const darkValue = hasKey(THEME.COLOR, darkColorType) && THEME.COLOR[darkColorType]
  return isContained
    ? {
        root: {
          ...commonContainedStyles,
          backgroundColor: hasKey(THEME.COLOR, colorType) && THEME.COLOR[colorType],
        },
        contained: {
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: darkValue,
            },
          },
        },
      }
    : {
        root: {
          ...commonStyles,
          color: darkValue,
          borderColor: darkValue,
        },
      }
}

const styles: any = {
  useBlueContainedStyles: makeStyles(getStyle('BLUE', true)),
  useBlueOutlinedStyles: makeStyles(getStyle('BLUE')),
  useGreenContainedStyles: makeStyles(getStyle('GREEN', true)),
  useGreenOutlinedStyles: makeStyles(getStyle('GREEN')),
}

export default function ColorButton({
  children,
  color,
  variant = 'contained',
  ...props
}: IColorButtonProps): JSX.Element {
  const classes = styles[
    `use${toUpperCaseFirstLetter(color)}${toUpperCaseFirstLetter(variant)}Styles`
  ]()
  return (
    <Button
      classes={{
        root: classes.root,
        contained: classes.contained,
      }}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  )
}
