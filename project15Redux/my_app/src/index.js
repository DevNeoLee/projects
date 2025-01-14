import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`caught in the middleware ${JSON.stringify(result)}`);
      return result;
    }
  }
}

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

