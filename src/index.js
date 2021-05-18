import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import CartReducer from './Redux/Cart/Cart.reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
// import reducer from './Redux/Cart/cart.reducers'

// export const store = createStore(rootReducer, applyMiddleware(...middlewares))
const reducers = combineReducers ({
  CartReducer
});
export const store = createStore(reducers,devToolsEnhancer())


ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
