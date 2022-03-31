import {createRoot, Root} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {
  createTheme,
  StylesProvider,
  ThemeProvider,
  Theme,
} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'

import './styles/index.scss'
import './utils/i18n'
import ScrollToTop from './components/base/ScrollToTop'
import App from './components/App'
import {handleAppLoaded, logConsoleWelcomeMessage} from './utils/base'
import {ROOT} from './utils/constants'
import THEME from './styles/theme'
import {register as registerServiceWorker} from './utils/serviceWorkerRegistration'

const root: Root = createRoot(ROOT)

const init = () => {
  const theme: Theme = createTheme(THEME as object)

  window.addEventListener('load', handleAppLoaded)

  logConsoleWelcomeMessage()

  registerServiceWorker()

  root.render(
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  )
}

init()
