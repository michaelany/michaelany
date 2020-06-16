interface Colors {
  green: string
  blue: string
  text: string
  secondText: string
  darkRed: string
}

interface Durations {
  shortest: number
  shorter: number
  short: number
  standard: number
  medium: number
  mediumLong: number
  long: number
  longer: number
  longest: number
  lingering: number
  alternate: number
}

interface Easings {
  inOut: string
  out: string
}

interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
}

// $color_...
export const COLORS: Colors = {
  green: '#2fd0c8',
  blue: '#64a6fc',
  text: '#4a4a4a',
  secondText: '#7b7b7b',
  darkRed: '#cf7e63',
}

// $duration_...
export const DURATIONS: Durations = {
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
export const EASINGS: Easings = {
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
}

// $breakpoint_...
export const BREAKPOINTS: Breakpoints = {
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
      sm: BREAKPOINTS.xs + 1,
      md: BREAKPOINTS.sm + 1,
      lg: BREAKPOINTS.md + 1,
      xl: BREAKPOINTS.lg + 1,
    },
  },
  palette: {
    text: {
      primary: COLORS.text,
      secondary: COLORS.secondText,
    },
    background: {
      default: '#fff', // $color_background
    },
    primary: {
      light: COLORS.blue,
      main: COLORS.blue,
      dark: '#568bd0', // $color_dark-blue
    },
    secondary: {
      light: COLORS.green,
      main: COLORS.green,
      dark: '#2caca6', // $color_dark-green
    },
    error: {
      light: COLORS.darkRed,
      main: COLORS.darkRed,
      dark: COLORS.darkRed,
    },
  },
  transitions: {
    easing: {
      easeInOut: EASINGS.inOut,
      easeOut: EASINGS.out,
    },
    duration: {
      shortest: DURATIONS.shortest,
      shorter: DURATIONS.shorter,
      short: DURATIONS.short,
      standard: DURATIONS.standard,
    },
  },
  shadows: ['none'],
  shape: {
    borderRadius: 8, // $border-radius
  },
  props: {
    MuiTooltip: {
      enterDelay: DURATIONS.standard,
    },
    MuiExpansionPanel: {
      elevation: 0,
      TransitionProps: {unmountOnExit: true},
    },
  },
}
