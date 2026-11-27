import type {ThemeOptions, Shadows} from '@mui/material'
import {alpha, type SimplePaletteColorOptions} from '@mui/material/styles'

import {
  BORDER_RADIUS,
  BREAKPOINT,
  COLOR,
  DURATION,
  EASING,
  FONT_SIZE,
  HTML_FONT_SIZE,
  SIDEBAR_WIDTH,
  toRem,
} from './tokens'

declare module '@mui/material/styles' {
  interface ThemeOptions {
    duration?: Record<string, string>
    easing?: typeof EASING
    fontSize?: typeof fontSizes
    sidebarWidth?: string
  }

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

const toResponsiveRem = (basePx: number, compactPx: number) =>
  `calc(${toRem(basePx)} + ${toRem(compactPx - basePx)} * var(--font-size-compact))`

const fontSizes = {
  small: toRem(FONT_SIZE.small),
  body: toResponsiveRem(FONT_SIZE.base, FONT_SIZE.small),
  medium: toResponsiveRem(21, 18),
  large: toResponsiveRem(22, 20),
}

const borderRadius = toRem(BORDER_RADIUS)
const borderRadiusQuarter = toRem(BORDER_RADIUS / 4)

const charcoalAlpha = alpha(COLOR.charcoal, 0.12)

const fabSize = toRem(56)
const fabCompactSize = toRem(48)
const smallIconSize = toRem(24)
const mediumIconSize = toRem(32)
const buttonIconStyles = {
  width: '1em',
  height: '1em',
  flexShrink: 0,
  fontSize: smallIconSize,
}
const compactFabStyles = {
  width: fabCompactSize,
  height: fabCompactSize,
  '& > svg': {fontSize: smallIconSize},
}

const iconButtonInteractionBackground =
  'rgb(var(--mui-palette-text-primaryChannel) / 0.04)'

const THEME: ThemeOptions = {
  cssVariables: true,
  spacing: toRem(8),
  sidebarWidth: toRem(SIDEBAR_WIDTH),
  duration: Object.fromEntries(
    Object.entries(DURATION).map(([name, value]) => [name, `${value}ms`])
  ),
  easing: EASING,
  fontSize: fontSizes,
  typography: {
    htmlFontSize: HTML_FONT_SIZE,
    fontFamily: '"Neutra Text", sans-serif',
    fontSize: FONT_SIZE.base,
    body1: {
      fontSize: 'var(--mui-fontSize-body)',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 'var(--mui-fontSize-body)',
      lineHeight: 1.5,
    },
    button: {
      letterSpacing: toRem(1),
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  breakpoints: {
    unit: 'rem',
    step: 5 / HTML_FONT_SIZE,
    values: {
      xs: 0,
      sm: (BREAKPOINT.xs + 1) / HTML_FONT_SIZE,
      md: (BREAKPOINT.sm + 1) / HTML_FONT_SIZE,
      lg: (BREAKPOINT.md + 1) / HTML_FONT_SIZE,
      xl: (BREAKPOINT.lg + 1) / HTML_FONT_SIZE,
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
    borderRadius,
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {fontSize: smallIconSize},
        fontSizeMedium: {fontSize: mediumIconSize},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({theme}) => ({
          minWidth: `min(${toRem(64)}, 100%)`,
          maxWidth: '100%',
          paddingBlock: theme.spacing(1),
          paddingInline: `min(${theme.spacing(3)}, 8vw)`,
          overflowWrap: 'anywhere',
          lineHeight: 1.5,
          '.MuiButton-icon > svg': buttonIconStyles,
          variants: [
            {
              props: {size: 'medium'},
              style: {minHeight: toRem(48)},
            },
            {
              props: {size: 'large'},
              style: {
                minHeight: toRem(64),
                paddingBlock: theme.spacing(1.5),
                fontSize: 'var(--mui-fontSize-large)',
                '.MuiButton-icon > svg': {fontSize: mediumIconSize},
              },
            },
          ],
        }),
        startIcon: ({theme}) => ({
          marginRight: theme.spacing(1),
        }),
        endIcon: ({theme}) => ({
          marginLeft: theme.spacing(1),
        }),
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          width: fabSize,
          height: fabSize,
          minHeight: toRem(36),
          '& > svg': {...buttonIconStyles, fontSize: mediumIconSize},
          '&.MuiFab-sizeMedium': compactFabStyles,
          '&.Mui-disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          [`@media (width <= ${toRem(BREAKPOINT.sm)}), (${toRem(BREAKPOINT.md)} < width <= ${toRem(BREAKPOINT.lg)})`]:
            compactFabStyles,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        disableInteractive: true,
        enterDelay: DURATION.standard,
      },
      styleOverrides: {
        tooltip: ({theme}) => ({
          maxWidth: 'min(18.75rem, 90vw)',
          fontSize: 'var(--mui-fontSize-small)',
          fontWeight: 'normal',
          color: COLOR.charcoal,
          backgroundColor: COLOR.white,
          border: `1px solid ${COLOR.charcoal}`,
          padding: theme.spacing(1, 1.5),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLOR.grey,
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: iconButtonInteractionBackground,
            },
          },
          '@media (hover: none)': {
            '&:active': {
              backgroundColor: iconButtonInteractionBackground,
            },
          },
        },
        sizeLarge: {
          padding: toRem(12),
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
          height: toRem(4),
        },
        rail: {
          opacity: 0.15,
        },
        track: {
          boxSizing: 'border-box',
        },
        thumb: {
          width: toRem(16),
          height: toRem(16),
          '@media (hover: hover)': {
            '&:hover': {
              boxShadow: `0 0 0 0.5rem ${charcoalAlpha}`,
            },
          },
          '@media (hover: none)': {
            '&:active': {
              boxShadow: `0 0 0 0.5rem ${charcoalAlpha}`,
            },
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 0.5rem ${charcoalAlpha}`,
          },
          '&.Mui-active': {
            boxShadow: `0 0 0 0.875rem ${charcoalAlpha}`,
          },
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
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: COLOR.neutral,
          '&.Mui-completed': {
            fill: COLOR.grass,
          },
        },
        text: {
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
          fontSize: 'var(--mui-fontSize-small)',
          fontWeight: 'normal',
        },
        sizeMedium: ({theme}) => ({
          minHeight: '2rem',
          height: 'auto',
          paddingBlock: '0.1875rem',
          borderRadius: '1rem',
          '.MuiChip-avatar, .MuiChip-icon': {
            marginLeft: toRem(5),
            marginRight: toRem(-6),
            flexShrink: 0,
          },
          '.MuiChip-avatar': {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
          '.MuiChip-label': {
            paddingInline: theme.spacing(1.5),
            whiteSpace: 'normal',
            overflowWrap: 'anywhere',
          },
          '&.MuiChip-outlined': {
            '.MuiChip-avatar, .MuiChip-icon': {
              marginLeft: theme.spacing(0.5),
            },
            '.MuiChip-label': {
              paddingInline: toRem(11),
            },
          },
        }),
        avatar: ({theme}) => ({
          backgroundColor: COLOR.white,
          padding: theme.spacing(0.5),
          '.MuiAvatar-img': {
            objectFit: 'contain',
          },
        }),
        icon: {
          fontSize: '1.5em',
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
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: toRem(48),
          variants: [
            {
              props: {disableGutters: false},
              style: {'&.Mui-expanded': {minHeight: toRem(64)}},
            },
          ],
        },
        content: {
          marginBlock: toRem(12),
          variants: [
            {
              props: {disableGutters: false},
              style: {'&.Mui-expanded': {marginBlock: toRem(20)}},
            },
          ],
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
          borderRadius,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius,
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
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
          '@media (hover: none)': {
            '&:active': {
              backgroundColor: 'transparent',
            },
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
        root: {
          minHeight: toRem(48),
        },
        indicator: {
          backgroundColor: COLOR.white,
          height: toRem(4),
          borderRadius: borderRadiusQuarter,
          transition: `all ${DURATION.mediumPlus}ms ${EASING.out}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: toRem(90),
          maxWidth: 'min(22.5rem, 80vw)',
          minHeight: toRem(48),
          padding: '0.75rem 1rem',
          fontSize: toRem(FONT_SIZE.base),
          color: COLOR.white,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadiusQuarter,
          borderBottomRightRadius: borderRadiusQuarter,
          [`@media (width <= ${toRem(BREAKPOINT.sm)})`]: {
            fontSize: 'var(--mui-fontSize-small)',
          },
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
          backdropFilter: 'blur(0.25rem)',
        },
      },
    },
  },
}

export default THEME
