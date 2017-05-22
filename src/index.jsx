import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import * as reduxThunk from "redux-thunk";

import Reducers from "./reducers/index";
import Application from "./containers/main";
import SignupPage from './containers/signup';
import LoginPage from './containers/login';
import "./index.styl";

const storeFromMiddlewares = applyMiddleware()(createStore);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={storeFromMiddlewares(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
                <Application>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/signup" component={SignupPage}/>
                    </Switch>
                </Application>
        </Provider>
    </BrowserRouter>

    , document.querySelector("#app"));

// Hot Module Replacement API
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      storeFromMiddlewares.replaceReducer(Reducers);
    });
  }