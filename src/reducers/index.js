import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import { popUpMessageReducer, loadingMessageReducer } from './messagesReducer';
import { changeRouteReducer } from './routingReducer'
import { loginReducer } from './loginReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    popUpMessages: popUpMessageReducer,
    loadingMessages: loadingMessageReducer,
    changingRoute: changeRouteReducer,
    login: loginReducer
});

export default rootReducer;