import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { HashRouter } from 'react-router-dom';

import { createStore } from "redux"
import { Provider } from "react-redux";

import reducer from "./Reducer"

const appStore = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <React.StrictMode>
  <Provider store={appStore}>
    <App />
    </Provider>
  </React.StrictMode>
  
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
