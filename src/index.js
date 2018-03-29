import React from 'react';
import ReactDOM from 'react-dom';

import './styles/base.css';
import App from './components/App';
import { unregister } from './utils/registerServiceWorker';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

unregister();
