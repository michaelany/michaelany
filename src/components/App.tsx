import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppContent from './base/AppContent'
import {MUI_THEME} from '../styles/theme'

const theme = createMuiTheme(MUI_THEME)

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  )
}
