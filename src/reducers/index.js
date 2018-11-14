import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import messagesReducer from './messagesReducer'

const allReducers = combineReducers({
    products: productsReducer,
    messages: messagesReducer
});

export default allReducers;