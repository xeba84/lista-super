import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import { popUpMessageReducer, loadingMessageReducer } from './messagesReducer'

const allReducers = combineReducers({
    products: productsReducer,
    popUpMessages: popUpMessageReducer,
    loadingMessages: loadingMessageReducer
});

export default allReducers;