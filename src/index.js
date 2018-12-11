/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import Root from './Root';

import AppFetch from './AppFetch';

console.log(process.env.NODE_ENV);
console.log(process.env.REACT_APP_API_KEY);
console.log(process.env.PUBLIC_URL);
//console.log(process.env.REACT_APP_HOME_PAGE);
console.log(process.env.REACT_APP_VERSION);

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose (applyMiddleware(sagaMiddleware, logger) ,
    )//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Root store={store} />, 
    //<AppFetch />,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
