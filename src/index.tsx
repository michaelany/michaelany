import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.scss'
import App from './components/base/App'
import {unregister as unregisterServiceWorker} from './utils/serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

unregisterServiceWorker()
