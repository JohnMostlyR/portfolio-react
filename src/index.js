import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './stylesheets/main.css';
import './stylesheets/web-fonts.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
