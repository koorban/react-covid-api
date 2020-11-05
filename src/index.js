import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Context from './Context';

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);

