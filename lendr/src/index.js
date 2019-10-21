import "./index.css";
import React from "react";
import { registrationReducer } from "./store/reducers/index";
import logger from "redux-logger";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css'

const reducers = combineReducers({ registrationReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
