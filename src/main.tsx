import {createRoot} from 'react-dom/client'
import {HashRouter as Router} from 'react-router-dom'
import {
  CssBaseline,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
  Theme,
} from '@mui/material'

import '#styles/index.scss'
import '#utils/i18n'
import App from '#components/App'
import ScrollToTop from '#components/base/ScrollToTop'
import {handleAppLoaded, logConsoleWelcomeMessage} from '#utils/base'
import {ROOT} from '#utils/constants'
import THEME from '#styles/theme'

const theme: Theme = createTheme(THEME as object)

window.addEventListener('load', handleAppLoaded)

logConsoleWelcomeMessage()

createRoot(ROOT).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <ScrollToTop />
        <App />
      </Router>
    </ThemeProvider>
  </StyledEngineProvider>
)
