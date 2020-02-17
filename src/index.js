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
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import AppFetch from './AppFetch';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(sagaMiddleware) ,
//     )//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

//console.log('store', store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Root store={store} persistor={persistor} />,
    //<AppFetch />,
    //<AppScroll />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
