import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import edit from './moduels/edit';

const rootReducer = combineReducers({
  edit,
});

const store = createStore(rootReducer /* preloadState ? */);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
