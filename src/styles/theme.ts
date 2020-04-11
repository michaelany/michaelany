import {IMap} from '../utils/types'

// $color_...
export const COLORS: IMap<string> = {
  GREEN: '#31d0c9',
  BLUE: '#62a5fc',
  TEXT: '#4a4a4a',
  SECOND: '#7b7b7b',
  DARK_RED: '#e07a58',
}

// $duration_...
export const DURATIONS: IMap<number> = {
  SHORTEST: 150,
  SHORTER: 200,
  SHORT: 250,
  STANDARD: 300,
  MEDIUM: 500,
  MEDIUM_LONG: 650,
  LONG: 800,
  LONGER: 1000,
  LONGEST: 2000,
  LINGERING: 3000,
  ALTERNATE: 20000,
}

// $easing_...
export const EASINGS: IMap<string> = {
  IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  OUT: 'cubic-bezier(0, 0, 0.2, 1)',
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
    ].join(','), // $font-family
    fontSize: 16,
    body2: {
      lineHeight: 1.5,
    },
    button: {
      fontSize: 16,
      letterSpacing: 1,
      fontWeight: 600,
      textTransform: 'normal',
    },
  },
  palette: {
    text: {
      primary: COLORS.TEXT,
      secondary: COLORS.SECOND,
    },
    background: {
      default: '#fff', // $color_background
    },
    primary: {
      light: COLORS.BLUE,
      main: COLORS.BLUE,
      dark: '#5895e0', // $color_dark-blue
    },
    secondary: {
      light: COLORS.GREEN,
      main: COLORS.GREEN,
      dark: '#2db3a7', // $color_dark-green
    },
    error: {
      light: COLORS.DARK_RED,
      main: COLORS.DARK_RED,
      dark: COLORS.DARK_RED,
    },
  },
  transitions: {
    easing: {
      easeInOut: EASINGS.IN_OUT,
      easeOut: EASINGS.OUT,
    },
    duration: {
      shortest: DURATIONS.SHORTEST,
      shorter: DURATIONS.SHORTER,
      short: DURATIONS.SHORT,
      standard: DURATIONS.STANDARD,
    },
  },
  shadows: ['none'],
  shape: {
    borderRadius: 8, // $border-radius
  },
  props: {
    MuiTooltip: {
      enterDelay: DURATIONS.STANDARD,
    },
    MuiExpansionPanel: {
      elevation: 0,
      TransitionProps: {unmountOnExit: true},
    },
  },
}
