import {ThemeOptions, Shadows} from '@mui/material'

const darkAlpha = 0.7

export const COLOR = {
  green: '#2fd0c8',
  grass: '#6ed485',
  blue: '#64a6fc',
  darkRed: '#cf7e63',
  darkVioletAlpha: `rgba(135, 116, 198, ${darkAlpha})`,
  default: '#b0b0b0',
  text: '#282c34',
  secondText: '#6d6d6d',
}

export const DURATION = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  medium: 500,
  mediumLong: 650,
  long: 800,
  longer: 1000,
  longest: 2000,
  lingering: 4000,
  alternate: 20000,
}

export const EASING = {
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
}

export const BREAKPOINT = {
  xs: 399,
  sm: 599,
  md: 959,
  lg: 1279,
}

const fontSize = {
  base: 18,
  smaller: 16,
}

const borderRadius = 8
const borderRadiusQuarter = borderRadius / 4

const THEME: ThemeOptions = {
  typography: {
    fontFamily: '"Neutra Text", sans-serif',
    htmlFontSize: fontSize.base,
    fontSize: fontSize.base,
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
    text: {
      primary: COLOR.text,
      secondary: COLOR.secondText,
    },
    primary: {
      light: COLOR.blue,
      main: COLOR.blue,
      dark: '#568bd0', // $color_dark-blue
    },
    secondary: {
      light: COLOR.green,
      main: COLOR.green,
      dark: '#2caca6', // $color_dark-green
    },
    error: {
      light: COLOR.darkRed,
      main: COLOR.darkRed,
      dark: COLOR.darkRed,
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
    borderRadius: borderRadius,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 24px',
        },
        textSizeLarge: {
          padding: '12px 24px',
          fontSize: '1.2rem',
        },
        iconSizeLarge: {
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
          fontSize: fontSize.smaller,
          fontWeight: 'normal',
          color: COLOR.text,
          backgroundColor: 'white',
          border: `1px solid ${COLOR.text}`,
          padding: '6px 12px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLOR.secondText,
        },
      },
      defaultProps: {
        size: 'large',
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          padding: 24,
          borderRadius: borderRadius,
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
          color: COLOR.default,
          '&.Mui-completed': {
            fill: COLOR.grass,
          },
        },
        text: {
          fontSize: 14,
          fontWeight: 'bold',
          fill: 'white',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: fontSize.smaller,
          fontWeight: 'normal',
        },
        avatar: {
          backgroundColor: 'white',
          padding: 5,
          '.MuiAvatar-img': {
            objectFit: 'contain',
          },
        },
        icon: {
          color: COLOR.darkVioletAlpha,
          fontSize: 24,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {elevation: 0, TransitionProps: {unmountOnExit: true}},
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
        PaperProps: {elevation: 0},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: borderRadius,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: borderRadius,
          '&.Mui-error': {
            backgroundColor: `rgba(251, 150, 116, 0.2)`, // $color_red
            '.MuiSvgIcon-root': {
              color: `rgba(207, 126, 99, ${darkAlpha})`, // $color_dark-red
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
            color: '#2caca6', // $color_dark-green
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: COLOR.default,
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
          backgroundColor: 'white',
          height: 4,
          borderRadius: borderRadiusQuarter,
          transition: `all ${DURATION.mediumLong}ms ${EASING.out}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: fontSize.base,
          color: 'white',
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadiusQuarter,
          borderBottomRightRadius: borderRadiusQuarter,
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {thickness: 3},
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        ContentProps: {elevation: 0},
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
          backgroundColor: '#ef5350', // $color_error
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
          backdropFilter: 'blur(8px)',
        },
      },
    },
  },
}

export default THEME
