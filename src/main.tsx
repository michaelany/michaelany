import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  type Theme,
} from '@mui/material/styles'
import {CssBaseline} from '@mui/material'

import '#styles/index.scss'
import '#utils/i18n'
import App from '#components/App'
import ScrollToTop from '#components/base/ScrollToTop'
import {logConsoleWelcomeMessage} from '#utils/base'
import {ROOT} from '#utils/constants'
import THEME from '#styles/theme'

const theme: Theme = createTheme(THEME as object)

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
