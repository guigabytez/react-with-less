import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';


ReactDOM.render(
  <Router >
    <Route component={App} />
  </Router>,
  document.getElementById('root')
);
