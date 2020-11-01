import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import edit from './moduels/edit';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  edit,
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
