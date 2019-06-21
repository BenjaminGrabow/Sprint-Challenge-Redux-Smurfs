import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Router >
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  document.getElementById('root')
);
