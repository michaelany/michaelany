enum Color {
  BACKGROUND = '#fff',
  TEXT = '#4a4a4a',
  SECOND_TEXT = '#7b7b7b',
  LIGHT_GREY = '#e6e6e6',
  DIVIDER = 'rgba(0, 0, 0, 0.12)',
  RED = '#fa8861',
  DARK_RED = '#e07a58',
  YELLOW = '#f7bc3f',
  DARK_YELLOW = '#dba539',
  GRASS = '#6ed486',
  DARK_GRASS = '#61ba76',
  GREEN = '#31d0c9',
  DARK_GREEN = '#2db3a7',
  BLUE = '#62a5fc',
  DARK_BLUE = '#5895e0',
  SECOND_BLUE = '#4078c0',
  VIOLET = '#9170fb',
  DARK_VIOLET = '#8265e0',
}

enum Breakpoint {
  XS = 599,
  SM = 959,
  MD = 1279,
}

enum Duration {
  SHORTEST = 150,
  SHORTER = 200,
  SHORT = 250,
  STANDARD = 300,
  MEDIUM = 500,
  MEDIUM_LONG = 650,
  LONG = 800,
  LONGER = 1000,
  LONGEST = 1000 * 2,
  HELLO = 1000 * 3,
  ALTERNATE = 1000 * 20,
}

enum Easing {
  IN_OUT = 'cubic-bezier(0.4, 0, 0.2, 1)',
  OUT = 'cubic-bezier(0, 0, 0.2, 1)',
}

export const THEME = {
  FONT_FAMILY: [
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
  SIDEBAR_WIDTH: 100,
  HEADER_HEIGHT: 75,
  BORDER_RADIUS: 8,
  COLOR: Color,
  BREAKPOINT: Breakpoint,
  DURATION: Duration,
  EASING: Easing,
}

export default {
  typography: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: 16,
    body2: {
      lineHeight: 1.5,
    },
    button: {
      letterSpacing: 1,
      fontWeight: 700,
      textTransform: 'capitalize',
    },
  },
  palette: {
    text: {
      primary: THEME.COLOR.TEXT,
      secondary: THEME.COLOR.SECOND_TEXT,
    },
    background: {
      default: THEME.COLOR.BACKGROUND,
    },
    primary: {
      light: THEME.COLOR.BLUE,
      main: THEME.COLOR.BLUE,
      dark: THEME.COLOR.DARK_BLUE,
    },
    secondary: {
      light: THEME.COLOR.GREEN,
      main: THEME.COLOR.GREEN,
      dark: THEME.COLOR.DARK_GREEN,
    },
    divider: THEME.COLOR.DIVIDER,
  },
  transitions: {
    easing: {
      easeInOut: THEME.EASING.IN_OUT,
      easeOut: THEME.EASING.OUT,
    },
    duration: {
      shortest: THEME.DURATION.SHORTEST,
      shorter: THEME.DURATION.SHORTER,
      short: THEME.DURATION.SHORT,
      standard: THEME.DURATION.STANDARD,
    },
  },
  shadows: ['none'],
  shape: {
    borderRadius: THEME.BORDER_RADIUS,
  },
  props: {
    MuiTooltip: {
      enterDelay: THEME.DURATION.STANDARD,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: 14,
        color: THEME.COLOR.TEXT,
        backgroundColor: 'white',
        border: `1px solid ${THEME.COLOR.TEXT}`,
      },
    },
    MuiButton: {
      root: {
        transition: ['color', 'background-color', 'border']
          .map((prop: string): string => `${prop} ${THEME.DURATION.SHORT}ms ${THEME.EASING.IN_OUT}`)
          .join(','),
      },
    },
  },
}
