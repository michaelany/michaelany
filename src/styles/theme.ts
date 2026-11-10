import type {ThemeOptions, Shadows} from '@mui/material'
import {alpha, type SimplePaletteColorOptions} from '@mui/material/styles'

import {
  BORDER_RADIUS,
  BREAKPOINT,
  COLOR,
  DURATION,
  EASING,
  FONT_SIZE,
} from './tokens'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: SimplePaletteColorOptions
    blue?: SimplePaletteColorOptions
    green?: SimplePaletteColorOptions
    grass?: SimplePaletteColorOptions
    yellow?: SimplePaletteColorOptions
    red?: SimplePaletteColorOptions
    violet?: SimplePaletteColorOptions
  }
}

const borderRadiusQuarter = BORDER_RADIUS / 4

const charcoalAlpha = alpha(COLOR.charcoal, 0.12)

const THEME: ThemeOptions = {
  cssVariables: true,
  typography: {
    fontFamily: '"Neutra Text", sans-serif',
    htmlFontSize: FONT_SIZE.base,
    fontSize: FONT_SIZE.base,
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      letterSpacing: 0.8,
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: BREAKPOINT.xs + 1,
      md: BREAKPOINT.sm + 1,
      lg: BREAKPOINT.md + 1,
      xl: BREAKPOINT.lg + 1,
    },
  },
  palette: {
    neutral: {
      main: COLOR.neutral,
      dark: COLOR.neutralDark,
      light: COLOR.neutralLight,
    },
    blue: {
      main: COLOR.blue,
      dark: COLOR.blueDark,
      light: COLOR.blueLight,
    },
    green: {
      main: COLOR.green,
      dark: COLOR.greenDark,
      light: COLOR.greenLight,
    },
    grass: {
      main: COLOR.grass,
      dark: COLOR.grassDark,
    },
    yellow: {
      main: COLOR.yellow,
      dark: COLOR.yellowDark,
      light: COLOR.yellowLight,
    },
    red: {
      main: COLOR.red,
      dark: COLOR.redDark,
      light: COLOR.redLight,
    },
    violet: {
      main: COLOR.violet,
      dark: COLOR.violetDark,
    },
    text: {
      primary: COLOR.charcoal,
      secondary: COLOR.grey,
    },
    primary: {
      main: COLOR.blue,
      dark: COLOR.blueDark,
      light: COLOR.blue,
    },
    secondary: {
      main: COLOR.green,
      dark: COLOR.greenDark,
      light: COLOR.green,
    },
    info: {
      light: COLOR.white,
      main: COLOR.white,
      dark: COLOR.white,
    },
    error: {
      light: COLOR.scarlet,
      main: COLOR.scarlet,
      dark: COLOR.scarlet,
    },
  },
  transitions: {
    easing: {
      easeInOut: EASING.inOut,
      easeOut: EASING.out,
    },
    duration: {
      shortest: DURATION.shortest,
      shorter: DURATION.shorter,
      short: DURATION.short,
      standard: DURATION.standard,
    },
  },
  shadows: Array(25).fill('none') as Shadows,
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 24px',
          '.MuiButton-icon .MuiSvgIcon-root': {
            fontSize: '1.5rem',
          },
          variants: [
            {
              props: {variant: 'text', size: 'large'},
              style: {
                padding: '12px 24px',
                fontSize: '1.2rem',
              },
            },
          ],
        },
        icon: {
          variants: [
            {
              props: {size: 'large'},
              style: {
                fontSize: '1.5rem',
              },
            },
          ],
          '.MuiSvgIcon-root': {
            fontSize: '1.5rem',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        disableInteractive: true,
        enterDelay: DURATION.standard,
      },
      styleOverrides: {
        tooltip: {
          fontSize: FONT_SIZE.smaller,
          fontWeight: 'normal',
          color: COLOR.charcoal,
          backgroundColor: COLOR.white,
          border: `1px solid ${COLOR.charcoal}`,
          padding: '6px 12px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLOR.grey,
        },
      },
      defaultProps: {
        size: 'large',
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          minWidth: 0,
          color: 'inherit',
          height: 4,
        },
        rail: {
          opacity: 0.15,
        },
        track: {
          boxSizing: 'border-box',
        },
        thumb: {
          width: 16,
          height: 16,
          '@media (hover: hover)': {
            '&:hover': {
              boxShadow: `0 0 0 8px ${charcoalAlpha}`,
            },
          },
          '@media (hover: none)': {
            '&:active': {
              boxShadow: `0 0 0 8px ${charcoalAlpha}`,
            },
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 8px ${charcoalAlpha}`,
          },
          '&.Mui-active': {
            boxShadow: `0 0 0 14px ${charcoalAlpha}`,
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          padding: 24,
          borderRadius: BORDER_RADIUS,
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          ':first-of-type > .MuiStepLabel-root': {
            paddingTop: 0,
          },
          ':last-of-type > .MuiStepLabel-root': {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fontSize: 24,
          color: COLOR.neutral,
          '&.Mui-completed': {
            fill: COLOR.grass,
          },
        },
        text: {
          fontSize: 14,
          fontWeight: 'bold',
          fill: COLOR.white,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
        spacing: 1,
        useFlexGap: true,
      },
      styleOverrides: {
        root: {
          alignItems: 'center',
          flexWrap: 'wrap',
        },
      },
    },
    MuiChip: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          fontSize: FONT_SIZE.smaller,
          fontWeight: 'normal',
        },
        avatar: {
          backgroundColor: COLOR.white,
          padding: 5,
          '.MuiAvatar-img': {
            objectFit: 'contain',
          },
        },
        icon: {
          fontSize: 24,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        slotProps: {transition: {unmountOnExit: true}},
      },
      styleOverrides: {
        root: {
          '&.Mui-expanded + .MuiAccordion-root::before': {
            opacity: 0,
          },
        },
      },
    },
    MuiDrawer: {
      defaultProps: {keepMounted: true, disablePortal: true, elevation: 0},
      styleOverrides: {
        paper: {
          overflow: 'visible',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        scroll: 'body',
        slotProps: {paper: {elevation: 0}},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.white,
          borderRadius: BORDER_RADIUS,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: BORDER_RADIUS,
          '&.Mui-error': {
            backgroundColor: alpha(COLOR.scarlet, 0.2),
            '.MuiSvgIcon-root': {
              color: COLOR.scarlet,
            },
          },
          '&.Mui-focused:not(.Mui-error)': {
            backgroundColor: 'transparent',
          },
          '.MuiSvgIcon-root': {
            transition: `color ${DURATION.short}ms ${EASING.out}`,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused:not(.Mui-error)': {
            color: COLOR.greenDark,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: COLOR.neutral,
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        scrollButtons: false,
        textColor: 'inherit',
        variant: 'scrollable',
      },
      styleOverrides: {
        indicator: {
          backgroundColor: COLOR.white,
          height: 4,
          borderRadius: borderRadiusQuarter,
          transition: `all ${DURATION.mediumLong}ms ${EASING.out}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: FONT_SIZE.base,
          color: COLOR.white,
          borderTopLeftRadius: BORDER_RADIUS,
          borderTopRightRadius: BORDER_RADIUS,
          borderBottomLeftRadius: borderRadiusQuarter,
          borderBottomRightRadius: borderRadiusQuarter,
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {thickness: 3},
      styleOverrides: {
        root: {
          color: COLOR.white,
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        slotProps: {content: {elevation: 0}},
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        autoHideDuration: DURATION.lingering,
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.scarlet,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingTop: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        button: {
          display: 'inline',
          verticalAlign: 'inherit',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(4px)',
        },
      },
    },
  },
}

export default THEME
