import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
  
  <React.StrictMode>
    <StylesProvider injectFirst>
    <App />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
  
);