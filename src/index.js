import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.css';

import './styles/global-styles';

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
