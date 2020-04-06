// $color_...
export enum Color {
  GREEN = '#31d0c9',
  BLUE = '#62a5fc',
  TEXT = '#4a4a4a',
  SECOND = '#7b7b7b',
  DARK_RED = '#e07a58',
}

// $duration_...
export enum Duration {
  SHORTEST = 150,
  SHORTER = 200,
  SHORT = 250,
  STANDARD = 300,
  MEDIUM = 500,
  MEDIUM_LONG = 650,
  LONG = 800,
  LONGER = 1000,
  LONGEST = 2000,
  LINGERING = 3000,
  ALTERNATE = 20000,
}

// $easing_...
export enum Easing {
  IN_OUT = 'cubic-bezier(0.4, 0, 0.2, 1)',
  OUT = 'cubic-bezier(0, 0, 0.2, 1)',
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
      primary: Color.TEXT,
      secondary: Color.SECOND,
    },
    background: {
      default: '#fff', // $color_background
    },
    primary: {
      light: Color.BLUE,
      main: Color.BLUE,
      dark: '#5895e0', // $color_dark-blue
    },
    secondary: {
      light: Color.GREEN,
      main: Color.GREEN,
      dark: '#2db3a7', // $color_dark-green
    },
    error: {
      light: Color.DARK_RED,
      main: Color.DARK_RED,
      dark: Color.DARK_RED,
    },
  },
  transitions: {
    easing: {
      easeInOut: Easing.IN_OUT,
      easeOut: Easing.OUT,
    },
    duration: {
      shortest: Duration.SHORTEST,
      shorter: Duration.SHORTER,
      short: Duration.SHORT,
      standard: Duration.STANDARD,
    },
  },
  shadows: ['none'],
  shape: {
    borderRadius: 8, // $border-radius
  },
  props: {
    MuiTooltip: {
      enterDelay: Duration.STANDARD,
    },
    MuiExpansionPanel: {
      elevation: 0,
      TransitionProps: {unmountOnExit: true},
    },
  },
}
