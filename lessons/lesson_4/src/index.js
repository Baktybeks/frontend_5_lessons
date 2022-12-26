import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {rootReducer} from "./redux/reducers";

import {Provider} from "react-redux";

import {createStore} from "redux";
import {applyMiddleware} from "redux";

import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
