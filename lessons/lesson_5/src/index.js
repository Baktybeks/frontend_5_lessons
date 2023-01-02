import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {rootReducer} from "./redux/reducers";

import {applyMiddleware} from "redux";
import {createStore} from "redux";


const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
