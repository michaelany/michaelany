import {createRoot} from 'react-dom/client'
import {HashRouter as Router} from 'react-router-dom'
import {
  createTheme,
  StylesProvider,
  ThemeProvider,
  Theme,
} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'

import '@styles/index.scss'
import '@utils/i18n'
import ScrollToTop from '@components/base/ScrollToTop'
import {handleAppLoaded, logConsoleWelcomeMessage} from '@utils/base'
import {ROOT} from '@utils/constants'
import THEME from '@styles/theme'
import App from './components/App'

const theme: Theme = createTheme(THEME as object)

window.addEventListener('load', handleAppLoaded)

console.log(
  'VITE_EMAIL_JS_TEMPLATE_ID',
  import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
)

logConsoleWelcomeMessage()

createRoot(ROOT).render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <ScrollToTop />
        <App />
      </Router>
    </ThemeProvider>
  </StylesProvider>
)
