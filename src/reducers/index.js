import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import { popUpMessageReducer, loadingMessageReducer } from './messagesReducer';
import { changeRouteReducer } from './routingReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    popUpMessages: popUpMessageReducer,
    loadingMessages: loadingMessageReducer,
    changingRoute: changeRouteReducer,
});

export default rootReducer;