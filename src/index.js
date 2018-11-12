import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';
import rootReducer from './reducers';
import './assets/style.scss';
import App from './components/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger, Thunk),
    )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
