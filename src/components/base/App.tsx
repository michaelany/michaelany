import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {createMuiTheme, StylesProvider, ThemeProvider, Theme} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import ScrollToTop from './ScrollToTop'
import AppContent from './AppContent'
import MUI_THEME from '../../styles/theme'

const theme: Theme = createMuiTheme(MUI_THEME as object)

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ScrollToTop />
          <AppContent />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  )
}
