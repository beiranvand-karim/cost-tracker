import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StylesProvider } from '@material-ui/core/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/appReducer';

const store = createStore(appReducer);

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <App />
      </Provider>
    </StylesProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
