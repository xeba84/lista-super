/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import { apiLoadBaseProducts } from './actions/index';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose (applyMiddleware(sagaMiddleware, logger) ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

sagaMiddleware.run(rootSaga);

//const products = ["Pan", "Leche", "Azucar", "Huevos"];
//store.dispatch(apiLoadBaseProducts(products));
store.dispatch(apiLoadBaseProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
