import { ADD_NEW_PRODUCT, REMOVE_NEW_PRODUCT, SHOW_INFO_MESSAGE } from '../constants/actionTypes'

export const addProduct = product => ({
    type: ADD_NEW_PRODUCT,
    payload: {newProduct: product}
});
export const removeProduct = index => ({
    type: REMOVE_NEW_PRODUCT,
    payload: {indexProduct: index}
});

export const showInfoMessage = message => ({
    type: SHOW_INFO_MESSAGE,
    payload: {message: message}
});
