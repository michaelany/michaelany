import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {createMuiTheme, ThemeProvider, Theme} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppContent from './AppContent'
import MUI_THEME from '../../styles/theme'

const theme: Theme = createMuiTheme(MUI_THEME as object)

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  )
}
