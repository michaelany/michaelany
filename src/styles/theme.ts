// $color_...
export const COLOR = {
  green: '#2fd0c8',
  blue: '#64a6fc',
  text: '#4a4a4a',
  secondText: '#7b7b7b',
  darkRed: '#cf7e63',
}

// $duration_...
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
  lingering: 3000,
  alternate: 20000,
}

// $easing_...
export const EASING = {
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
}

// $breakpoint_...
export const BREAKPOINT = {
  xs: 399,
  sm: 599,
  md: 959,
  lg: 1279,
}

export default {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    fontSize: 16, // $font-size_base
    body2: {
      lineHeight: 1.5,
    },
    button: {
      letterSpacing: 1,
      fontWeight: 600,
      textTransform: 'normal',
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
    background: {
      default: '#fff',
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
  shadows: ['none'],
  shape: {
    borderRadius: 8, // $border-radius
  },
  props: {
    MuiTooltip: {
      enterDelay: DURATION.standard,
    },
    MuiAccordion: {
      elevation: 0,
      TransitionProps: {unmountOnExit: true},
    },
    MuiDrawer: {keepMounted: true, disablePortal: true, elevation: 0},
  },
}
