import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
  Theme,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import './styles/index.scss'
import ScrollToTop from './components/base/ScrollToTop'
import App from './components/base/App'
import THEME from './styles/theme'
import {unregister as unregisterServiceWorker} from './utils/serviceWorker'

const theme: Theme = createMuiTheme(THEME as object)

ReactDOM.render(
  <BrowserRouter>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

unregisterServiceWorker()
